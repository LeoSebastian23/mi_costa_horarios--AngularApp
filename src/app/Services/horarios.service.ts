import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horario } from '../horarios/horarios';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private apiUrl = 'assets/horarios.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) { }

  getHorarios(): Observable<{ horarios: Horario[] }> {
    return this.http.get<{ horarios: Horario[] }>(this.apiUrl);
  }
}



