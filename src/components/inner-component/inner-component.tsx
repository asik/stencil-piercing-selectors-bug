import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'inner-component',
  shadow: true,
  styleUrl: 'inner-component.css',
})
export class InnerComponent {
  render() {
    return (
      <Host>
        <p>Hover me</p>
      </Host>
    );
  }
}
