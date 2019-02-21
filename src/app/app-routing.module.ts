import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MasterComponent } from './views/master/master.component';
import { TableComponent } from './views/pages/table/table.component';
import { FormsComponent } from './views/pages/forms/forms.component';
import { PageComponent } from './views/pages/page/page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'master',
    component: MasterComponent
  },
  {
    path: 'pages/table',
    component: TableComponent
  },
  {
    path: 'pages/forms',
    component: FormsComponent
  },
  {
    path: 'pages/page',
    component: PageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
