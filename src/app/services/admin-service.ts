import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../models/iadmin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
      constructor(private _httpClient: HttpClient){}

  getAllAdmins(): Observable<IAdmin[]>{
    return this._httpClient.get<IAdmin[]>(`${environment.baseUrl}/admin`);
  }

  // getSubjectById(id: number): Observable<IISubject> {
  //   return this._httpClient.get<IISubject>(`${environment.baseUrl}/subject/${id}`);
  // }

  // getSubjectByName(name: string): Observable<IISubject> {
  //   return this._httpClient.get<IISubject>(`${environment.baseUrl}/subject/${name}`);
  // }

  addAdmin(_admin: IAdmin): Observable<IAdmin> {

    return this._httpClient.post<IAdmin> (`${environment.baseUrl}/admin/addingAdmin`, _admin,{
      headers: new HttpHeaders({
        'content-type': "application/json"
      })
    });
  }

  updateAdmin(id: number, _admin: IAdmin): Observable<string> {
    return this._httpClient.put<string>(`${environment.baseUrl}/admin/${id}`, _admin,{
      headers: new HttpHeaders({
        'content-type': "application/json"
      })
    });
  }

  deleteAdmin(id: number): Observable<string> {
    return this._httpClient.delete<string>(`${environment.baseUrl}/admin/${id}`);
  }
}
