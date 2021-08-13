import type { EventEmitter } from '@stencil/core';
import { Component, Event, Element, Host, Prop, h } from '@stencil/core';
import type { Color } from '../../interface';
import { createColorClasses } from '../../utils/theme';
import { inheritAttributes } from '../../utils/helpers';

@Component({
  tag: 'yh-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  private inheritedAttributes: Record<string, any> = {};

  @Element() el!: HTMLElement;
  /**
   * The color to use from your application's color palette.
   * Default options are: 'default' | 'primary' | 'success' | 'warning' | 'danger'.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color = 'default';
  // fill?: 'solid' | 'outline' | 'none'
  /**
   * Set to `"outline"` for a transparent
   * button with a border, or to `"solid"`.
   */
  @Prop({ reflect: true, mutable: true }) fill?: 'outline' | 'solid' | 'none' = 'solid';

  /**
   * The button size.
   */
  @Prop({ reflect: true }) size?: 'mini' | 'small' | 'middle' | 'large' = 'middle';

  /**
   * Set to `true` for a full-width button or to `false` for a full-width button
   * without left and right borders.
   */
  @Prop({ reflect: true }) block?: boolean = false;

  // loading?: boolean
  /**
   * If this button has loading
   */
  @Prop() loading?: boolean = false;
  // loadingText?: string
  /**
   * If this button loading,show the loadingText
   */
  @Prop() loadingText?: string = '';

  // disabled?: boolean
  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled = false;

  // type?: 'submit' | 'reset' | 'button'
  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';

  /**
   * Emitted when the button has focus.
   */
  @Event() aliFocus!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() aliBlur!: EventEmitter<void>;

  /**
   * Emitted when the button is clicked.
   */
  @Event() aliClick!: EventEmitter<void>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }
  private onFocus = () => {
    this.aliFocus.emit();
  };

  private onBlur = () => {
    this.aliBlur.emit();
  };

  private onClick = () => {
    this.aliClick.emit();
  };

  render() {
    const { loading, disabled, color, block, fill, size, type, inheritedAttributes } = this;
    const btnDisabled = disabled || loading;

    return (
      <Host
        aria-disabled={btnDisabled ? 'true' : null}
        role="button"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onClick={this.onClick}
        class={createColorClasses(color, {
          [`fill-${fill}`]: true,
          disabled: btnDisabled,
          [size]: true,
          block,
        })}
      >
        <button part="native" class="button-native" type={type} disabled={btnDisabled} {...inheritedAttributes}>
          <span class="button-inner">
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
        </button>
      </Host>
    );
  }
}
