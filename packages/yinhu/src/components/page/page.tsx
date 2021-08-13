import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'yh-page',
  styleUrl: 'page.scss',
  shadow: true,
})
export class Page {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
