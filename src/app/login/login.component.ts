import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    name:"",
    pwd:""
  }
  constructor(private router:Router,private apiService:ApiService) { }

  ngOnInit() {
  }
  login(data)
  {
    this.apiService.getUser().subscribe(data =>{
      console.log(data[0]);
      console.log(this.user)
      if(data[0].name==this.user.name && data[0].pwd==this.user.pwd)
      {
        this.apiService.setLogIn(true);
          this.router.navigate(['/dashboard']);
      }
      else
      window.alert("Invalid Credential");
    })
  }
}
