import { Component, OnInit, AfterViewInit, Inject, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatSelectModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { EntiteService } from '../../_services/index';
import { Entite } from '../../_models/index';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-entite',
  templateUrl: './entite.component.html',
  styleUrls: ['./entite.component.css']
})
export class EntiteComponent implements OnInit, AfterViewInit {
  displayedColumns = ['nom', 'type'];
  dataSource = new MatTableDataSource<Entite>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  animal: string;
  name: string;
  entite: Entite = new Entite();
  dialogRef1;
  selected;

  constructor(private entiteService: EntiteService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadEntitesList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadEntitesList() {
    this.entiteService.getAll().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Entite>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error =>
        console.log(
          'loadEntitesList Method: ' + <any>error,
          'alert alert-danger'
        )
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(): void {
    this.dialogRef1 = this.dialog.open(AddEntiteDialogComponent, {
      width: '450px',
      data: { title: 'First Dialog' }
    });

    this.dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog 1 was closed');
    });
  }

  updateDialog(): void {
    this.dialogRef1 = this.dialog.open(UpdateEntiteDialogComponent, {
      width: '450px',
      data: { title: 'Second Dialog' }
    });
    this.dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog 2 was closed');
    });
  }
}
@Component({
  selector: 'app-update-entite-dialog',
  templateUrl: './update-entite-dialog.html'
})
export class UpdateEntiteDialogComponent {
  entite = {
    nom: 'Exploitation Informatique',
    type: 'Division'
  };
  type = [
    { value: '1', viewValue: 'Service' },
    { value: '2', viewValue: 'Division' },
    { value: '3', viewValue: 'Direction' }
  ];
  constructor(
    public dialogRef: MatDialogRef<UpdateEntiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-add-entite-dialog',
  templateUrl: './add-entite-dialog.html'
})
export class AddEntiteDialogComponent {
  entite = {};

  constructor(
    public dialogRef: MatDialogRef<AddEntiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClick(entite): void {
    console.log(entite);
    this.dialogRef.close();
  }
}
