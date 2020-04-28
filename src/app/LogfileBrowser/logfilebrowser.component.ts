import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  HttpClientModule,
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { IReportParserData } from './reportParserData';
import { NgForm } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Observable, throwError } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { error } from '@angular/compiler/src/util';
import { LogFileBrowserService } from './logfilebrowser.service';



@Component({
  templateUrl: './logfilebrowser.component.html',
  styleUrls: ['./logfilebrowser.component.css'],
})
export class LogFileBrowserComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  columnDefs;
  sortingOrder;
  errorMessage = '';
  loading = true;
  file: File = null;
  fileName:string='Enter Portal Profiler Log File to proceed'
 
  
  reportParserDatUrl = 'http://localhost:3000/file';
  reportParserData: string[];
  filteredParserData: string[];

  search: string;
  ngOnInit(): void {
    
  }
  constructor(private http: HttpClient,private logfilebrowserService:LogFileBrowserService) {
    this.columnDefs = [
      {
        headerName: 'NAMES',
        field: 'm_Name',
        width: 800,
        
      },
      {
        headerName: 'Count',
        field: 'm_Count',
        width: 100,
      
      },
    ];
  }
 
  onFileSelected(event) {
    // console.log("hi");
    this.logfilebrowserService.getFileDetails(event);
    this.fileName = this.logfilebrowserService.fileName
    if (!this.validateFile(this.fileName)) {
      alert('Selected file format is not supported \n Please upload Dispose Tracker Log File');
      return false;}
    
  }
  validateFile(name: String) {
    let fileIndex = name.substring(name.lastIndexOf('.') + 1);
    if (fileIndex.toLowerCase() == 'log') {
        return true;
    }
    else {
        return false;
    }
}

  onGridReady(params) {
   

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // this.http.get(this.reportParserDatUrl).subscribe((res) => {
    //   //     console.log(res);
    //   params.api.setRowData(res);
    // });
  }

  

  UploadUserFile() {

  
    this.logfilebrowserService.getData()
    .subscribe((res) => {
        // console.log(res);
        let newData = res;
        this.gridApi.setRowData(newData) 
      

    }
    );

    
    // let formdata: FormData = new FormData();
    // formdata.append('file', this.file, this.file.name);

    // const url = 'http://localhost:3000/api/files';

    // this.http
    //   .post(url, formdata)
      // .pipe(tap(data=>console.log('All'+ JSON.stringify(data))),
      // catchError(this.ErrorHandler)
      // );
      // .subscribe((res) => {
      //   console.log(res);
      //   let newData = res;
      //   this.gridApi.setRowData(newData)
      //   .catch(this.ErrorHandler),

      //   (error)=>{console.log(error);
      //   }
         
      // });

     
  }

 
}
