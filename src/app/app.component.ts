import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ClockLiveComponent } from './clock-live/clock-live.component';
import { HorariosComponent } from './horarios/horarios.component';
import { HorariosService } from './Services/horarios.service';
import { Horario } from './horarios/horarios'; // Asegúrate de tener la interfaz Horario

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ClockLiveComponent, HorariosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  otamendiTimes: string[] = [];
  miramarTimes: string[] = [];

  constructor(private horariosService: HorariosService) {}

  ngOnInit(): void {
    this.horariosService.getHorarios().subscribe(data => {
      // Acceder a la propiedad 'horarios' del objeto
      const horarios: Horario[] = data.horarios;

      // Mapear los datos según la nueva estructura
      this.otamendiTimes = horarios
        .filter(h => h.origen === 'Otamendi')
        .map(h => h.horaSalida);

      this.miramarTimes = horarios
        .filter(h => h.origen === 'Miramar')
        .map(h => h.horaSalida);
    });
  }
}




