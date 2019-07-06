import { Component} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SmartFacts4Kids';
  
  get loggedInUser():string{
    return this.dataService.loggedInUser;
  }

  constructor( public dataService: DataService) {
   // this.loggedInUser = this.dataService.loggedInUser;
  }

}
