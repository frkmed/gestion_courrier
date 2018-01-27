import {Component, OnInit, Inject} from '@angular/core';
import {CourrierService} from '../../_services/courrier.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {Courrier} from '../../_models/courrier';
import {Entite} from '../../_models/entite';
import { SaveDocumentResponse } from "../../_responses";
import { GenericResponse } from "../../_responses/genericresponse";
import {EntiteService} from '../../_services/entite.service';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ViewChild} from '@angular/core';
import {QueueingSubject} from 'queueing-subject';
import websocketConnect from 'rxjs-websockets';

@Component({
  selector: 'courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {
  displayedColumns = ['reference', 'titre', 'type', 'dateCourrier', 'nature'];
  dataSource = new MatTableDataSource<any>();
  query:string = "";

  constructor(private courrierService: CourrierService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadCourrierList();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadCourrierList() {
    this.courrierService.getAll()
      .subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Courrier>(data.resultat);
      },
      error => console.log('loadCourrierList Method: ' + <any>error, 'alert alert-danger')
      );
  }
  
  
  rechercherCourrier() {
    this.courrierService.rechercherCourrier(this.query)
      .subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Courrier>(data.resultat);
      },
      error => console.log('rechercherCourrier Method: ' + <any>error, 'alert alert-danger')
      );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openAddDialog(): void {
    let dialogRef1 = this.dialog.open(AddCourrierDialog, {data: {title: 'First Dialog'}});

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog 1 was closed');
    });
  }

  openUpdateDialog(): void {
    let dialogRef1 = this.dialog.open(UpdateCourrierDialog, {data: {title: 'First Dialog'}});

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog 1 was closed');
    });
  }



}

@Component({
  selector: 'add-courrier-dialog',
  templateUrl: './add-courrier-dialog.html',
  styleUrls: ['./courrier.component.css']
})
export class AddCourrierDialog {
  newCourrier: Courrier = new Courrier();
  entites: Entite[];
  attachements: Map<number, string> = new Map<number, string>();

  constructor(public dialogRef: MatDialogRef<AddCourrierDialog>, public entiteService: EntiteService, public courrierService: CourrierService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.entiteService.getAll().subscribe(data => {
      this.entites = data;
    });
  }

  onNoClick(): void {
    console.log(this.dialogRef)
    this.dialogRef.close();
  }

  saveCourrier(): void {
    this.courrierService.create(this.newCourrier, this.attachements);
  }

  addAttachement(filename: string) {
    const input = new QueueingSubject<string>()
    const {messages, connectionStatus} = websocketConnect('ws://localhost:8181', input)
    
    const messagesSubscription = messages.subscribe((message: string) => {
      
      this.courrierService.saveDoc(message).subscribe((res:SaveDocumentResponse) => {
        this.attachements.set(this.attachements.size, res.fichier);
      });
      
      messagesSubscription.unsubscribe();
    })
  }

  removeAttachement(idx: number) {
    this.attachements.delete(idx);
  }

}
@Component({
  selector: 'update-courrier-dialog',
  templateUrl: './update-courrier-dialog.html'
})
export class UpdateCourrierDialog {

  constructor(public dialogRef: MatDialogRef<AddCourrierDialog>, public courrierService: CourrierService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    console.log(this.dialogRef)
    this.dialogRef.close();
  }

  deleteCourrier(idCourrier: number): void {
    this.courrierService.delete(idCourrier);
  }

}
