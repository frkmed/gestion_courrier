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
import { Courrier, Entite, Documents, Diffusion, Instruction } from '../../_models';

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
  displayedColumns = ['diffusion', 'reference', 'titre', 'type', 'dateCourrier', 'nature', 'action'];
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
        width: '800px',
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

    this.dialogRef1 = this.dialog.open(
      AddCourrierDialogComponent,
      {
        width: '800px',
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

  openDiffusionDialog(courrier): void {

    this.dialogRef1 = this.dialog.open(
      DiffusionDialogComponent,
      {
        width: '1000px',
        data: {
          title: 'Diffusion du courrier',
          courrier: courrier
        }
      }
    );
    this.dialogRef1.afterClosed().subscribe(result => {
      console.log("CLOSED");
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
  exist: boolean;
  dif: Diffusion;

  documents: Map<number, string> = new Map<number, string>()

  constructor(
    public dialogRef: MatDialogRef<AddCourrierDialogComponent>,
    public entiteService: EntiteService,
    public courrierService: CourrierService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadEntiteList();
  }

  ngOnInit() {
    this.title = this.data ? this.data.title : '';
    this.courrier = this.data ? this.data.courrier : '';
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

  addDesinataireA(dest) {
    this.exist = false;
    this.courrier.destinataires.forEach(element => {
      if (element.entite === dest) {
        this.exist = true;
      }
    });

    if (this.exist) {
      this.snackBar.open("Le desinataire existe déja", 'Fermer', {
        duration: 2000,
      });
    } else {
      this.dif = new Diffusion();
      this.dif.entite = dest;
      this.dif.action = "A";
      this.courrier.destinataires.push(this.dif);
    }
  }

  addDesinataireCC(dest) {
    this.exist = false;
    this.courrier.destinataires.forEach(element => {
      if (element.entite === dest) {
        this.exist = true;
      }
    });

    if (this.exist) {
      this.snackBar.open("Le desinataire existe déja", 'Fermer', {
        duration: 2000,
      });
    } else {
      this.dif = new Diffusion();
      this.dif.entite = dest;
      this.dif.action = "CC";
      this.courrier.destinataires.push(this.dif);
    }
  }

  removeDestinataire(dest) {
    this.courrier.destinataires.splice(this.courrier.destinataires.indexOf(dest, 0), 1);
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

@Component({
  selector: 'app-diffusion-dialog',
  templateUrl: './diffusion-dialog.html',
  styleUrls: ['./courrier.component.css']
})
export class DiffusionDialogComponent implements OnInit {
  displayedColumns = ['action', 'entite', 'responsable', 'instruction', 'delai', 'reponse'];
  dataSource = new MatTableDataSource<Diffusion>();

  title;
  courrier: Courrier;
  entites: Entite[];
  instructions: Instruction[];
  exist: boolean;
  dif: Diffusion;

  constructor(
    public dialogRef: MatDialogRef<DiffusionDialogComponent>,
    public entiteService: EntiteService,
    public instructionService:InstructionService,
    public courrierService: CourrierService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loadEntiteList();
    this.loadInstructionList();
  }

  ngOnInit() {
    this.title = this.data ? this.data.title : '';
    this.courrier = this.data ? this.data.courrier : '';
    console.log(this.courrier);

    this.dataSource = new MatTableDataSource<Diffusion>(this.courrier.destinataires);
  }
  
  diffuser(){
    this.courrier.destinataires=this.dataSource.data;
  }


  compareFn(c1: Entite, c2: Entite): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
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

