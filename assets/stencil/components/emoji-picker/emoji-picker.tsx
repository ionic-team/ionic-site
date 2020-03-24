import { Component, Prop, Event, h, EventEmitter, Host, Watch, Listen, Element, State } from '@stencil/core';

import * as EmojiSvgs from './svgs';
import { unifiedToNative } from '../../util/emoji';

interface EmojiSet {
  aliases: { [key:string]: string };
  categories: EmojiCategory[];
  compressed: boolean;
  default: EmojiSet;
  emojis: EmojiMap;
}

interface EmojiMap {
  [name:string]: Emoji;
}

export interface Emoji {
  name?: string;
  unified?: string;
  non_qualified?: string;
  documo?: any;
  au?: string;
  softbank?: string;
  google?: string;
  image?: string;
  sheet_x?: number;
  sheet_y?: number;
  short_name?: string;
  short_names?: string[];
  text?: string;
  texts?: string;
  category?: string;
  sort_order?: number;
  added_in?: string;
  has_img_apple?: boolean;
  has_img_google?: boolean;
  has_img_twitter?: boolean;
  has_img_facebook?: boolean;
  skin_variations?: { [code:string]: SkinVariation };
}

interface SkinVariation {
  added_in: string;
  has_img_apple: boolean;
  has_img_facebook: boolean;
  has_img_google: boolean;
  has_img_twitter: boolean;
  image: string;
  non_qualified: any;
  sheet_x: number;
  sheet_y: number;
  unified: string;
}

interface EmojiCategory {
  emojis: string[];
  id: string;
  name: string;
}

@Component({
  tag: 'ionic-emoji-picker',
  styleUrl: 'emoji-picker.scss',
  shadow: true
})
export class EmojiPicker {
  @Element() el;

  @Prop() open = false;
  @Prop() openEvent: MouseEvent;
  @Event() emojiPick: EventEmitter;
  @Event() closed: EventEmitter;

  @State() emoji: EmojiSet;
  @State() selectedCategory: EmojiCategory;
  @State() categories: EmojiCategory[];
  @State() searchQuery: string = '';

  @State() emojis: EmojiMap;

  x: number = 0;
  y: number = 0;

  async componentWillLoad() {
    /*
    this.categories = EMOJI.categories;
    this.selectedCategory = this.categories[0];
    */
    const ret = await fetch('/js/stencil/emoji.json');

    const allEmoji = await ret.json() as Emoji[];

    var categories = [
      ['Smileys & Emotion', 'smileys'],
      ['People & Body', 'people'],
      ['Animals & Nature', 'nature'],
      ['Food & Drink', 'foods'],
      ['Activities', 'activity'],
      ['Travel & Places', 'places'],
      ['Objects', 'objects'],
      ['Symbols', 'symbols'],
      ['Flags', 'flags'],
    ]

    const startingCategories = categories.map(c => ({
      emojis: [],
      id: c[1],
      name: c[0]
    }));

    this.emojis = allEmoji.reduce((emojis, emoji) => {
      if (!(emoji.short_name in emojis)) {
        emojis[emoji.short_name] = emoji;
      }
      return emojis;
    }, {} as EmojiMap);

    this.categories = allEmoji.sort((a, b) => a.sort_order - b.sort_order).reduce((categories, emoji) => {
      if (emoji.category === 'Skin Tones') {
        return categories;
      }

      let cat = categories.find(c => c.name === emoji.category);
      if (!cat) {
        cat = {
          emojis: [],
          id: emoji.category,
          name: emoji.category
        } as EmojiCategory;
        categories.push(cat);
      }
      cat.emojis.push(emoji.short_name);
      return categories;
    }, startingCategories);

    let smileys = this.categories[0]
    let people = this.categories[1]
    let smileysAndPeople = { id: 'people', name: 'Smileys & People', emojis: [] }
    smileysAndPeople.emojis = []
      .concat(smileys.emojis.slice(0, 114))
      .concat(people.emojis)
      .concat(smileys.emojis.slice(114));

    this.categories.unshift(smileysAndPeople);
    this.categories.splice(1, 2);

    this.selectedCategory = this.categories[0];

    console.log('Loaded emoji', this.categories, this.emojis);
  }

