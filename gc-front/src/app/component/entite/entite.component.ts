import { Component, OnInit, Inject } from "@angular/core";
import { EntiteService } from "../../_services/entite.service";
import { Observable } from "rxjs/Observable";
import { DataSource } from "@angular/cdk/collections";
import { Entite } from "../../_models/entite";
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { ViewChild } from "@angular/core";
import { MatSelectModule } from "@angular/material";

@Component({
  selector: "app-entite",
  templateUrl: "./entite.component.html",
  styleUrls: ["./entite.component.css"]
})
export class EntiteComponent implements OnInit {
  displayedColumns = ['nom', 'type'];
  dataSource = new MatTableDataSource<any>();
  animal: string;

  entite: Entite = new Entite();

  constructor(private entiteService: EntiteService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadEntitesList();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadEntitesList() {
    this.entiteService.getAll().subscribe(
      data => {
        console.log("hello world !" + data);
        this.dataSource = new MatTableDataSource<Entite>(data);
      },
      error =>
        console.log(
          "loadEntitesList Method: " + <any>error,
          "alert alert-danger"
        )
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(): void {
    let dialogRef1 = this.dialog.open(AddEntiteDialog, {
      width: "450px",
      data: { title: "First Dialog" }
    });

    dialogRef1.afterClosed().subscribe(result => {
      console.log("The dialog 1 was closed");
    });
  }

  updateDialog(): void {
    let dialogRef1 = this.dialog.open(UpdateEntiteDialog, {
      width: "450px",
      data: { title: "Second Dialog" }
    });
    dialogRef1.afterClosed().subscribe(result => {
      console.log("The dialog 2 was closed");
    });
  }
}
@Component({
  selector: "update-entite-dialog",
  templateUrl: "./update-entite-dialog.html"
})
export class UpdateEntiteDialog {
  entite = {
    nom: 'Exploitation Informatique',
    type: 'Division'
  };
  type = [
    {value: '1', viewValue: 'Service'},
    {value: '2', viewValue: 'Division'},
    {value: '3', viewValue: 'Direction'}
  ];
  constructor(
    public dialogRef: MatDialogRef<UpdateEntiteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClick(): void {
    //console.log(utilisateur);
    this.dialogRef.close();
  }
}
@Component({
  selector: "add-entite-dialog",
  templateUrl: "./add-entite-dialog.html"
})
export class AddEntiteDialog {
  entite = {};

  constructor(
    public dialogRef: MatDialogRef<AddEntiteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClick(entite): void {
    console.log(entite);
    this.dialogRef.close();
  }
}
