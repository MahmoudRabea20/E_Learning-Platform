import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInstructor } from '../models/iinstructor';
// import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Instructor {
  constructor(private httpclient: HttpClient) {
    // Initialization logic can go here if needed
  }
  addInstructor(instructorData: IInstructor): Observable<IInstructor> {
    return this.httpclient.post<IInstructor>(`${"environment.baseURL"}/Instructor`, instructorData);
  }
  getInstructors():Observable<IInstructor[]> {
    return this.httpclient.get<IInstructor[]>(`${"environment.baseURL"}/Instructor`);
  }
  getInstructorById(id: number): Observable<IInstructor> {
    return this.httpclient.get<IInstructor>(`${"environment.baseURL"}/Instructor/${id}`);
  }
  updateInstructor(id: number, updatedInstructor: IInstructor): Observable<IInstructor> {
    return this.httpclient.put<IInstructor>(`${"environment.baseURL"}/Instructor/${id}`, updatedInstructor);
  }
  deleteInstructor(id: number): Observable<IInstructor> {
    return this.httpclient.delete<IInstructor>(`${"environment.baseURL"}/Instructor/${id}`);
  }
}
