import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculRoutingModule } from './calcul-routing.module';
import { CalculComponent } from './calcul/calcul.component';

import { StepsModule } from 'primeng/steps';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
  declarations: [
    CalculComponent
  ],
  imports: [
    CommonModule,
    CalculRoutingModule,
StepsModule,
FormsModule,
ButtonModule,
DialogModule,
RadioButtonModule
  ]
})
export class CalculModule { }
