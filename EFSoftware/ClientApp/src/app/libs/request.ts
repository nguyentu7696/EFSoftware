import { Http, Headers, Request, RequestOptions, RequestMethod, Response, ResponseContentType } from '@angular/http';
import { SystemConstants } from "./SystemConstant";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomRequest {
    myAppUrl: string = "";

    constructor(private http: Http, private httpClient: HttpClient) {
        this.myAppUrl = SystemConstants.BASE_API;
    }

    UploadFile(url, fileToUpload) {

      let formData:FormData = new FormData();
        formData.append('files', fileToUpload, fileToUpload.name);
        let headers = new Headers();
        //headers.append('Content-Type', 'multipart/form-data');
        headers.append('accept', 'text/plain');
        let options = new RequestOptions({ headers: headers });

       return this.http.post(`${this.myAppUrl}/${url}`, formData, options)
        .map(res => res.json())
        .catch((e) =>this.onError(e.json().message));
    }

    Request(url: string, method: RequestMethod, body?: Object) {
        const headers = new Headers();
        const user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Token = " + user.token);
        const requestOptions = new RequestOptions({
          url: `${this.myAppUrl}/${url}`,
          method: method,
          headers: headers
        });
    
        if (body) {
          requestOptions.body = body;
        }
    
        const request = new Request(requestOptions);
        return this.http.request(request)
          .map((res: Response) => res.json())
          .catch((res: Response) => this.onError(res.json().message));
      }
	  
	  makeRequest(url: string, method: RequestMethod, body?: Object) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const requestOptions = new RequestOptions({
          url: `${this.myAppUrl}/${url}`,
          method: method,
          headers: headers
        });
    
        if (body) {
          requestOptions.body = body;
        }
    
        const request = new Request(requestOptions);
        return this.http.request(request)
          .map((res: Response) => res.json())
          .catch((res: Response) => this.onError(res.json().message));
      }

      onError(res: Response) {
        const statusCode = res.status;
        const body = res.json();
        const error = {
          statusCode: statusCode,
          error: body.error
        };
        console.log(error);
        return Observable.throw(error);
      }


      public getCountries() : Observable<any> {
        return this.http.get("../../assets/json/countries.json",  {responseType: ResponseContentType.Text});
    }

}