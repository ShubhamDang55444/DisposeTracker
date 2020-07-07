import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogFileBrowserService } from '../logfilebrowser.service';

@Component({
  selector: 'app-submitted-user-file',
  templateUrl: './submitted-user-file.component.html',
  styleUrls: ['./submitted-user-file.component.css']
})
export class SubmittedUserFileComponent implements OnInit {


  private gridApi;
  private gridColumnApi;
  columnDefs;
  sortingOrder;
  errorMessage = '';
  loading = true;
  file: File = null;
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

  ngOnInit(): void {
    
    this.logfilebrowserService.getData()
    .subscribe((res) => {
        // console.log(res);
        let newData = res;
        this.gridApi.setRowData(newData) 
      

    }
    );
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
   

  }
}
