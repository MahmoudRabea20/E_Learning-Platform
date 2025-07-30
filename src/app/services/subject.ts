import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IISubject } from '../models/isubject';
// import { ISubject } from '../models/isubject';
// import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class Subject {
  constructor(private httpclient:HttpClient){

  }
  addSubject(subject:IISubject):Observable<IISubject>
  {
    return this.httpclient.post<IISubject>(`${"environment.baseURL"}/Subject`,subject)

  }
   getSubjects():Observable<IISubject[]> {
      return this.httpclient.get<IISubject[]>(`${"environment.baseURL"}/Instructor`);
    }
    getSubjectById(id: number): Observable<IISubject> {
      return this.httpclient.get<IISubject>(`${"environment.baseURL"}/Instructor/${id}`);
    }
    updateSubject(id: number, updatedSubject: IISubject): Observable<IISubject> {
      return this.httpclient.put<IISubject>(`${"environment.baseURL"}/Instructor/${id}`, updatedSubject);
    }
    deleteSubject(id: number): Observable<IISubject> {
      return this.httpclient.delete<IISubject>(`${"environment.baseURL"}/Instructor/${id}`);
    }
}
