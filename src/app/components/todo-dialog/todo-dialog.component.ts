import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';
import { InputData, OutPutData, ToDo } from '@models/todo.model';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [MatDialogModule, BtnComponent, FontAwesomeModule, CommonModule],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent implements OnInit {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutPutData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo;
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
  closeWithRta(rta: boolean) {
    this.dialogRef.close({
      rta,
    });
  }
}
