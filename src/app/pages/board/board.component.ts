import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ToDo } from '../../models/todo.models';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent, CommonModule],
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  toDos: ToDo[] = [
    {
      id: '1',
      title: 'Task 1',
    },
    {
      id: '2',
      title: 'Task 2',
    },
    {
      id: '3',
      title: 'Task 3',
    },
  ];

  drop(event: CdkDragDrop<ToDo[]>) {
    moveItemInArray(this.toDos, event.previousIndex, event.currentIndex);
  }
}
