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

import { UserService, EntiteService } from '../../_services/index';
import { User, Entite } from '../../_models/index';
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

  public result: any;

  constructor(
    private dialogsService: ConfirmDialogsService,
    private userService: UserService,
    private entiteService: EntiteService,
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
    await this.userService.getUsers().then(
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
      this.dataSource.data.push(this.user);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  updateDialog(user): void {
    this.dialogRef1 = this.dialog.open(
      AddUserDialogComponent,
      {
        width: '450px',
        data: {
          title: 'Editer l\'utilisateur',
          user: user
        }
      }
    );
    this.dialogRef1.afterClosed().subscribe(result => {
      this.user = result;
      console.log(this.user);
    });
  }

  public deleteconfirmDialog(user) {
    this.dialogsService
      .confirm('Confirmer la suppression', 'êtes-vous sur de vouloir supprimer cet enregistrement?')
      .subscribe(
      res => {
        if (res) {
          this.userService.remove(user.id);
        }
        this.snackBar.open('TEST', 'IIIII', {
          duration: 2000,
        });

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
          this.dialogRef.close();
        });
    } else {
      this.userService.add(this.user)
        .then(response => {
          this.user.id = response.id;
          this.dialogRef.close();
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



