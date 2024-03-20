import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { UserRoutingModule } from './user-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { ChipModule } from 'primeng/chip';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';

import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    DataViewModule,
    PanelModule,
    FormsModule,
    ButtonModule,
    SplitterModule,
    AccordionModule,
    DividerModule,
    InputTextModule,
    ChipModule,
    TabViewModule,
    DividerModule,

    DialogModule,
    CardModule,
  ]
})
export class UserModule { }
