import { Component, OnInit, AfterViewInit, Inject, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import websocketConnect from 'rxjs-websockets';
import { QueueingSubject } from 'queueing-subject';
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

import { EntiteService, CourrierService } from '../../_services/';
import { Courrier, Entite, Documents, Diffusion, Instruction, User } from '../../_models';

import { ConfirmDialogsService } from '../../_module/confirmdialog/ConfirmDialogsService';
import { InstructionService } from '../../_services/instruction.service';

//import { SaveDocumentResponse } from "../../_responses";
//import { GenericResponse } from "../../_responses/genericresponse";

@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit, AfterViewInit {
  displayedColumns = ['reference', 'titre', 'type', 'dateCourrier', 'nature', 'action'];
  dataSource = new MatTableDataSource<Courrier>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  query = '';
  courrier: Courrier;
  dialogRef1;


  constructor(
    private dialogsService: ConfirmDialogsService,
    private courrierService: CourrierService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadCourrierList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async loadCourrierList() {
    await this.courrierService.getAll().then(
      data => {
        this.dataSource = new MatTableDataSource<Courrier>(data.resultat);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log('loadCourriersList Method: ' + <any>error, 'alert alert-danger')
    );
  }

  rechercherCourrier() {
    this.courrierService.rechercherCourrier(this.query).then(
      data => {
        this.dataSource = new MatTableDataSource<Courrier>(data.resultat);
      },
      error => console.log('rechercherCourrier Method: ' + <any>error, 'alert alert-danger')
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openAddDialog(): void {
    this.courrier = new Courrier();
    this.courrier.entite = new Entite();
    this.courrier.destinataire = new Entite();
    this.courrier.destinataires = new Array<Diffusion>();
    this.courrier.documents = new Array<Documents>();

    this.dialogRef1 = this.dialog.open(
      AddCourrierDialogComponent,
      {
        width: '100%',
        minHeight: '558px',
        height: '558px',
        data: {
          title: 'Ajout d\'un nouveau courrier',
          courrier: this.courrier
        }
      }
    );

    this.dialogRef1.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.push(this.courrier);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  openUpdateDialog(courrier): void {
    this.courrier = Object.assign({}, courrier);

    console.log(this.courrier);

    this.dialogRef1 = this.dialog.open(
      AddCourrierDialogComponent,
      {
        width: '100%',
        minHeight: '558px',
        height: '558px',
        data: {
          title: 'Editer le courrier',
          courrier: this.courrier
        }
      }
    );
    this.dialogRef1.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data[this.dataSource.data.indexOf(courrier, 0)] = this.courrier;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  deleteconfirmDialog(courrier) {
    this.dialogsService
      .confirm('Confirmer la suppression', 'êtes-vous sur de vouloir supprimer cet enregistrement?')
      .subscribe(
        res => {
          if (res) {
            this.courrierService.delete(courrier.id).then(response => {
              if (response.operation === 'ok') {
                this.dataSource.data.splice(this.dataSource.data.indexOf(courrier, 0), 1);
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
  selector: 'app-add-courrier-dialog',
  templateUrl: './add-courrier-dialog.html',
  styleUrls: ['./courrier.component.css']
})
export class AddCourrierDialogComponent implements OnInit {
  title;
  courrier: Courrier;
  entites: Entite[];
  users:User[];
  instructions: Instruction[];
  exist: boolean;

  editedDiffusion: Diffusion;

  displayedColumns = ['action', 'entite', 'responsable', 'instruction', 'delai'];
  diffusionDataSource = new MatTableDataSource<Diffusion>();
  selectedRowIndex: Number = -1;
  selectedRowID: Number = -1;

  constructor(
    public dialogRef: MatDialogRef<AddCourrierDialogComponent>,
    public entiteService: EntiteService,
    public courrierService: CourrierService,
    public instructionService: InstructionService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadEntiteList();
    this.loadInstructionList();
  }

  ngOnInit() {
    this.title = this.data ? this.data.title : '';
    this.courrier = this.data ? this.data.courrier : '';
    this.diffusionDataSource = new MatTableDataSource<Diffusion>(this.courrier.destinataires);
    this.editedDiffusion = new Diffusion();
    this.editedDiffusion.entite = new Entite();
  }

  change(event,entite){
    if(event.isUserInput===true){
      this.users=entite.users;
    }
    
  }
  compareFn(c1: Entite, c2: Entite): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  saveCourrier(): void {
    if (this.courrier.id) {
      this.courrierService.create(this.courrier).then(response => {
        if (response.operation === 'ok') {
          this.dialogRef.close(true);
        }
        this.snackBar.open(response.message, 'Fermer', {
          duration: 2000,
        });
      });
    } else {
      this.courrierService.create(this.courrier).then(response => {
        if (response.operation === 'ok') {
          this.courrier = response.courrier;
          this.dialogRef.close(true);
        }
        this.snackBar.open(response.message, 'Fermer', {
          duration: 2000,
        });
      });
    }

  }

  addDocument(filename: string) {
    const input = new QueueingSubject<string>()
    const { messages, connectionStatus } = websocketConnect('ws://localhost:8181', input)

    const messagesSubscription = messages.subscribe((message: string) => {
      this.courrierService.saveDoc(message).then(res => {
        const doc = new Documents();
        doc.fichier = res.fichier;
        this.courrier.documents.push(doc)
      });
      messagesSubscription.unsubscribe();
    })
  }

  removeDocument(doc) {
    this.courrier.documents.splice(this.courrier.documents.indexOf(doc, 0), 1);
  }


  selectDiffusionRow(row) {
    if (row.id === this.selectedRowID) {
      this.selectedRowIndex = -1;
      this.selectedRowID = -1;
      this.editedDiffusion = new Diffusion();
      this.editedDiffusion.entite = new Entite();
    } else {
      this.editedDiffusion = row;
      this.selectedRowIndex = row.id;
      this.selectedRowID = row.id;
      //this.change(event);
    }
  }
  addDiffusion() {
    this.courrier.destinataires.push(Object.assign({}, this.editedDiffusion));
    this.reloadDiffusionDataSource();
  }

  editDiffusion() {
    this.courrier.destinataires[this.courrier.destinataires.indexOf(this.editedDiffusion, 0)] = this.editedDiffusion;
    this.reloadDiffusionDataSource();
  }

  removeDiffusion() {
    this.courrier.destinataires.splice(this.courrier.destinataires.indexOf(this.editedDiffusion, 0), 1);
    this.reloadDiffusionDataSource();
  }

  reloadDiffusionDataSource() {
    this.diffusionDataSource = new MatTableDataSource<Diffusion>(this.courrier.destinataires);
  }

  async loadEntiteList() {
    await this.entiteService.getEntites().then(
      data => {
        this.entites = data;
      },
      error => console.log('loadEntitesList Method: ' + <any>error, 'alert alert-danger')
    );
  }
  async loadInstructionList() {
    await this.instructionService.getInstructions().then(
      data => {
        this.instructions = data;
      },
      error => console.log('loadInstructionsList Method: ' + <any>error, 'alert alert-danger')
    );
  }

}


