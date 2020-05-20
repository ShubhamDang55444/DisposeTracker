import { Injectable } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable'

import {TreeNode} from 'primeng/primeng';

@Injectable({
  providedIn: 'root',
})
export class LogFileBrowserService {
  file: File = null;
  fileName: string = 'Enter Portal Profiler Log file To Proceed';

  url = 'http://localhost:3000/api/file';

  constructor(private http: HttpClient) {}

  getData(): Observable<TreeNode[]> {
    let formdata: FormData = new FormData();
    formdata.append('file', this.file, this.file.name);

    return this.http.post<any>(this.url, formdata).pipe(
      tap((data) => console.log( JSON.stringify(data))),
      catchError(this.ErrorHandler)
    );
  }
  private ErrorHandler(errorResponse: HttpErrorResponse) {
      let errMessage=''
    if (errorResponse.error instanceof ErrorEvent) {
   console.error('Client Side Error', errorResponse.error.message)  
    } else {
      console.error('Server Side Error' ,errorResponse, errorResponse.status,errorResponse.statusText)
      window.alert( errorResponse.status+ ' ' + errorResponse.statusText);
    }
   //console.error(errMessage);
  

    return Observable.throw(errorResponse);
  }

  getFileDetails(event):string {
    console.log(event);
    this.file = event.target.files[0];
    this.fileName = event.target.files[0].name;
    console.log('selectedFiles: ' + this.fileName);
   
  

    return this.fileName;
  }  

  

 
  
}
