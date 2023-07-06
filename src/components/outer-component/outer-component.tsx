import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'outer-component',
  shadow: true,
})
export class OuterComponent {
  render() {
    return (
      <Host>
        <inner-component></inner-component>
      </Host>
    );
  }
}
