import {Router} from '@angular/router'
import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map, catchError} from 'rxjs/operators'
import { throwError } from 'rxjs'
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
    constructor(private Router:Router, private http: HttpClient)
    {

    }


    // post(Url: string, model: any){

    //     let body = JSON.stringify(model)
    //     let headers = new Headers ({'Content-Type': 'application/json' });
    //     // let options = new Request ({ headers: headers });
    //     return this.http.post(Url,body)
    // }
    // http://0.0.0.0:8080/Register
    sendPostRequest(Url: string,data: any): Observable<any> {
        return this.http.post<any>(Url, data);
   }
}