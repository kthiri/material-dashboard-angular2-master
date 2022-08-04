import { Component, Input, OnInit } from '@angular/core';
import { User } from 'app/Models/user';
import { USerServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public users:User[];
  public driver:User;

  @Input() driverDetails = { firstName: '', lastName: '', phone: '',cin:'',username:'',
password:'',driverLicense:'',email:'' };

  constructor(private userService:USerServiceService) { }

  ngOnInit() {
    this.getUsers();
  }
 
  getUsers(){
  
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
      console.log(this.users);
    })
    
  }
  AddUser(){
    
    this.userService.AddUser(this.driverDetails).subscribe(data=>{
      console.log("success")

    })

 }
}