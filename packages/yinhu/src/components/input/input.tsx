import type { EventEmitter } from '@stencil/core';
import { Build, Component, Host, h, Prop, Event, State, Element, Watch, Method } from '@stencil/core';
import type { AutocompleteTypes, Color, StyleEventDetail, TextFieldTypes } from '../../interface';
import { createColorClasses } from '../../utils/theme';
import { debounceEvent, findItemLabel, inheritAttributes } from '../../utils/helpers';

export interface InputChangeEventDetail {
  value: string | number | undefined | null;
}

@Component({
  tag: 'yh-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input {
  private nativeInput?: HTMLInputElement;
  // eslint-disable-next-line
  private inputId = `yh-input-${inputIds++}`;
  private didBlurAfterEdit = false;
  private inheritedAttributes: Record<string, any> = {};

  /**
   * This is required for a WebKit bug which requires us to
   * blur and focus an input to properly focus the input in
   * an item with delegatesFocus. It will no longer be needed
   * with iOS 14.
   *
   * @internal
   */
  @Prop() fireFocusEvents = true;

  @State() hasFocus = false;

  @Element() el!: HTMLElement;

  /**
   * The color to use from your application's color palette.
   * Default options are: 'default' | 'primary' | 'success' | 'warning' | 'danger'.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color = 'default';

  /**
   * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
   */
  @Prop() accept?: string;

  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
   * Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`.
   */
  @Prop() autocapitalize = 'off';

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop() autocomplete: AutocompleteTypes = 'off';

  /**
   * Whether auto correction should be enabled when the user is entering/editing the text value.
   */
  @Prop() autocorrect: 'on' | 'off' = 'off';

  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  @Prop() clearable = false;

  /**
   * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
   */
  @Prop() clearOnEdit?: boolean;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `change` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 0;

  @Watch('debounce')
  protected debounceChanged() {
    this.change = debounceEvent(this.change, this.debounce);
  }

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  @Watch('disabled')
  protected disabledChanged() {
    this.emitStyle();
  }

  /**
   * A hint to the browser for which enter key to display.
   * Possible values: `"enter"`, `"done"`, `"go"`, `"next"`,
   * `"previous"`, `"search"`, and `"send"`.
   */
  @Prop() enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @Prop() max?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @Prop() min?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number;

  /**
   * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
   */
  @Prop() multiple?: boolean;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.
   */
  @Prop() pattern?: string;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string | null;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * If `true`, the element will have its spelling and grammar checked.
   */
  @Prop() spellcheck = false;

  /**
   * Works with the min and max attributes to limit the increments at which a value can be set.
   * Possible values are: `"any"` or a positive floating point number.
   */
  @Prop() step?: string;

  /**
   * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
   */
  @Prop() size?: number;

  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: TextFieldTypes = 'text';

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() yhInput!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when the value has changed.
   */
  @Event() change!: EventEmitter<InputChangeEventDetail>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() yhBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input has focus.
   */
  @Event() yhFocus!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input has focus.
   */
  @Event() clear!: EventEmitter<InputChangeEventDetail>;

  /**
   * Emitted when the styles change.
   * @internal
   */
  @Event() yhStyle!: EventEmitter<StyleEventDetail>;

  /**
   * Update the item classes when the placeholder changes
   */
  @Watch('placeholder')
  protected placeholderChanged() {
    this.emitStyle();
  }

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    this.emitStyle();
    console.log({ value: this.value == null ? this.value : this.value.toString() });
    this.change.emit({ value: this.value == null ? this.value : this.value.toString() });
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label', 'tabindex', 'title']);
  }

  connectedCallback() {
    this.emitStyle();
    this.debounceChanged();
    if (Build.isBrowser) {
      document.dispatchEvent(
        new CustomEvent('yhInputDidLoad', {
          detail: this.el,
        }),
      );
    }
  }

  disconnectedCallback() {
    if (Build.isBrowser) {
      document.dispatchEvent(
        new CustomEvent('yhInputDidUnload', {
          detail: this.el,
        }),
      );
    }
  }

  /**
   * Sets focus on the native `input` in `yh-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Sets blur on the native `input` in `yh-input`. Use this method instead of the global
   * `input.blur()`.
   * @internal
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput!);
  }

  private shouldClearOnEdit() {
    const { type, clearOnEdit } = this;
    return clearOnEdit === undefined ? type === 'password' : clearOnEdit;
  }

  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }

  private emitStyle() {
    this.yhStyle.emit({
      'interactive': true,
      'input': true,
      'has-placeholder': this.placeholder != null,
      'has-value': this.hasValue(),
      'has-focus': this.hasFocus,
      'interactive-disabled': this.disabled,
    });
  }

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.yhInput.emit(ev as KeyboardEvent);
  };

  private onBlur = (ev: FocusEvent) => {
    this.hasFocus = false;
    this.focusChanged();
    this.emitStyle();

    if (this.fireFocusEvents) {
      this.yhBlur.emit(ev);
    }
  };

  private onFocus = (ev: FocusEvent) => {
    this.hasFocus = true;
    this.focusChanged();
    this.emitStyle();

    if (this.fireFocusEvents) {
      this.yhFocus.emit(ev);
    }
  };

  private onKeydown = (ev: KeyboardEvent) => {
    if (this.shouldClearOnEdit()) {
      // Did the input value change after it was blurred and edited?
      // Do not clear if user is hitting Enter to submit form
      if (this.didBlurAfterEdit && this.hasValue() && ev.key !== 'Enter') {
        // Clear the input
        this.clearTextInput();
      }

      // Reset the flag
      this.didBlurAfterEdit = false;
    }
  };

  private clearTextOnEnter = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      this.clearTextInput(ev);
    }
  };

  private clearTextInput = (ev?: Event) => {
    if (this.clearable && !this.readonly && !this.disabled && ev) {
      ev.preventDefault();
      ev.stopPropagation();

      // Attempt to focus input again after pressing clear button
      this.setFocus();
    }

    this.value = '';

    /**
     * This is needed for clearOnEdit
     * Otherwise the value will not be cleared
     * if user is inside the input
     */
    if (this.nativeInput) {
      this.nativeInput.value = '';
    }
    this.clear.emit({ value: this.value == null ? this.value : this.value.toString() });
  };

  private focusChanged() {
    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
    if (!this.hasFocus && this.shouldClearOnEdit() && this.hasValue()) {
      this.didBlurAfterEdit = true;
    }
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }
  render() {
    const value = this.getValue();
    const labelId = `${this.inputId}-lbl`;
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }
    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={createColorClasses(this.color, {
          'has-value': this.hasValue(),
        })}
      >
        <input
          class="input-native"
          // eslint-disable-next-line
          ref={input => (this.nativeInput = input)}
          aria-labelledby={label ? labelId : null}
          disabled={this.disabled}
          accept={this.accept}
          autoCapitalize={this.autocapitalize}
          autoComplete={this.autocomplete}
          autoCorrect={this.autocorrect}
          autoFocus={this.autofocus}
          enterKeyHint={this.enterkeyhint}
          inputMode={this.inputmode}
          min={this.min}
          max={this.max}
          minLength={this.minlength}
          maxLength={this.maxlength}
          multiple={this.multiple}
          name={this.name}
          pattern={this.pattern}
          placeholder={this.placeholder || ''}
          readOnly={this.readonly}
          required={this.required}
          spellcheck={this.spellcheck}
          step={this.step}
          size={this.size}
          type={this.type}
          value={value}
          onInput={this.onInput}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onKeyDown={this.onKeydown}
          {...this.inheritedAttributes}
        />
        {this.clearable && !this.readonly && !this.disabled && (
          <span class="input-clear-icon" onTouchStart={this.clearTextInput} onMouseDown={this.clearTextInput} onKeyDown={this.clearTextOnEnter}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
              <path
                fill="var(--yh-color-base)"
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
              />
            </svg>
          </span>
        )}
      </Host>
    );
  }
}
let inputIds = 0;
