import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'yh-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header {
  render() {
    return (
      <Host role="banner">
        <slot></slot>
      </Host>
    );
  }
}
