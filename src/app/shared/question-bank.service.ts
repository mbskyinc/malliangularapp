import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Section } from '../shared/section';
import { Question } from '../shared/question';
import { QuestionSet} from '../shared/questionSet';

@Injectable({
  providedIn: 'root'
})
export class QuestionBankService {
  // Define API
 apiURL = 'http://localhost:3001';
 sectionId ='5d318853f983bb6521372bb0';
 questionSetId= '5d3411ce5b8cb3232bc0715d';

  constructor(private http: HttpClient) { }

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  /*
      // HttpClient API post() method => Get question
 async     getquestionSet() {
     await   this.http.get(this.apiURL + '/sections/'+this.sectionId+'/questionSets/'+this.questionSetId).subscribe((res)=>{
          console.log(res);
          this.questionSet=res;
          return this.questionSet;
        })
      }
*/
      // HttpClient API post() method => Create user
      getquestionSet(): Observable<QuestionSet> {
      return this.http.get<QuestionSet>(this.apiURL + '/sections/'+this.sectionId+'/questionSets/'+this.questionSetId)
      .pipe(
        retry(1),
        
        catchError(this.handleError)
      )
    }
    
     // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error.message;
     // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
    //return alert(error.message);
  }

}
