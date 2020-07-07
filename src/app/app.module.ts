import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { LocalFileAnalysisComponent } from './LocaLogFileAnalysis/localFileAnalysis.component';
import { RouterModule } from '@angular/router';
import { LogFileBrowserComponent } from './LogfileBrowser/logfilebrowser.component';
//import { LocalLogFileAnalysisComponent } from './LocaLogFileAnalysis/localFileAnalysis.component';
import {HttpClientModule} from '@angular/common/http'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import { SubmittedUserFileComponent } from './LogfileBrowser/submitted-user-file/submitted-user-file.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogFileBrowserComponent,
    SubmittedUserFileComponent,
    
    //LocalFileAnalysisComponent
    

  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    
  
    RouterModule.forRoot([
     {path:'logfilebrowser', component: LogFileBrowserComponent} ,
     {path:'submitted-user-file',component:SubmittedUserFileComponent},
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
