import { Component, Prop, Event, h, EventEmitter, Host, Watch, Listen, Element, State } from '@stencil/core';

import * as AllEmoji from './all.json';

import * as EmojiSvgs from './svgs';

interface EmojiSet {
  aliases: { [key:string]: string };
  categories: EmojiCategory[];
  compressed: boolean;
  default: EmojiSet;
}

const EMOJI = (AllEmoji as any) as EmojiSet;

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

  @State() emoji: any;
  @State() selectedCategory: EmojiCategory;
  @State() categories: EmojiCategory[];
  @State() searchQuery: string = '';

  x: number = 0;
  y: number = 0;

  async componentWillLoad() {
    this.categories = EMOJI.categories;
    this.selectedCategory = this.categories[0];
    /*
    const ret = await fetch('/assets/emoji-picker/all.json')

    this.emoji = await ret.json();
    console.log('Loaded emoji', this.emoji);
    */
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

  handleSelectCategory = (c: EmojiCategory) => this.selectedCategory = c;

  handleSearchInput = (e) => this.searchQuery = e.target.value;

  render() {
    if (!this.open) {
      return null;
    }

    console.log(AllEmoji);

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
            />
          <Emojis
            category={this.selectedCategory}
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
  {categories.map(c => (
    <div
      class={`category${selectedCategory === c ? ' category-selected' : ''}`}
      onClick={() => selectCategory(c)}
      >
      {EmojiSvgs.categories[c.id]()}
    </div>
  ))}
  </div>
)

interface SearchProps {
  onInput: (e) => void;
  value: string;
}
const Search = ({ onInput, value }: SearchProps) => (
  <div class="search">
    <input
      type="search"
      placeholder="Search"
      value={value}
      onInput={onInput}
      onPaste={onInput}
      onClick={onInput}
      />
  </div>
)

interface EmojisProps {
  category: EmojiCategory;
}
const Emojis = ({ category }: EmojisProps) => {
  return (
    <div class="emojis">
    </div>
  )
}