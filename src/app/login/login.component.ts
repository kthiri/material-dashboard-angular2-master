import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { USerServiceService } from 'app/service/user-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  isSubmitted: boolean;
  isValidUser: boolean;

  constructor(public fb:FormBuilder,private router:Router,private userService:USerServiceService) { 
  }
  goToPage(){
    this.router.navigate([`dashboard`]);
  }
  ngOnInit(): void {
    localStorage.removeItem("logged");
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.userService
      .loginAdmin(this.form.value.email, this.form.value.password)
      .subscribe((data) => {
        if (data) {
          
          this.router.navigate(['/dashboard']); 
        }
        this.isSubmitted = true;
        this.isValidUser = data; 
      });
  }
}
