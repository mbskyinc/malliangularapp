import { Component, OnInit, Input } from '@angular/core';
import { QuestionBankService } from "../shared/question-bank.service";
import { Router } from '@angular/router';
import { QuestionSet } from '../shared/questionSet';
import { PracticeService } from "../shared/practice.service";
import { Practice } from '../shared/practice';
import {DataService} from '../data.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  //   styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  qSet = null;
  enteredAnswer = null;
  answerFlag = null;
  rInt = Math.floor(Math.random() * 4);
  currentQuestion = null;
  i = 0;

  tempQandA = null;
  arrayQandA = [];
  practiceNumber = 3;
  section = "5d318853f983bb6521372bb0";

  tempPractice = {
    practiceNumber: this.practiceNumber,
    QandA: this.arrayQandA
    //section: this.section
  }
  constructor(
    private router: Router,
    public restApi: QuestionBankService,
    public restPracticeApi: PracticeService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.restApi.getquestionSet().subscribe((data: QuestionSet) => {
      this.qSet = data;
      this.getNextQuestion();
    })
  }

  getquestionSet(): String {
    return this.qSet;
  }
  getquestion() {
    //var questions = this.getquestionSet().questionSet[this.rInt];  
    var question = this.qSet.questions[this.rInt];
    console.log(question);
    return question;
  }

  getNextQuestion() {
    let rand = Math.floor(Math.random() * 4);
    this.currentQuestion = this.qSet.questions[rand];
    this.enteredAnswer = null;
    this.answerFlag = null;
  }

  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.submitAnswer();
    }
  }

  checkAnswer() {
    if (this.enteredAnswer == this.currentQuestion.answer) {
      this.answerFlag = true;

    } else {
      this.answerFlag = false;
    }
  }
 
  addToarrayQandA() {
    this.tempQandA = { question: this.currentQuestion.question, enteredAnswer: this.currentQuestion.answer };
    console.log(JSON.stringify(this.tempQandA));
    this.arrayQandA.push(this.tempQandA);
    console.log(JSON.stringify(this.arrayQandA));
  }

  submitAnswer() {
    this.checkAnswer();
    this.addToarrayQandA();
    if (this.i < 2) {
      window.setTimeout(this.getNextQuestion.bind(this), 1000);
      this.i = this.i + 1;
    } else {
        console.log("Before this.tempTest: " + JSON.stringify(this.tempQandA));
        console.log("Before this.tempPractice: " + JSON.stringify(this.tempPractice));
      this.restPracticeApi.createPractice(this.tempPractice).subscribe((data: Practice) => {
        this.dataService.currentPractice = data;
        console.log(data.practiceNumber);
        console.log(data.section);
        console.log(JSON.stringify(data));

        //alert("The Practice is done");
        //this.router.navigateByUrl("/localhost:4200/addition");
        this.router.navigate(["viewpractice"]);
      }, (err) => { console.log('Received an errror: ' + err) })

    }
    console.log("this.practiceArray" + this.arrayQandA);
  }
}

