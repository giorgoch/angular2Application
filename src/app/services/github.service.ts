import { Injectable } from "@angular/core";
import {Http,Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {

private username ='giorgoch';
    constructor(private _http:Http){
        console.log('Git hub service started......');
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username).map(res=>res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos').map(res=>res.json());
    }
    updateUsername(username : any ){
        this.username=username;
    }
}