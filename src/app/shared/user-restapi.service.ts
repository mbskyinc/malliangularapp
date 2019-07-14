import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRestApiService {
 // Define API
 apiURL = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

    // HttpClient API post() method => Create user
    createUser(user): Observable<User> {
      return this.http.post<User>(this.apiURL + '/users', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    // HttpClient API post() method => Create user
    authenticateUser(user): Observable<User> {
      return this.http.post<User>(this.apiURL + '/users/authenticate', JSON.stringify(user), this.httpOptions)
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
