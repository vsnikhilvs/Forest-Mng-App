import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './_models/role';
import { AuthenticationService } from './_services/authentication.service';

// import { AuthenticationService } from './_services';
// import { User, Role } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    user: any;
    userName: string = '';
    isUser: boolean = false;

    constructor(private authenticationService: AuthenticationService) {
      console.log("INside App Component")
        console.log("Inside App Component")
        if(this.authenticationService.user != null) {
            this.authenticationService.user.subscribe(x => {
                this.user = x;
                this.isUser = true;
            });
            this.authenticationService.userName.subscribe(x=> {
                // console.log(x);
                this.userName = x;
            });
        }
        else {
            this.isUser = false;
        }
    }

    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.isUser = false;
    }
}