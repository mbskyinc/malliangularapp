import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DataService} from '../data.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router, public dataService: DataService) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    //if(this.username == 'admin' && this.password == 'admin'){
    if(this.username == this.password){
          this.router.navigate(["counting"]);
      this.dataService.loggedInUser = this.username;
    }else {
      alert("Invalid username/password for the given username: " + this.username);
    }
  }

  logout() : void {
     this.dataService.loggedInUser = null;
  }
}
