import { Component, h, Host, Prop } from '@stencil/core';

// Build marker so we can *prove* this code is what the browser is running
console.log('[onc-button build] v0.1-iter1');

@Component({
  tag: 'onc-button',
  styleUrl: 'onc-button.css',
  shadow: true,
})
export class OncButton {
  @Prop({ reflect: true })
    color: 'primary' | 'neutral' = 'primary';

  private resolveColor(): 'primary' | 'neutral' {
    return this.color === 'neutral' ? 'neutral' : 'primary';
  }

  render() {
    const resolvedColor = this.resolveColor();
    const classes = `button button--${resolvedColor}`;

    console.log('[onc-button] render()', {
      color: this.color,
      resolvedColor,
      classes,
    });

    return (
      <Host>
        <button class={classes} part="button">
          <slot />
        </button>
      </Host>
    );
  }
}
