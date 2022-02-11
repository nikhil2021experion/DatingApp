import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { Hobby } from './hobby';
import { Food } from './food';
import { MostFood } from './most-food';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:Users[];  //all employee details
  movies: Movie[];
  hobbies:Hobby[];
  foods:Food[];
  mostfoods: MostFood[];
  formData: Users = new Users();
  constructor(private httpClient: HttpClient) { }


  getAllUsers():Observable<any>{    
    return  this.httpClient.get(environment.apiUrl+ '/api/Users/GetUsers');
  }

  ///2
  bindListUsers(){
    this.httpClient.get(environment.apiUrl+ '/api/Users/GetUsers').toPromise().then(
      response =>{
        console.log(" from service ");
        console.log(response);
        this.users = response as Users[]
      }
    )
  }


  //get all movie genre
  bindListMovieGenre(){
    this.httpClient.get(environment.apiUrl + '/api/Movies').toPromise().then(
      response => {
        console.log("from service");
        console.log(response);
        this.movies = response as Movie[];
      }
    )
  }

  //get all hobbies
  bindListHobbies(){
    this.httpClient.get(environment.apiUrl + '/api/Hobbies/GetHobbies').toPromise().then(
      response => {
        console.log("from service");
        console.log(response);
        this.hobbies = response as Hobby[];
      }
    )
  }

   //get all foods
   bindListFoods(){
    this.httpClient.get(environment.apiUrl + '/api/Foods/GetFoods').toPromise().then(
      response => {
        console.log("from service");
        console.log(response);
        this.foods = response as Food[];
      }
    )
  }



  //get user by id
  getUser(id:number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+ "/api/Users/"+id);
  }


  //insert user
  insertUser(users:Users): Observable<any>{
    console.log(" userid: " +users.UserId);
    console.log(" name: " +users.Cname);
    console.log(" phone: " +users.Phone);
    return this.httpClient.post(environment.apiUrl+ "/api/Users",users);
  }


  //update user
  updateUser(users:Users): Observable<any>{
    return this.httpClient.put(environment.apiUrl+ "/api/Users",users);
  }

  //delete employee
  deleteUser(id:number){
    return this.httpClient.delete(environment.apiUrl+ "/api/Users/"+id);
  }


  GetMostHobby():Observable<any>
  {
    return this.httpClient.get('https://localhost:44324/api/Users/GetMostHobby');

  }

  GetNofFood()
  {
    this.httpClient.get('https://localhost:44324/api/Users/GetCountOfFood').toPromise().then(response=>{
      console.log("From Service");
      console.log(response);
      this.mostfoods=response as MostFood[];
    })

  }

  GetUserWithAgeAndFood()
  {
    this.httpClient.get('https://localhost:44324/api/Users/GetUserWithCertainAgeAndFood').toPromise().then(response=>{
      console.log("From Service");
      console.log(response);
      this.users=response as Users[];
  })
}
}
