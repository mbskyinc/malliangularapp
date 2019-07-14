import { Component, OnInit,Input } from '@angular/core';
import { UserRestApiService } from "../shared/user-restapi.service";
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

@Input() userDetails = { username: '', password: '' }

  constructor(
    private router: Router,
    public dataService: DataService,
    public restApi: UserRestApiService
  ) { }

  ngOnInit() {
  }

  addUser() {
    this.restApi.createUser(this.userDetails).subscribe((data: {}) => {
      this.dataService.loggedInUser = this.userDetails.username;
      this.router.navigate(["counting"]);
    })
  }

}
