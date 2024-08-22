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
  @Input() color: 'success' | 'primary' | 'danger' | 'sky' | 'light' =
    'primary';

  constructor() {}

  ngOnInit(): void {}

  mapColors = {
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
      'text-white': true,
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white': true,
    },
    danger: {
      'bg-danger-700': true,
      'hover:bg-danger-800': true,
      'focus:ring-danger-300': true,
      'text-white': true,
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-gray-700': true,
    },
    sky: {
      'bg-sky-700': this.color === 'sky',
      'hover:bg-sky-800': this.color === 'sky',
      'focus:ring-sky-300': this.color === 'sky',
      'text-white': true,
    },
  };

  get colors() {
    const colors = this.mapColors[this.color];
    if (colors) return colors;
    return {};
  }

  get saludo() {
    return 'hola';
  }
}
