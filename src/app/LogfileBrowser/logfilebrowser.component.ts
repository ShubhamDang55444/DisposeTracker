import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IReportParserData } from './reportParserData';

@Component ({
    templateUrl:'./logfilebrowser.component.html',
    styleUrls: ['./logfilebrowser.component.css']
})
export class LogFileBrowserComponent implements OnInit
{
    fileName = 'Select Portal Profiler log file to proceed';
    url:'';
    file:File = null;
    reportParserDatUrl= 'http://localhost:3000/';
    reportParserData:string[];
    filteredReportParserData:string[]=[];
    _filterData='';

    get filterData():string
    {
        return this._filterData;
    }
    set filterData(value:string)

    {
        this._filterData=value;
       //this.filteredReportParserData= this.filterData ? this.performFilter(this.filterData):this.reportParserData
    }
    ngOnInit(): void {
        this.http.get(this.reportParserDatUrl).subscribe(res=> 
            {
                this.reportParserData= res as string[];
                console.log(this.reportParserData);
            }),
            (err: HttpErrorResponse) => {
              console.log (err.message);
            }

        
    }
     constructor(private http:HttpClient){
        
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