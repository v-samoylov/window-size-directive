import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { IfViewportSizeDirective } from './if-viewport-size-module/if-viewport-size.directive';
import {IfViewportSizeModule} from "./if-viewport-size-module/if-viewport-size.module";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    IfViewportSizeModule.forRoot({
      small: 0,
      medium: 800,
      large: 1100,
    }),
  ],
  providers: [ IfViewportSizeDirective, ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
