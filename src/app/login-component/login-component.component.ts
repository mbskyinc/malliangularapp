import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DataService} from '../data.service';
import { UserRestApiService } from "../shared/user-restapi.service";
import { User } from '../shared/user';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router, public dataService: DataService, public restApi: UserRestApiService) { }

  @Input() userDetails = { username: '', password: '' }

  ngOnInit() {
  }

  login() : void {
    this.restApi.authenticateUser(this.userDetails).subscribe((data: User) => {
      if(this.userDetails.username == data.username){
        this.dataService.loggedInUser = this.userDetails.username;
        this.router.navigate(["counting"]);
      } else {
        this.dataService.loggedInUser = null;
        alert("Invalid username/password for the given username: " + this.userDetails.username);
      }
    })
  }

  logout() : void {
     this.dataService.loggedInUser = null;
  }
}
