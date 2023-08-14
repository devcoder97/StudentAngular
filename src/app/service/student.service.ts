// Import HttpClient module
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // Constructor to inject httpClient module
  constructor(private http: HttpClient) {}

  // Create a method named getStudentDetails() that makes GET call to http://localhost:3000/studentList
  // return data as observable<any> 
  getStudentDetails(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/studentList");
  }
}
