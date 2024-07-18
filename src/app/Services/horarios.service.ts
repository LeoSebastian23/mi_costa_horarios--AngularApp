import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private apiUrl = '/api/dias_habiles.json'; // Ajusta la URL según sea necesario

  constructor(private http: HttpClient) { }
  
  getHorarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
