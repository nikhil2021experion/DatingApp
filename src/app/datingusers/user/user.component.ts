import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Hobby } from 'src/app/shared/hobby';
import { Food } from 'src/app/shared/food';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loggedUser:string;
  //declare variable uID
  uID:number;
  newAttribute: any = {};
  // buttonDisabled: boolean;
  hobbie:Array<Hobby>;
  food:string[];
  constructor(public userService:UsersService, private authService: AuthService,
    private route: ActivatedRoute, private router: Router,
    private toasterService: ToastrService) { }

  ngOnInit(): void {



    this.loggedUser = localStorage.getItem("USERNAME");

    this.userService.bindListMovieGenre();
    this.userService.bindListHobbies();
    this.userService.bindListFoods();
    this.userService.bindListUsers();

    //get pID from ActivatedRoute
    this.uID = this.route.snapshot.params['uID'];

    //get postId
    if(this.uID != 0 || this.uID != null){
      console.log(this.uID);

      //get post
      this.userService.getUser(this.uID).subscribe(
        data => {
          console.log(data);
          console.log(data.Food);
          this.food = data.Food;
          //assign this data to postService formData
          this.userService.formData = Object.assign({},data);
        },
        error =>{
          console.log(error);
        }
      )
    }
  }


  
  //Submit
  onSubmit(form:NgForm){
    console.log(form.value);

    let addId = this.userService.formData.UserId;
    // INSERT OR UPDATE
    if(addId == 0 || addId == null){
      //INSERT
      this.insertUserRecord(form);
    }
    else{
      //UPDATE
      this.updateUserRecord(form);
    }
  }

  //insert Method
  insertUserRecord(form?: NgForm){
    console.log("Inserting a record...");
    this.userService.insertUser(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);

        this.toasterService.success('users record has been inserted','DatingApp v2022');
      },
      (error)=>{
        console.log(error);
      }
    );
  }


  //update Method
  updateUserRecord(form?: NgForm){
    console.log("updating a record...");
    this.userService.updateUser(form.value).subscribe(
      (result) => {
        console.log(result);
        //call reset form for clear the content
        this.resetForm(form);

        this.toasterService.success('users record has been updated','DatingApp v2022');
      },
      (error)=>{
        console.log(error);
      }
    );
  }


  //clear all contents after submit --initialization
  resetForm(form?: NgForm){
    if(form != null ) {
      form.resetForm();
    }
  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }






  // addFieldValue() {
  //   this.buttonDisabled=false;
  //   console.log("Button Enabled");
  //   this.newAttribute.PostId = this.postService.len + this.postArray.length; // I didnt use Identity hence auto-generate next PostID

  //   var datepipe=new DatePipe("en-UK");
  //   let formattedDate:any=datepipe.transform(Date.now(),'yyyy-MM-dd');
  //   this.newAttribute.CreatedDate=formattedDate;
    
  //   if (this.postArray.length > 0) {
  //     this.newAttribute.CategoryId = this.postArray[0].CategoryId;
  //   }
  //   // Onclick Add the Category gets Refreshed
  //   this.postArray.push(this.newAttribute)
  //   console.log(this.postArray);
  //   this.newAttribute = {};

  //   this.newAttribute.CategoryId=this.DefaultCategory;
  //   console.log(this.newAttribute.CategoryId);
  // }

}
