import { PracticeService } from "../shared/practice.service";
import { Practice } from '../shared/practice';
import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({ 
    selector: 'app-practice',
    templateUrl: './practice.component.html',
 //   styleUrls: ['./multiplication.component.css']
})
export class PracticeComponent implements OnInit {
  qSet = null;
  enteredAnswer = null;
  rInt = Math.floor(Math.random()*4);
  currentQuestion = null;

  constructor(
        private router: Router,
        public restApi: PracticeService
      ) {}
     
      ngOnInit() {
        this.restApi.getpractice().subscribe((data: Practice) => {
         // this.getNextQuestion();
        })
      }

    }