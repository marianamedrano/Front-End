import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Temas';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTemas(): Observable<Temas[]>{
    return this.http.get<Temas[]>('https://wehug.herokuapp.com/temas', this.token)
  }
  postTema(temas: Temas): Observable<Temas>{
    return this.http.post<Temas>('https://wehug.herokuapp.com/temas', temas, this.token)
  }
  
}