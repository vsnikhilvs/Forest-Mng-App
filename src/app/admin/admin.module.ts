import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin.routing";

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        TableModule,
        PanelModule,
        InputTextModule
    ],
    providers: []
})
export class AdminModule { }