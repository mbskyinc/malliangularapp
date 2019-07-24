import { Component, OnInit,Input } from '@angular/core';
import { QuestionBankService } from "../shared/question-bank.service";
import {Router} from '@angular/router';
import { QuestionSet } from '../shared/questionSet';

@Component({ 
    selector: 'app-multiplication',
    templateUrl: './multiplication.component.html',
 //   styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  qSet = null;
  enteredAnswer = null;
  rInt = Math.floor(Math.random()*4);
  currentQuestion = null;

  constructor(
        private router: Router,
        public restApi: QuestionBankService
      ) {}
     
      ngOnInit() {
        this.restApi.getquestionSet().subscribe((data: QuestionSet) => {
          this.qSet= data;
          this.getNextQuestion();
        })
      }

      getquestionSet():String {
        return this.qSet;
      }
      getquestion(){
      //var questions = this.getquestionSet().questionSet[this.rInt];  
      var question = this.qSet.questions[this.rInt];
      console.log(question);
      return question;
      }
      
      getNextQuestion(){
        this.rInt = Math.floor(Math.random()*4);
        this.currentQuestion= this.getquestion();
        this.enteredAnswer = null;  
      }

      keyDownFunction(event) {
        if(event.keyCode == 13) {
          this.checkAnswer();
        }
      }

      checkAnswer(){
        if (this.enteredAnswer == this.currentQuestion.answer){
          this.getNextQuestion();
        }else{
          alert("Answer is wrong");
          this.getNextQuestion();
        }
      }

}

