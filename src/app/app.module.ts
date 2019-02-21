import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/layout/header/header.component';


// Bootstrap Components
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

// Material Components
import { AppMaterialModule } from './app-material/app-material.module';

// Other Components
import { OwlModule } from 'ngx-owl-carousel';
import { DataTablesModule } from 'angular-datatables';

import { FooterComponent } from './views/layout/footer/footer.component';
import { SidenavComponent } from './views/layout/sidenav/sidenav.component';
import { HomeComponent } from './views/home/home.component';
import { SubheaderComponent } from './views/layout/subheader/subheader.component';
import { LoginComponent } from './views/login/login.component';
import { MasterComponent } from './views/master/master.component';
import { TableComponent } from './views/pages/table/table.component';
import { FormsComponent } from './views/pages/forms/forms.component';
import { PageComponent } from './views/pages/page/page.component';

// import { MyanalyticsComponent } from './myanalytics/myanalytics.component';
// import { TopchartsModule } from './topcharts/topcharts.module';  
import echarts from 'echarts';
import * as d3 from "d3";
import * as $ from "jquery";
// import { DownchartComponent } from './downchart/downchart.component';
import { MatGridListModule } from '@angular/material';

// import {SidenavService} from './myanalytics/sidenav.service'
import {MatTooltipModule} from '@angular/material/tooltip';
// import { CustomAnalyticsComponent } from './custom-analytics/custom-analytics.component';

import { HttpClientModule }    from '@angular/common/http';
import { HttpService }    from './http.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    SubheaderComponent,
    LoginComponent,
    MasterComponent,
    TableComponent,
    FormsComponent,
    PageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppBootstrapModule,
    AppMaterialModule,
    OwlModule,
    DataTablesModule,
    // TopchartsModule,
    MatGridListModule,
    HttpClientModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
