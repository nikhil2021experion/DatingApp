import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  page:number =1;
  filter: string;
  loggedUser: string;
  constructor(public  userService: UsersService,private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    console.log("Welcome buddy!")

    this.loggedUser = localStorage.getItem("USERNAME");

    this.userService.bindListUsers();

  }

  
  //
  getUsers(){
    //call service method
    this.userService.getAllUsers().subscribe(Response => {
      console.log(Response);
    },
    error=>{
      console.log(error);     
    }
    );
  }


  //Edit Employee
  updateUser(uID:number){
    console.log(" going to update this " +uID);
    //navigate to edit form with selected employee details

    this.router.navigate(['user',uID]);
  }


  // Delete user
  deleteUser(uID:number){
    console.log(uID);
    if(confirm('are you sure you want to DELETE this user record?')){
      this.userService.deleteUser(uID).subscribe(
        response =>{
          this.userService.bindListUsers();
        },
        error =>{
          console.log(error);
        }
      );
    }
  }


  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
