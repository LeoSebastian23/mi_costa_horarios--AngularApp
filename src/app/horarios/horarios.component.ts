import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorariosService } from '../Services/horarios.service';
import { Horario } from '../horarios/horarios';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  horarios: Horario[] = [];
  otamendiSale: string = '';
  miramarSale: string = '';

  constructor(private horariosService: HorariosService) { }

  ngOnInit(): void {
    this.horariosService.getHorarios().subscribe(data => {
      this.horarios = data.horarios; // Actualiza la asignación según el formato del JSON
      this.setNextDepartures();
    });
  }

  setNextDepartures(): void {
    const now = new Date();
    let nextOtamendi = '';
    let nextMiramar = '';

    for (const horario of this.horarios) {
      const otamendiDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...horario.horaSalida.split(':').map(Number));
      const miramarDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...horario.horaSalida.split(':').map(Number));

      if (otamendiDate > now && (!nextOtamendi || otamendiDate < new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...nextOtamendi.split(':').map(Number)))) {
        nextOtamendi = horario.horaSalida;
      }
      if (miramarDate > now && (!nextMiramar || miramarDate < new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...nextMiramar.split(':').map(Number)))) {
        nextMiramar = horario.horaSalida;
      }
    }

    this.otamendiSale = nextOtamendi;
    this.miramarSale = nextMiramar;
  }
}



