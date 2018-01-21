import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../_models/user';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ViewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['login', 'nom', 'prenom', 'email', 'role', 'entite'];
  dataSource = new MatTableDataSource<any>();
  animal: string;
  name: string;
  user: User = new User();

  constructor(private userService: UserService, public dialog: MatDialog) { }
  selected;
  ngOnInit() {
    this.loadUsersList();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadUsersList() {
    this.userService.getAll()
      .subscribe(
      data => {
        console.log("hello world !" + data);
        this.dataSource = new MatTableDataSource<User>(data);
      },
      error => console.log('loadUsersList Method: ' + <any>error, 'alert alert-danger')
      );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(): void {
    let dialogRef1 = this.dialog.open(AddUserDialog, { width: '450px', data: { title: 'First Dialog' } });

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog 1 was closed');

    })

  }

  updateDialog(): void {
    let dialogRef1 = this.dialog.open(UpdateUserDialog, { width: '450px', data: { title: 'Second Dialog' } });
    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog 2 was closed');
    })
  }

}
@Component({
  selector: 'update-user-dialog',
  templateUrl: './update-user-dialog.html'
})
export class UpdateUserDialog {
  utilisateur = {
    login: 'admin',
    nom: 'Administrateur',
    prenom: 'Administrateur',
    email: 'admin@example.com',
    role: 'admin',
    username: 'admin',
    password: 'admin',
    id_entite: 1,
    nomEntite: 'Informatique'
  };
  entites = [
    { idEntite: '0', nomEntite: 'Informatique' },
    { idEntite: '1', nomEntite: 'RH' },
    { idEntite: '2', nomEntite: 'Personnel' }
  ];
  selected = this.utilisateur.id_entite;

  constructor(public dialogRef: MatDialogRef<UpdateUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onClick(): void {
    //console.log(utilisateur);
    this.dialogRef.close();
  }
}
@Component({
  selector: 'add-user-dialog',
  /**template: `
    <h1>{{data.title}}</h1>
    <button mat-raised-button (click)="dialogRef.close()">close</button>
  `**/
  templateUrl: './add-user-dialog.html'
})
export class AddUserDialog {
  utilisateur = {};

  entites = [
    { idEntite: '0', nomEntite: 'Informatique' },
    { idEntite: '1', nomEntite: 'RH' },
    { idEntite: '2', nomEntite: 'Personnel' }
  ];
  constructor(public dialogRef: MatDialogRef<AddUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onClick(utilisateur): void {
    console.log(utilisateur);
    this.dialogRef.close();
  }

}