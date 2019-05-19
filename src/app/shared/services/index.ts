import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class IndexService {
  

    testApiUrl:string = "https://jsonplaceholder.typicode.com/todos/1";

    constructor(private httpClient: HttpClient) { }

    public getUserById() {
        return this.httpClient.get(this.testApiUrl);
    }

}