  @Watch('openEvent')
  openEventChange() {
    if (!this.openEvent) {
      return;
    }
    const target = this.openEvent.target;
    const box = (target as HTMLElement).getBoundingClientRect();
    this.x = box.left;
    this.y = box.bottom;
  }

  @Listen('click', { target: 'body' })
  handleBodyClick(e) {
    if (!this.open) {
      return;
    }

    let el = e.target;
    while (el) {
      if (el === this.el) {
        return;
      }
      el = el.parentElement;
    }

    this.closed.emit();
  }

  handleSelectCategory = (c: EmojiCategory) => {
    this.selectedCategory = c;
    this.searchQuery = '';
  }

  handleSearchInput = (e) => this.searchQuery = e.target.value;

  handleClearSearchInput = (e) => this.searchQuery = '';

  handleEmojiPicked = (emoji: Emoji) => {
    this.emojiPick.emit(emoji);
  }

  getFilteredEmojis() {
    if (this.searchQuery) {
      return Object.keys(this.emojis).filter(k => {
        const emoji = this.emojis[k];
        const fields = [
          ...(emoji.short_names || []),
          emoji.name,
        ];

        return fields.some(f => !!f && f.toLocaleLowerCase().indexOf(this.searchQuery.toLocaleLowerCase()) >= 0);
      }).sort((a, b) => {
        const ea = this.emojis[a];
        const eb = this.emojis[b];

        return ea.sort_order - eb.sort_order;
      });
    }

    return this.selectedCategory.emojis;
  }

  render() {
    if (!this.open) {
      return null;
    }

    const visibleEmojis = this.searchQuery ? this.getFilteredEmojis() : this.selectedCategory.emojis;

    return (
      <Host
        style={{ left: `${this.x}px`, top: `${this.y}px` }}
        class={ this.open ? 'open' : ''}>
        <div class="wrapper">
          <Categories
            categories={this.categories}
            selectedCategory={this.selectedCategory}
            selectCategory={this.handleSelectCategory}
            />
          <Search
            value={this.searchQuery}
            onInput={this.handleSearchInput}
            onClear={this.handleClearSearchInput}
            />
          <Emojis
            visibleEmojis={visibleEmojis}
            emojis={this.emojis}
            emojiPicked={this.handleEmojiPicked}
            />
        </div>
      </Host>
    )
  }
}

interface CategoriesProps {
  categories: EmojiCategory[];
  selectedCategory: EmojiCategory;
  selectCategory: (c: EmojiCategory) => void;
}

const Categories = ({ categories, selectedCategory, selectCategory }: CategoriesProps) => (
  <div class="categories">
  {categories.map(c => {
    return (
      <div
        class={`category${selectedCategory === c ? ' category-selected' : ''}`}
        onClick={() => selectCategory(c)}
        >
        {EmojiSvgs.categories[c.id]()}
      </div>
    );
  }
  )}
  </div>
)

interface SearchProps {
  onInput: (e) => void;
  onClear: (e) => void;
  value: string;
}
const Search = ({ onInput, onClear, value }: SearchProps) => (
  <div class="search">
    <input
      type="search"
      placeholder="Search"
      value={value}
      onInput={onInput}
      onPaste={onInput}
      onClick={onInput}
      />
    { value ? (
    <div class="x" onClick={onClear}>
      <ion-icon name="close" />
    </div>
    ) : null}
  </div>
)

interface EmojisProps {
  visibleEmojis: string[];
  emojis: EmojiMap;
  emojiPicked: (emoji: Emoji) => void;
}
const Emojis = ({ visibleEmojis, emojis, emojiPicked }: EmojisProps) => {
  return (
    <ul class="emojis">
      {visibleEmojis.map(e => {
        const em = emojis[e]
        const x = em.sheet_x * (100 / 56);
        const y = em.sheet_y * (100 / 56);
        return (
          <li onClick={() => emojiPicked(em)}>
            <div
              class="emoji-image"
              style={{ backgroundPosition: `${x}% ${y}%`}} />
            {/*{unifiedToNative(emojis[e].unified)}*/}
          </li>
        )
      })}
    </ul>
  )
}