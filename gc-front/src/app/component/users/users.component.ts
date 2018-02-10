import { Component, OnInit, AfterViewInit, Inject, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatSelectModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBar
} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { UserService, EntiteService } from '../../_services';
import { User, Entite } from '../../_models';

import { ConfirmDialogsService } from '../../_module/confirmdialog/ConfirmDialogsService';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns = ['login', 'nom', 'prenom', 'email', 'role', 'entite', 'action'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  user: User;
  dialogRef1;

  constructor(
    private dialogsService: ConfirmDialogsService,
    private userService: UserService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadUsersList();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  async loadUsersList() {
    await this.userService.getAll().then(
      data => {
        this.dataSource = new MatTableDataSource<User>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log('loadUsersList Method: ' + <any>error, 'alert alert-danger')
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addDialog(): void {
    this.user = new User();
    this.user.entite = new Entite();
    this.dialogRef1 = this.dialog.open(
      AddUserDialogComponent,
      {
        width: '450px',
        data: {
          title: 'Ajout d\'un nouveau utilisateur',
          user: this.user
        }
      }
    );

    this.dialogRef1.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.push(this.user);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  updateDialog(user): void {
    this.user = Object.assign({}, user);

    this.dialogRef1 = this.dialog.open(
      AddUserDialogComponent,
      {
        width: '450px',
        data: {
          title: 'Editer l\'utilisateur',
          user: this.user
        }
      }
    );
    this.dialogRef1.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data[this.dataSource.data.indexOf(user, 0)] = this.user;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  public deleteconfirmDialog(user) {
    this.dialogsService
      .confirm('Confirmer la suppression', 'êtes-vous sur de vouloir supprimer cet enregistrement?')
      .subscribe(
      res => {
        if (res) {
          this.userService.delete(user.id)
            .then(response => {
              if (response.operation === 'ok') {
                this.dataSource.data.splice(this.dataSource.data.indexOf(user, 0), 1);
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
  selector: 'app-add-user-dialog',
  templateUrl: './user-dialog.html'
})
export class AddUserDialogComponent implements OnInit {
  title;
  user: User;
  entites: Entite[];

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    public userService: UserService,
    public entiteService: EntiteService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.loadEntiteList();
  }

  ngOnInit() {
    this.title = this.data ? this.data.title : '';
    this.user = this.data ? this.data.user : '';
  }


  compareFn(c1: Entite, c2: Entite): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  saveUser(): void {
    if (this.user.id) {
      this.userService.update(this.user)
        .then(response => {
          if (response.operation === 'ok') {
            this.dialogRef.close(true);
          }
          this.snackBar.open(response.message, 'Fermer', {
            duration: 2000,
          });
        });
    } else {
      this.userService.create(this.user)
        .then(response => {
          if (response.operation === 'ok') {
            this.user.id = response.user.id;
            this.dialogRef.close(true);
          }
          this.snackBar.open(response.message, 'Fermer', {
            duration: 2000,
          });
        });
    }
  }

  async loadEntiteList() {
    await this.entiteService.getEntites().then(
      data => {
        this.entites = data;
      },
      error => console.log('loadEntitesList Method: ' + <any>error, 'alert alert-danger')
    );
  }
}



