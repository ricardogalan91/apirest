import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  root_url='https://62a7cc3c97b6156bff931bb0.mockapi.io/api/v1/users/'
  userDetailed:User;
  configurationOptions={
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  } 
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if(error){
      console.warn(`Error de backend tipo ${error.status} con el mensaje de ${error.message}`)
    }
    return throwError('Error de comunicacion http');
  }

  getUsersList(): Observable<User[]>{
    return this.http.get<User[]>(this.root_url)
    .pipe(catchError(this.handleError));
  }

  getSingleUser(id:number): Observable<User>{
    return this.http.get<User>(this.root_url + id)
  }

  createUser(user:User):Observable<User>{
    return this.http.post<User>(this.root_url, user, this.configurationOptions);
  }

  updateUser(user: User):Observable<User>{
    return this.http.put<User>(this.root_url + user.id, user)
  }

  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>(this.root_url + id);
  }
}
