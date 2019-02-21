import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {MatSnackBar} from '@angular/material';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as $ from 'jquery';
// import { SavePop,PostErrorMsg } from './dialog/dialogs';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //private host = "http://fioridev.ril.com/sap/opu/odata/sap/Z_PNC_FF_DASHBORD_SRV/";
  // var hostOrigin=window.location.origin;
  // private host = "http://devnwngd.ril.com:8000/sap/opu/odata/sap/Z_PNC_FF_DASHBORD_SRV/";
  private host = "/sap/opu/odata/sap/Z_PNC_FF_DASHBORD_SRV/";
  // private host = "http://devnwngd.ril.com:8000/sap/opu/odata/sap/Z_PNC_FF_DASHBORD_SRV/";
  private token: string;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient, private xsrf: HttpXsrfTokenExtractor,public snackBar: MatSnackBar,private router: Router) {

  }
  getCall(url: string): Observable<any[]> {
    const p = url.indexOf('?') > 0 ? '&' : '?';
    const urll = this.host + url + p + 'saml2=disabled';
    console.log("11",url,urll);
    //return this.http.get<any>(urll);
    return this.http.get<any>(urll).pipe(
        catchError(this.handleError<any>(url))
      );
  }
  getUsername():void {
    const httpOptions = {
      withCredentials: true
    //   headers: new HttpHeaders({
    // // 'Access-Control-Allow-Credentials':'true',
    // 'Access-Control-Allow-Origin':'true'
    //   }) 
    };

     
   var gen= "http://abaputilitiesdev.ril.com/TokenGenerator/Generate/";
  
   var that=this;
    var valtoken= this.http.get<any>(gen,httpOptions).subscribe(dat => {

      var token=dat.Data;
      var usrd="http://abaputilitiesdev.ril.com/TokenValidator/Validate/"+token;
      // console.log("usrd "+ usrd)
     var userdetails= this.http.get<any>(usrd).subscribe(dat1 => {

      $("#idUsername").text(dat1.Data.slice(3).replace("."," "));

      // return dat1.Data;
     });
    
    })
    
  }

  getCSRF(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.host, {
      headers: new HttpHeaders({
        'Content-Type': 'application/atom+xml',
        'X-Requested-With': 'XMLHttpRequest',
        'DasaServiceVersion': '2.0',
        'x-csrf-token': 'Fetch' }),
      observe: 'response'
    });
  }

  post(hero: any, url: string): any {
    const p = url.indexOf('?') > 0 ? '&' : '?';
    const urll = this.host + url + p + 'saml2=disabled';
    console.log("22",urll);
    return this.getCSRF().subscribe(dat => {
      const token = dat.headers.get('x-csrf-token');
      const httpOptio = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-csrf-token': token
        })
      };
      // debugger;
      this.http.post<any>(urll, hero, httpOptio).pipe(
        tap(sp => {
          //  debugger;
            //this.showMessage(sp['d'].Message);
            this.openDialog(sp['d'].Message);
          }),
        catchError(this.handlePostError<any>(hero))
      );
      // success
      this.http.post<any>(urll, hero, httpOptio).subscribe(sp => {
        // debugger;
            this.router.navigateByUrl("/master");
        // this.showMessage(sp['d'].Message);
             this.openDialog(sp['d'].Message);
      });
    });
  }

openDialog(data): void {
  let that=this;

	}
  postErrorDialog(data): void {


	}
  private handlePostError<T>(operation = 'operation', result?: T) {
      //  debugger;
    return (error: any): Observable<T> => {
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      this.snackBar.open(error.error.error.message.value,"",{
      duration: 2000
    });
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private handleError<T>(operation = 'operation', result?: T) {
      //  debugger;
    return (error: any): Observable<T> => {
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      this.snackBar.open(error.error.error.message.value,"",{
      duration: 2000
    });
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
