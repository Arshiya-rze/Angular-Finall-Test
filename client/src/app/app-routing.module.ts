import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { ContentComponent } from './Components/content/content.component';
import { CallComponent } from './Components/call/call.component';
import { ServisComponent } from './Components/servis/servis.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';
import { AdminComponent } from './Components/admin/admin.component';
import { SignUpUserComponent } from './Components/sign-up-user/sign-up-user.component';
import { RegisterAdminComponent } from './Components/register-admin/register-admin.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactWithUsComponent } from './Components/contact-with-us/contact-with-us.component';
import { NewTestComponent } from './Components/new-test/new-test.component';
import { ListSignUpComponent } from './Components/list-sign-up/list-sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'product', component: ProductComponent},
  { path: 'service', component: ServisComponent},
  { path: 'call', component: CallComponent},
  { path: 'contact-with-us', component: ContactWithUsComponent},
  { path: 'sign-up-user', component: SignUpUserComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'register-admin', component: RegisterAdminComponent},
  { path: 'new-test', component: NewTestComponent},
  { path: 'list-sign-up', component: ListSignUpComponent},
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
