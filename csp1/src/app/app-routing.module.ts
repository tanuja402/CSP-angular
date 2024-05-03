import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { InsertComponent } from './insert/insert.component';
import { DetailsComponent } from './details/details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NECComponent } from './nec/nec.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
{path:'page1',component:Page1Component},
{path:'page2',component:Page2Component},
{path:'home',component:HomeComponent},

  {
    component: AboutComponent,
    path:'about'
  },
  
  {
    component:LoginComponent,
     path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:InsertComponent,
    path:'insert'
  },
  {
    component:UpdateComponent,
    path:'update'
  },
  {
    component:DeleteComponent,
    path:'delete'
  },
  {
    component:ReadComponent,
    path:'read'
  },
  {
    component:DetailsComponent,
    path:'details'
  },
  {
    component:ContactusComponent,
    path:'contactus'
  },
  {
    component:NECComponent,
    path:''
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
 export const myRountings=[
  InsertComponent,
  ReadComponent,
  DeleteComponent,
  UpdateComponent

]
