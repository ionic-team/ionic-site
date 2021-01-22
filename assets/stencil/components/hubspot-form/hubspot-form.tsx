import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  Element,
  State,
  Listen,
} from '@stencil/core';
import { importResource } from '../../util/common';

declare var window: any;

@Component({
  tag: 'hubspot-form',
  styleUrl: 'hubspot-form.scss',
})
export class HubspotForm {
  @Element() el?: HTMLElement;
  @Prop() formId?: string;
  @Prop() portalId = '3776657';
  @Prop() goToWebinarKey?: string;
  @Prop() ajax = false;
  @Prop() noDefaultStyles = false;
  @Prop() submitText = undefined;

  @Event() formSubmitted?: EventEmitter;

  @State() error: string | null = null;

  scriptEl?: HTMLScriptElement;

  componentDidLoad() {
    importResource(
      { propertyName: 'hbspt', link: '//js.hsforms.net/forms/v2.js' },
      this.handleScriptLoad,
    );
  }

  @Listen('message', { target: 'window' })
  handleWindowMessage(e: MessageEvent) {
    if (e.data && e.data.formGuid && this.ajax) {
      // Don't let hubspot do anything
      e.preventDefault();
      e.stopImmediatePropagation();

      if (e.data.accepted === true) {
        this.formSubmitted?.emit();
      } else if (e.data.accepted === false) {
        this.error =
          'Unable to submit. Please check your information and try again.';
      } else {
        this.error = '';
      }
    }
  }

  handleScriptLoad = () => {
    requestAnimationFrame(() => {
      window.hbspt.forms.create({
        portalId: '3776657',
        formId: this.formId,
        target: `#${this.getFormElementId()}`,
        goToWebinarWebinarKey: this.goToWebinarKey || '',
        css: '',
        onFormReady: this.handleFormReady,
        translations: {
          en: {
            submitText: this.submitText,
          }
        }
      });
    });
  };

  handleFormReady = (_e: any, _c: any) => {
    // Don't override the form if not using the ajax method
    if (!this.ajax) {
      return;
    }

    const formEl = this.el?.querySelector(
      `#${this.getFormElementId()} form`,
    ) as HTMLFormElement;
    if (!formEl) {
      return;
    }

    formEl.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });

    formEl
      .querySelector('input[type="submit"]')
      ?.addEventListener('click', e => {
        this.submitForm(formEl);
        e.preventDefault();
      });
  };

  getFormElementId = () => `hbspt-form-${this.formId}`;

  submitForm = async (form: HTMLFormElement) => {
    const data = new FormData(form);

    try {
      const ret = await fetch(form.getAttribute('action')!, {
        method: 'POST',
        body: data,
      });

      if (ret.status !== 200) {
        this.error = 'Error submitting form';
      } else {
        // The response from hubspot is a script tag. I know, it's truly magnificent
        const frame = document.createElement('iframe');
        frame.srcdoc = await ret.text();
        document.body.appendChild(frame);
      }
    } catch (e) {
      this.error = 'Unable to submit form';
    }
  };

  render() {
    return (
      <Host class={{
        'no-default-styles': this.noDefaultStyles,
      }}>
        <div class="hubspot-override">
          <div id={this.getFormElementId()} />
        </div>
        {this.error ? <div class="hs-error-msgs">{this.error}</div> : null}
      </Host>
    );
  }
}
