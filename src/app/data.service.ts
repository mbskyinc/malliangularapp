import { Injectable } from '@angular/core';
import { Practice } from './shared/practice';

@Injectable(
  /*{
  providedIn: 'root'
}
*/)
export class DataService {
  loggedInUser: string;
  currentPractice: Practice; 
  //constructor() { }
}
