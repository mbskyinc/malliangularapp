import { Component, OnInit,Input } from '@angular/core';
import { UserRestApiService } from "../shared/user-restapi.service";
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import { PracticeService } from "../shared/practice.service";
import { Practice } from '../shared/practice';

@Component({
  selector: 'app-viewpractice',
  templateUrl: './viewpractice.component.html',
  styleUrls: ['./viewpractice.component.css']
})
export class ViewpracticeComponent implements OnInit {

  constructor(
    private router: Router,
    public restApi: PracticeService,
    public dataService: DataService
  ) { }

  ngOnInit() {
   // this.restApi.getpractice().subscribe((data: Practice)=>{}, (err) => { console.log('Received an errror: ' + err) })
  // this.dataService.currentPractice;
  }

  get currentPractice():Practice{
    return this.dataService.currentPractice;
  }
  
}