import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'yh-grid-item',
  styleUrl: 'grid-item.scss',
  shadow: true,
})
export class GridItem {
  @Prop({}) span?: number = 1;

  render() {
    const { span } = this;
    const itemStyle: any = {
      '--item-span': span,
    };
    return (
      <Host style={itemStyle}>
        <slot></slot>
      </Host>
    );
  }
}
