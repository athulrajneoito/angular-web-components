import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SubComponent } from './sub/sub.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  PopBaseModule,
  PopCommonModule,
  PopEntityModule,
  PopFieldItemModule,
  PopInitializerModule,
} from 'pop-common';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, SubComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    PopBaseModule,
    PopFieldItemModule,
    PopEntityModule,
    MaterialModule,
    PopCommonModule.forRoot(environment),
    PopInitializerModule.forRoot([], {
      entities: true,
      filter: true,
      pipes: true,
      aliases: true,
      redirect: false,
      permissions: true,
      socket: true,
    }),
  ],
  providers: [],
  bootstrap:[AppComponent, HelloWorldComponent, SubComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(HelloWorldComponent, {
      injector: this.injector,

    });
    customElements.define('hello-world', el);
  }
  ngDoBootstrap() {}
}
