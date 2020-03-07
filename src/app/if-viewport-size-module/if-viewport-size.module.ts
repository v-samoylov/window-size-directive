import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IConfig} from "./i-config";
import {IfViewportSizeDirective} from "./if-viewport-size.directive";

@NgModule({
  declarations: [
    IfViewportSizeDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
      IfViewportSizeDirective,
  ],
})
export class IfViewportSizeModule {
  static forRoot(config: IConfig): ModuleWithProviders {
    return {
      ngModule: IfViewportSizeModule,
      providers: [
        {provide: IConfig, useValue: config }
      ]
    };
  }
}

