import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material';


const materialModules = [
  MatToolbarModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
