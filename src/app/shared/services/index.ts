import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class IndexService { 

    testApiUrl:string = "https://jsonplaceholder.typicode.com/todos/1";

    userApiUrl:string ="http://localhost:3004/micro/api/v1/";

    constructor(private httpClient: HttpClient) { }

    public getUserById() {
        return this.httpClient.get(this.testApiUrl);
    }
    public  getAllusers(){
        return this.httpClient.get(this.userApiUrl+"users");
    }

    public  getFileRegistry(){    
        return this.httpClient.get(this.userApiUrl+"transportId");
    }

}