import { NgModule } from '@angular/core';

import { MatExpansionModule, MatIconModule, MatListModule, MatTableModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


const materialModules = [
  MatToolbarModule,
  MatTabsModule,
  NoopAnimationsModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {
}
