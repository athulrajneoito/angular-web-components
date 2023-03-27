import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SubComponent } from './sub/sub.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, SubComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(HelloWorldComponent, { injector });
    customElements.define('hello-world', el);
  }
  ngDoBootstrap() {}
}
