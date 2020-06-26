import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'ui-floating-input',
  styleUrl: 'floating-input.scss',
  shadow: false
})
export class FloatingInput {
  @Prop() label = '';
  @Prop() disabled = false;
  @Prop() value = '';
  @Prop() name: string;
  @Prop() inputId: string;
  @Prop() type = 'text';
  @Prop() message = '';
  @Prop() inputTabIndex: number;
  @Prop() required: boolean;
  @Prop() autocomplete: string;
  @Prop() onChange: (e) => void = (_e) => {};

  @State() focused = false;

  @Method()
  async setFocus(focused) {
    this.focused = focused;
  }

  checkChange = (e) => {
    this.onChange && this.onChange(e);
  }

  handleInput = (e) => {
    this.checkChange(e);
  }

  handleChange = (e) => {
    this.checkChange(e);
  }

  handleKeyUp = (e) => {
    this.checkChange(e);
  }

  handlePaste = (e) => {
    this.checkChange(e);
  }

  handleClick = (e) => {
    this.checkChange(e);
  }

  handleBlur = () => {
    this.setFocus(false);
    this.message = '';
  }

  render() {
    const { label, type, name, inputId, inputTabIndex,
            required, value, disabled, autocomplete, message } = this;

    return [
      <div class={{'ui-floating-input': true,
                    'focused': this.focused,
                    'has-value': this.value !== ''}}>
        <input
          id={inputId}
          class={{'invalid': this.message !== ''}}
          type={type}
          name={name}
          tabindex={inputTabIndex}
          required={required}
          value={value}
          disabled={disabled}
          autocomplete={autocomplete}
          onInput={this.handleInput}
          onPaste={this.handlePaste}
          onKeyUp={this.handleKeyUp}
          onClick={this.handleClick}
          onFocus={_e => this.setFocus(true)}
          onBlur={this.handleBlur}
          />
        <label>{label}</label>
      </div>,
      message && <div class="form-message form-message--small">{message}</div>
    ];
  }
}