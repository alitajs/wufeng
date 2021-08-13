import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'yh-content',
  styleUrl: 'content.scss',
  shadow: true,
})
export class Content {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
