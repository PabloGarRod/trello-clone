import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() colorBtn: 'success' | 'primary' | 'danger' | 'sky' = 'primary';

  constructor() {}

  ngOnInit(): void {}

  get colors() {
    return {
      'bg-success-700': this.colorBtn === 'success',
      'hover:bg-success-800': this.colorBtn === 'success',
      'focus:ring-success-300': this.colorBtn === 'success',
      'bg-primary-700': this.colorBtn === 'primary',
      'hover:bg-primary-800': this.colorBtn === 'primary',
      'focus:ring-primary-300': this.colorBtn === 'primary',
      'bg-danger-700': this.colorBtn === 'danger',
      'hover:bg-danger-800': this.colorBtn === 'danger',
      'focus:ring-danger-300': this.colorBtn === 'danger',
      'bg-sky-700': this.colorBtn === 'sky',
      'hover:bg-sky-800': this.colorBtn === 'sky',
      'focus:ring-sky-300': this.colorBtn === 'sky',
    };
  }

  get saludo() {
    return 'hola';
  }
}
