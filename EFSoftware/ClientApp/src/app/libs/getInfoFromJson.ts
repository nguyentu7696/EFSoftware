import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class getInfoFromJsonService {
    
    constructor(private http: HttpClient) {
    }

    public getType() : Observable<any> {
        return this.http.get("./assets/json/type.json");
    }


}