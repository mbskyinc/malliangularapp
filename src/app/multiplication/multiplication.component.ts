import { Component, OnInit,Input } from '@angular/core';
import { QuestionBankService } from "../shared/question-bank.service";
import {Router} from '@angular/router';
import { QuestionSet } from '../shared/questionSet';
import { PracticeService } from "../shared/practice.service";
import { Practice } from '../shared/practice';

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
  i = 0;

  tempTest = null;
  practiceArray = [];
  practiceNumber = 3;
  section= "5d318853f983bb6521372bb0";

tempPractice = {
  practiceNumber: this.practiceNumber,
  QandA: this.practiceArray//,
  //section: this.section
}
  constructor(
        private router: Router,
        public restApi: QuestionBankService,
        public restPracticeApi: PracticeService
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
          //save the question and answer in practice
          this.tempTest = {question: this.currentQuestion.question, enteredAnswer: this.currentQuestion.answer};
          console.log(JSON.stringify(this.tempTest));
          this.practiceArray.push(this.tempTest);
          console.log(JSON.stringify(this.practiceArray));

          if (this.i < 2){ 
              
              this.getNextQuestion();
              this.i = this.i+1;
              //console.log(this.practiceArray.push(this.tempTest ));
          } else {
             // mesage: The practice is done
             alert("The Practice is done");
             console.log("Before this.tempTest: "+JSON.stringify(this.tempTest));
             console.log("Before this.tempPractice: "+JSON.stringify(this.tempPractice));
             this.restPracticeApi.createPractice(this.tempPractice).subscribe((data:Practice)=>{
              console.log(data.practiceNumber);
              console.log(data.section);
              console.log(JSON.stringify(data));
             }, (err) => { console.log('Received an errror: ' + err)})

          }
          console.log("this.practiceArray"+this.practiceArray);
        }else{
          alert("Answer is wrong");
          this.getNextQuestion();
        }
      }

}

