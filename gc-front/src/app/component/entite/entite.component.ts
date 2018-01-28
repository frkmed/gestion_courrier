import { Component, OnInit, AfterViewInit, Inject, ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatSelectModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";

import { EntiteService } from '../../_services/index';
import { Entite } from '../../_models/index';
import { ConfirmDialogsService } from '../../_module/confirmdialog/ConfirmDialogsService';
import { GenericResponse } from "../../_responses/index";


@Component({
  selector: 'app-entite',
  templateUrl: './entite.component.html',
  styleUrls: ['./entite.component.css']
})

export class EntiteComponent implements OnInit, AfterViewInit {
  displayedColumns = ['nom', 'type', 'action'];
  dataSource = new MatTableDataSource<Entite>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  entite: Entite;
  dialogRef1;

  public result: any;

  constructor(
    private dialogsService: ConfirmDialogsService,
    private entiteService: EntiteService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadEntitesList();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  async loadEntitesList() {
    await this.entiteService.getEntites().then(
      data => {
        this.dataSource = new MatTableDataSource<Entite>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log('loadEntitesList Method: ' + <any>error, 'alert alert-danger')
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addDialog(): void {
    this.entite = new Entite();
    this.dialogRef1 = this.dialog.open(
      AddEntiteDialogComponent,
      {
        width: '450px',
        data: {
          title: 'Ajout d\'une nouvelle entite',
          entite: this.entite
        }
      }
    );

    this.dialogRef1.afterClosed().subscribe(result => {
      this.dataSource.data.push(this.entite);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  updateDialog(entite): void {
    this.dialogRef1 = this.dialog.open(
      AddEntiteDialogComponent,
      {
        width: '450px',
        data: {
          title: 'Editer l\'entite',
          entite: entite
        }
      }
    );
    this.dialogRef1.afterClosed().subscribe(result => {
      this.entite = result;
      console.log(this.entite);
    });
  }

  public deleteconfirmDialog(entite) {
    this.dialogsService
      .confirm('Confirmer la suppression', 'êtes-vous sur de vouloir supprimer cet enregistrement?')
      .subscribe(
      res => {
        if (res) {
          this.entiteService.remove(entite.id)
            .then(response => {
              if (response.operation === 'ok') {
                this.dataSource.data.splice(this.dataSource.data.indexOf(entite, 0), 1);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                this.snackBar.open(response.message, 'Fermer', {
                  duration: 2000,
                });
              } else {
                this.snackBar.open('ERREUR', 'Fermer', {
                  duration: 2000,
                });
              }
            });
        }

      });
  }
}


@Component({
  selector: 'app-add-entite-dialog',
  templateUrl: './entite-dialog.html'
})
export class AddEntiteDialogComponent implements OnInit {
  title;
  entite: Entite;
  //entites: Entite[];

  constructor(
    public dialogRef: MatDialogRef<AddEntiteDialogComponent>,
    public entiteService: EntiteService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    //this.loadEntiteList();
  }

  ngOnInit() {
    this.title = this.data ? this.data.title : '';
    this.entite = this.data ? this.data.entite : '';
  }


  /*compareFn(c1: Entite, c2: Entite): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }*/

  
  saveEntite(): void {
    if (this.entite.id) {
      this.entiteService.update(this.entite)
        .then(response => {
          if (response.operation === 'ok') {
            this.entite = response.entite;
            this.dialogRef.close();
          } else {
            this.snackBar.open(response.message, 'Fermer', {
              duration: 2000,
            });
          }
        });
    } else {
      this.entiteService.add(this.entite)
        .then(response => {
          if (response.operation === 'ok') {
            this.entite.id = response.entite.id;
            this.dialogRef.close();
          } else {
            this.snackBar.open(response.message, 'Fermer', {
              duration: 2000,
            });
          }
        });
    }
  }

  /*async loadEntiteList() {
    await this.entiteService.getEntites().then(
      data => {
        this.entites = data;
      },
      error => console.log('loadEntitesList Method: ' + <any>error, 'alert alert-danger')
    );
  }*/
}



