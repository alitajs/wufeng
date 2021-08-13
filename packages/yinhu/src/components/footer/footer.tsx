import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'yh-footer',
  styleUrl: 'footer.scss',
  shadow: true,
})
export class Footer {
  render() {
    return (
      <Host role="contentinfo">
        <slot></slot>
      </Host>
    );
  }
}
