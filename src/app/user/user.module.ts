import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';
import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user.routing";

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
        TableModule,
        PanelModule,
        InputTextModule
    ],
    providers: []
})
export class UserModule { }