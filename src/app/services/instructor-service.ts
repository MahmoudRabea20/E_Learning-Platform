import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInstructor } from '../models/iinstructor';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
    constructor(private _httpClient: HttpClient){}

  getAllInstructors(): Observable<IInstructor[]>{
    return this._httpClient.get<IInstructor[]>(`${environment.baseUrl}/instructor`);
  }

  // getSubjectById(id: number): Observable<IISubject> {
  //   return this._httpClient.get<IISubject>(`${environment.baseUrl}/subject/${id}`);
  // }

  // getSubjectByName(name: string): Observable<IISubject> {
  //   return this._httpClient.get<IISubject>(`${environment.baseUrl}/subject/${name}`);
  // }

  addInstructor(_instructor: IInstructor): Observable<IInstructor> {

    return this._httpClient.post<IInstructor> (`${environment.baseUrl}/instructor/addingInstructor`, _instructor,{
      headers: new HttpHeaders({
        'content-type': "application/json"
      })
    });
  }

  updateInstructor(id: number, _instructor: IInstructor): Observable<string> {
    return this._httpClient.put<string>(`${environment.baseUrl}/instructor/${id}`, _instructor,{
      headers: new HttpHeaders({
        'content-type': "application/json"
      })
    });
  }

  deleteInstructor(id: number): Observable<string> {
    return this._httpClient.delete<string>(`${environment.baseUrl}/instructor/${id}`);
  }
}
