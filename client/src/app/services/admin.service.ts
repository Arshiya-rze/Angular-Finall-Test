import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { admin } from '../models/admin.model';
import { registerAdmin } from '../models/registerAdmin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private currentAdminSource = new BehaviorSubject<admin | null>(null);
  currentAdmin$ = this.currentAdminSource.asObservable();

  constructor(private http: HttpClient) { }

  register(adminRegisterInput: registerAdmin): Observable<admin | null> {

    return this.http.post<admin>('http://localhost:5000/api/admin/register', adminRegisterInput)
      .pipe(
        map(admin => {
          if (admin) {
            this.currentAdminSource.next(admin);

            return admin;
          }

          return null;
        })
      );
  }
}
