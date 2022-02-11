import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  hobbyname:string;
  loggedUser:string;
  constructor(public userService:UsersService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {

    this.loggedUser = localStorage.getItem("USERNAME");

    this.userService.GetNofFood();
    this.userService.GetUserWithAgeAndFood();
    this.userService.GetMostHobby().subscribe(
      (result)=>{
        console.log(result)
      },
      (error)=>{
        this.hobbyname=error.error.text;
      }
    
      );
  }



  //logout
  logOut(){
    this.authservice.logout();
    this.router.navigateByUrl('login');
  }

}
