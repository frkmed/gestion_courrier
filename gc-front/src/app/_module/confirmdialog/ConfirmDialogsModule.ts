import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { ConfirmdialogComponent } from './confirmdialog.component';
import { ConfirmDialogsService } from './ConfirmDialogsService';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
    ],
    exports: [
        ConfirmdialogComponent,
    ],
    declarations: [
        ConfirmdialogComponent,
    ],
    providers: [
        ConfirmDialogsService,
    ],
    entryComponents: [
        ConfirmdialogComponent,
    ],
})
export class ConfirmDialogsModule { }
