import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


const materialModules = [
  MatToolbarModule,
  MatTabsModule,
  NoopAnimationsModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {
}
