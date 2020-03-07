import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowWidthService {
  current: number;
  $change = new EventEmitter<number>();
  constructor() {
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      if (newWidth !== this.current) {
        this.$change.emit( this.current = newWidth );
      }
    });
  }
}
