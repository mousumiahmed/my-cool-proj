import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message ="helllooooooo"
  username ="mousumi"
  password = ""
  todos =[{
    id:1, description:"hiee me"},
    {
    id:2,description:"hieecdss me"}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.message)
  }
  handleLogin(){
    this.router.navigate(['welcome']);
    console.log(this.username,this.password)
  }

}
