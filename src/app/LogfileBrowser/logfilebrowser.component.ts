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
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';

import { TreeModule } from 'primeng/tree';

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
  cols: any[];

  sortingOrder;
  errorMessage = '';
  loading = true;
  file: File = null;
  fileName: string = 'Enter Portal Profiler Log File to proceed';
  files: TreeNode[];

  reportParserDatUrl = 'http://localhost:3000/file';
  reportParserData: string[];
  filteredParserData: string[];

  search: string;
  rowSelection: string;
  ngOnInit() {}
  constructor(
    private http: HttpClient,
    private logfilebrowserService: LogFileBrowserService
  ) {
    this.cols = [
      { field: 'm_Name', header: 'Name' },
      { field: 'm_Count', header: 'Count' },
    ];
    // (this.columnDefs = [
    //   {
    //     headerName: 'NAMES',
    //     field: 'm_Name',
    //     width: 800,
    //   },
    //   {
    //     headerName: 'Count',
    //     field: 'm_Count',
    //     width: 100,
    //   },
    // ]),
  }

  onFileSelected(event) {
    // console.log("hi");
    this.logfilebrowserService.getFileDetails(event);
    this.fileName = this.logfilebrowserService.fileName;
    if (!this.validateFile(this.fileName)) {
      alert(
        'Selected file format is not supported \n Please upload Dispose Tracker Log File'
      );
      return false;
    }
  }
  validateFile(name: String) {
    let fileIndex = name.substring(name.lastIndexOf('.') + 1);
    if (fileIndex.toLowerCase() == 'log') {
      return true;
    } else {
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
    // this.logfilebrowserService.getData().subscribe((res) => {
    // console.log(res);
    // let newData = res;
    // this.gridApi.setRowData(newData);

    // });
    this.logfilebrowserService.getData().subscribe((res) => {
      this.files = res;
      console.log('Hello', this.files);

     
    });
  }
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
  // onSelectionChanged(event) {
  //   let selectedRows = this.gridApi.getSelectedRows();
  //   console.log(selectedRows);

  //   let nameOfRow = selectedRows[0];
  //   let nameofSelectedRow = nameOfRow.m_Name;
  //      console.log("Hello");
  //   window.open(nameofSelectedRow, "http://localhost:4200/logfilebrowser");
  //   this.logfilebrowserService.getData().subscribe((res) => {
  //     // console.log(res);
  //     let newData = res;
  //     this.gridApi.setRowData(newData);
  //   });
  // }
}
