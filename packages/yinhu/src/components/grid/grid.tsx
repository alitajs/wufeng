import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'yh-grid',
  styleUrl: 'grid.scss',
  shadow: true,
})
export class Grid {
  @Prop({}) columns?: number;
  @Prop({}) gap?: number | number[] | string | string[] = 0;

  render() {
    const { columns, gap } = this;
    let gapStyle: any = {};

    if (gap) {
      const [horizontalGap, verticalGap] = Array.isArray(gap) ? gap : [gap, gap];
      gapStyle = {
        ...gapStyle,
        '--vertical-gap': `${verticalGap}px`,
        '--horizontal-gap': `${horizontalGap}px`,
      };
    }
    return (
      <Host
        style={{
          ...gapStyle,
          '--columns': `${columns}`,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
