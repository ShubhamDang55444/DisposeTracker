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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogFileBrowserComponent,
    
    //LocalFileAnalysisComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
     {path:'logfilebrowser', component: LogFileBrowserComponent} ,
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
