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
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

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

  fileName: string = 'Enter Portal Profiler Log file To Proceed';
  reportParserDatUrl = 'http://localhost:3000/file';
  reportParserData: string[];
  filteredParserData: string[];

  search: string;
  ngOnInit(): void {}
  constructor(private http: HttpClient) {
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

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // this.http.get(this.reportParserDatUrl).subscribe((res) => {
    //   //     console.log(res);
    //   params.api.setRowData(res);
    // });
  }

  onFileSelected(event) {
    // console.log("hi");
    console.log(event);
    this.file = event.target.files[0];
    this.fileName = event.target.files[0].name;
    console.log('selectedFiles: ' + this.fileName);
  }

  UploadUserFile() {
    let formdata: FormData = new FormData();
    formdata.append('file', this.file, this.file.name);

    const url = 'http://localhost:3000/api/file';

    this.http
      .post(url, formdata)

      .subscribe((res) => {
        console.log(res);
        let newData = res;
        this.gridApi.setRowData(newData),
          (error) => {
            //Error callback
            console.error('error caught in component');
          };
      });
  }

  private ErrorHandler(errorResponse: HttpErrorResponse) {
    if (errorResponse instanceof ErrorEvent) {
      console.error('Client Side Error', errorResponse.error.message);
    } else {
      console.error('Server Side Error', errorResponse);
    }
    return throwError('please try again');
  }
}
