import {Router} from '@angular/router'
import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map, catchError} from 'rxjs/operators'
import { throwError } from 'rxjs'
import Swal from 'sweetalert2';
interface ICallback
{
    (value?:boolean):void;
}

interface HttpcallBack
{
    (ApiResult?:any):void;
}
@Injectable({
    providedIn:'root'
})

export class CommonService
{

    URL: any;
    PreviewData : any = [];
    ThanipaniRejectedEditData: any = [];
    ID_Number: any;
    
    constructor(private Router:Router, private http: HttpClient)
    {
        this.URL = 'https://tnfsd-be.cleverapps.io';
    }


    // post(Url: string, model: any){

    //     let body = JSON.stringify(model)
    //     let headers = new Headers ({'Content-Type': 'application/json' });
    //     // let options = new Request ({ headers: headers });
    //     return this.http.post(Url,body)
    // }
    sendPostRequest(Url: string,data: any): Observable<any> {
        return this.http.post<any>(Url, data);
   }
//    Put Method
   PutMethod(Url: string,data: any): Observable<any> {
    return this.http.put<any>(Url, data);
}
   //Get Method
   //Any Data Type
   GetMethod(Url: string, Data:any): Observable<any> {
    return this.http.get(Url,Data )
  }

//    Toast messages for alerts
   ToastSuccess(Message: string)
   {
       const Toast = Swal.mixin({
           toast : true,
           position: 'top-end',
           showConfirmButton : true,
       });
       
       Toast.fire({
           icon:'success',
           title: Message
       })
   }

AlertWarning(mes:string)
   {
    Swal.fire({
        // title: "Good job!",
        text: mes,
        icon: "warning",
      });
   }

AlertSucces(mes:string)
   {
    Swal.fire({
        // title: "Good job!",
        text: mes,
        icon: "success",
      });
   }   

}