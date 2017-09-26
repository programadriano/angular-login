import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { HttpUtilService } from './http-util-service';
import { User } from "../models/users";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    private loginUrl: string = '';
    constructor(private http: Http, private httpUtil: HttpUtilService) {
    }

    logOn(user: string, password: string): Observable<User> {
      

        let url = this.httpUtil.url(this.loginUrl);
        let body = "UserName=" + user + "&PassWord=" + password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .map(this.httpUtil.extrairDados)
            .catch(this.httpUtil.processarErros);
    }

    logOut() {       
        delete localStorage['token'];
    }


}