import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login.routing";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        TableModule,
        PanelModule,
        InputTextModule
    ],
    providers: []
})
export class LoginModule { }