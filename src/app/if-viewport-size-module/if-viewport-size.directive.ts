import {Directive, Input, OnInit, Optional, TemplateRef, ViewContainerRef} from '@angular/core';
import {WindowWidthService} from "./window-width.service";
import {IConfig} from "./i-config";

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective implements OnInit {
  @Input() ifViewportSize: string;
  showsContent = false;
  currentBreakpoint: number;
  nextBreakpoint: number;

  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
      private winWidthSvc: WindowWidthService,
      @Optional() private config?: IConfig,
  ) {
  }

  ngOnInit(): void {
    this.currentBreakpoint = this.config[ this.ifViewportSize ];
    this.nextBreakpoint = Math.min(
        ...Object.values(this.config)
            .filter(value => value > this.currentBreakpoint)
    );
    const initContent = width => {
      if (!this.config) return;
      const isFromRange = this.checkNumFromRange(
          width,
          this.currentBreakpoint,
          this.nextBreakpoint
      );
      if (isFromRange) {
        if (!this.showsContent) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.showsContent = true;
        }
      } else {
        this.viewContainer.clear();
        this.showsContent = false;
      }
    };
    initContent( window.innerWidth );
    this.winWidthSvc.$change.subscribe( initContent );
  }

  checkNumFromRange(number, min, max) {
    if (number < min || ( number >= max )) return false;
    return number;
  }
}
