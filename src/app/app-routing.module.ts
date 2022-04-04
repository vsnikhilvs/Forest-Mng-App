import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';

// import { HomeComponent } from './home';
// import { AdminComponent } from './admin';
// import { LoginComponent } from './login';
// import { UserComponent } from './user/user.component';
// import { AuthGuard } from './_helpers';
// import { Role } from './_models';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule),
        canActivate: [AuthGuard],
    },
    // {
    //     path: 'usermanagement',
    //     loadChildren: () => import("./usermanagement/usermanagement.module").then(m => m.UserManagementModule),
    //     canActivate: [AuthGuard],
    //     data: { roles: [Role.Admin] }
    // },
    // {
    //     path: 'user',
    //     loadChildren: () => import("./user/user.module").then(m => m.UserModule),
    //     canActivate: [AuthGuard],
    //     data: { roles: [Role.User] }
    // },
    {
        path: 'admin',
        loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
