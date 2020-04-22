import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IReportParserData } from './reportParserData';
import {NgForm} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms'

@Component ({
    templateUrl:'./logfilebrowser.component.html',
    styleUrls: ['./logfilebrowser.component.css']
})
export class LogFileBrowserComponent implements OnInit
{
     private gridApi;
     private gridColumnApi;  
     columnDefs;
      sortingOrder;
    file:File = null;
    reportParserDatUrl= 'http://localhost:3000/file';
    reportParserData:string[];
    filteredParserData:string[];
  
    search:string  ;
    ngOnInit(): void {
        // this.http.get(this.reportParserDatUrl).subscribe(res=> 
        //     {
        //         this.reportParserData= res as string[];
        //         this.filteredParserData= this.reportParserData;
        //         console.log(this.reportParserData);
        //     }),
        //     (err: HttpErrorResponse) => {
        //       console.log (err.message);
        //     }

        
    }
     constructor(private http:HttpClient){
        this.columnDefs=[
          {
            headerName:"NAMES",
            field:"m_Name",
            width:800,
           
            
          },
          {
            headerName:"Count",
            field:"m_Count",
            width:100
          },
        ]
     }

     onGridReady(params)
     {
       this.gridApi=params.api;
       this.gridColumnApi=params.columnApi;
     let dataValue= [{"m_Name":"DANG","m_Count":"40"}]
        this.http.get(this.reportParserDatUrl)
       .subscribe(res=>
        {
      //     console.log(res);
          params.api.setRowData(res);
         })
    // params.api.setRowData(dataValue); 
      }
     
    
    onFileSelected(event)
    {        
       // console.log("hi");
       console.log(event);
        //console.log("by");
      this.file= event.target.files[0];
      
    }
    UploadUserFile()
    {
       let formdata:FormData=new FormData();
       formdata.append('logFile',this.file,this.file.name)
       const url='';

       this.http.post(url,formdata).subscribe((res)=> console.log(res));
    }
    // performFilter(filterby:string):string[]
    //   {
    //         filterby=filterby.toLowerCase();
    //         return this.reportParserData.filter((ppnode:string[]) => ppnode.name.toLowerCase().indexOf(filterby)!== -1
    //         );
    //   } 
    

  
}