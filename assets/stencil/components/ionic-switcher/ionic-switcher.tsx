import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "ionic-switcher",
  styleUrl: "ionic-switcher.scss",
  shadow: false,
})
export class IonicSwitcher {
  @Prop() items: string;
  @Prop() index: number;

  render() {
    const { index } = this;
    const items = this.items.split(",");

    return (
      <div class="switcher">
        {items.map((item, i) => {
          const completed = i < index;
          const inactive = i > index;
          return [
            <div
              key={item}
              class={`switcher-button${completed ? " switcher-button-completed" : ""}${
                inactive ? " switcher-button-inactive" : ""
              }`}
            >
              {completed ? <ion-icon name="checkmark-circle" /> : <div class="empty-circle" />}
              {item}
            </div>,
            i < items.length - 1 ? <div class="switcher-separator" /> : null,
          ];
        })}
      </div>
    );
  }
}
