import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  //2nd method
  public loginVerfy(user: User){
    //calling  webservice and passing username and password
    console.log(user);
    //return this.httpClient.get(environment.roleUrl +'/api/users/GetUser/'+ user.userName + '&'+user.userPassword);
    return this.httpClient.get('https://localhost:44324/api/Users/EnterCredentials='+user.Name+'&'+user.Password);
  }

  public logout(){
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACCESSIBLE");
    sessionStorage.removeItem("USERNAME");
    sessionStorage.removeItem("JwtTOKEN");
}
}
