import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Practice } from '../shared/practice';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PracticeService {
 // Define API
 apiURL = 'http://localhost:3001';
 sectionId ='5d318853f983bb6521372bb0';
 practiceId= '5d39391bdf56e07ddf8f8d46';

  constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    // HttpClient API post() method => Create user
    createPractice(practice): Observable<Practice> {
      let practice_url = this.apiURL +'/sections/'+'5d318853f983bb6521372bb0' + '/practices';
      console.log(practice_url);
      return this.http.post<Practice>(practice_url, JSON.stringify(practice), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

          // HttpClient API post() method => Create user
          getpractice(): Observable<Practice> {
            return this.http.get<Practice>(this.apiURL + '/sections/'+this.sectionId+'/practices/'+this.practiceId)
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

