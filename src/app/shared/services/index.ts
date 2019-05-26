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
    public  getUserByEmail(email){
        return <any> this.httpClient.get(this.userApiUrl+"users/email/"+email);
    }
    public  saveUser(data){
        return <any> this.httpClient.post(this.userApiUrl+"users",data);
    }
    public  loggedin(data){
        return <any> this.httpClient.post(this.userApiUrl+"users/login",data);
    }
    public  getFileRegistryById(id){
        return <any> this.httpClient.get(this.userApiUrl+"fileRepository/"+id);
    }
    public  getTransportLogById(id){
        return <any> this.httpClient.get(this.userApiUrl+"transportLog/"+id);
    }
    public  getBoomiLogById(id){
        return <any> this.httpClient.get(this.userApiUrl+"boomiLog/"+id);
    }
    public  getAllusers(){
        return <any> this.httpClient.get(this.userApiUrl+"users");
    }

    public  getFileRegistry(){    
        return this.httpClient.get(this.userApiUrl+"transportId");
    }

    public  getUserCount(){    
        return this.httpClient.get(this.userApiUrl+"dashboard/usercount");
    }

    public  getTransport(){    
        return this.httpClient.get(this.userApiUrl+"dashboard/fileRegcount");
    }
    public  getBarchart(){    
        return this.httpClient.get(this.userApiUrl+"dashboard/barchart");
    }


}