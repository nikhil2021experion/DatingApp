import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-datingusers',
  templateUrl: './datingusers.component.html',
  styleUrls: ['./datingusers.component.scss']
})
export class DatingusersComponent implements OnInit {

  loggedUser:string;
  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("USERNAME");
  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
