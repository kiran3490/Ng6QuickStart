import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AutoCompleteComponent } from './autocomplete/autocomplete.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AutoCompleteComponent],
    imports: [BrowserModule],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    entryComponents: [AutoCompleteComponent]
    // bootstrap: [AutoCompleteComponent]
})

export class WidgetModule {
    constructor(private injector: Injector) {
        const autocomplete = createCustomElement(AutoCompleteComponent, {
          injector
        });
        customElements.define('widget-auto-complete', autocomplete);
      }
    ngDoBootstrap() {}
}

