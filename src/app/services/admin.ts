import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../models/iadmin';
// import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Admin {

  constructor(private httpclient: HttpClient) {
    // Initialization logic can go here if needed
  }
  addAdmin(adminData: IAdmin): Observable<IAdmin> {
    return this.httpclient.post<IAdmin>(`${"environment.baseURL"}/Admin`, adminData);
  }
  getAdmins(): Observable<IAdmin[]> {
    return this.httpclient.get<IAdmin[]>(`${"environment.baseURL"}/Admin`);
  }
  getAdminById(id: number): Observable<IAdmin> {
    return this.httpclient.get<IAdmin>(`${"environment.baseURL"}/Admin/${id}`);
  }
  updateAdmin(id: number, updatedAdmin: IAdmin): Observable<IAdmin> {
    return this.httpclient.put<IAdmin>(`${"environment.baseURL"}/Admin/${id}`, updatedAdmin);
  }
  deleteAdmin(id: number): Observable<IAdmin> {
    return this.httpclient.delete<IAdmin>(`${"environment.baseURL"}/Admin/${id}`);
  }
}
