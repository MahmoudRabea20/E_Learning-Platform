import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from '../models/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient: HttpClient){}

  // getAllSubject(): Observable<IISubject[]>{
  //   return this._httpClient.get<IISubject[]>(`${environment.baseUrl}/subject`);
  // }

  // getSubjectById(id: number): Observable<IISubject> {
  //   return this._httpClient.get<IISubject>(`${environment.baseUrl}/subject/${id}`);
  // }

  // getSubjectByName(name: string): Observable<IISubject> {
  //   return this._httpClient.get<IISubject>(`${environment.baseUrl}/subject/${name}`);
  // }



  // updateSubject(id: number, _subject: IISubject): Observable<string> {
  //   return this._httpClient.put<string>(`${environment.baseUrl}/subject/${id}`, JSON.stringify(_subject),{
  //     headers: new HttpHeaders({
  //       'content-type': "application/json"
  //     })
  //   });
  // }

  // deleteSubject(id: number): Observable<string> {
  //   return this._httpClient.delete<string>(`${environment.baseUrl}/subject/${id}`);
  // }

    addStudent(_student: IStudent): Observable<string> {

    return this._httpClient.post<string> (`${environment.baseUrl}/student/studentRegister`, _student,{
      headers: new HttpHeaders({
        'content-type': "application/json"
      })
    });
  }
}




