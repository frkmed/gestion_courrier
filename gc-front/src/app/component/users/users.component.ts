import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../_models/user';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ViewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material';
import { Entite } from '../../_models/entite';
import { EntiteService } from '../../_services/index';
import { forEach } from '@angular/router/src/utils/collection';
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

  constructor(private userService: UserService,private entiteService: EntiteService, public dialog: MatDialog) { }
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
  utilisateur = {};
  entites = {};
  //selected = this.utilisateur.id_entite;
  user: User = new User();
  constructor(public dialogRef: MatDialogRef<UpdateUserDialog>,public userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onClick(): void {
    //console.log(utilisateur);
    this.dialogRef.close();
  }
  onUpdateClick(utilisateur): void {
    this.user.login = utilisateur.login;
    this.user.nom = utilisateur.nom;
    this.user.prenom = utilisateur.prenom;
    this.user.email = utilisateur.email;
    this.user.password = utilisateur.mot_passe;
    this.user.role = utilisateur.role;
    this.user.id_entite = utilisateur.idEntite;
    
    this.userService.create(this.user).subscribe( data => {
      console.log(data);
    } )
    console.log(utilisateur);
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
  user: User = new User();
  entite: Entite = new Entite();
  entites = {
nom : 'Ressoures',
type: 'Division'
  };
  constructor(public dialogRef: MatDialogRef<AddUserDialog>,public userService: UserService,public entiteService: EntiteService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.onLoad();
  }

  onClick(utilisateur): void {
    this.user.login = utilisateur.login;
    this.user.nom = utilisateur.nom;
    this.user.prenom = utilisateur.prenom;
    this.user.email = utilisateur.email;
    this.user.password = utilisateur.mot_passe;
    this.user.role = utilisateur.role;
    this.user.id_entite = utilisateur.idEntite;
    
    this.userService.create(this.user).subscribe( data => {
      console.log(data);
    } )
    console.log(utilisateur);
    this.dialogRef.close();
  }
  onLoad(): void {
      this.entiteService.getAll().subscribe( data => {
      console.log(data);      
    })    
    this.dialogRef.close();
  }  
}
