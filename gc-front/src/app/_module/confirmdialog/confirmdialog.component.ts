import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, } from '@angular/material';


@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmDialogs.component.html'
})
export class ConfirmdialogComponent {

  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmdialogComponent>) {

  }
}
