import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';

import { UsermanagementComponent } from "./usermanagement.component";
import { UserManagementRoutingModule } from "./usermanagement.routing";


@NgModule({
    declarations: [
        UsermanagementComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserManagementRoutingModule,
        TableModule,
        PanelModule,
        InputTextModule
    ],
    providers: []
})
export class UserManagementModule { }