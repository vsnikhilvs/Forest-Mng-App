import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        TableModule,
        PanelModule,
        InputTextModule
    ],
    providers: []
})
export class HomeModule { }