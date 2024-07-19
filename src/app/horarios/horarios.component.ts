import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { ClockLiveComponent } from '../clock-live/clock-live.component';
import { HorariosService } from '../Services/horarios.service';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule, ClockLiveComponent], // Asegúrate de que estos son los componentes/directivas/pipes necesarios
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  horarios: any[] = [];
  otamendiSale: string = '';
  miramarSale: string = '';

  constructor(private horariosService: HorariosService) { }

  ngOnInit(): void {
    this.horariosService.getHorarios().subscribe(data => {
      this.horarios = data;
      this.setNextDepartures();
    });
  }

  setNextDepartures(): void {
    const now = new Date();
    let nextOtamendi = '';
    let nextMiramar = '';

    for (const horario of this.horarios) {
      const otamendiDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...horario.otamendi_sale.split(':').map(Number));
      const miramarDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...horario.miramar_sale.split(':').map(Number));

      if (otamendiDate > now && (!nextOtamendi || otamendiDate < new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...nextOtamendi.split(':').map(Number)))) {
        nextOtamendi = horario.otamendi_sale;
      }
      if (miramarDate > now && (!nextMiramar || miramarDate < new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...nextMiramar.split(':').map(Number)))) {
        nextMiramar = horario.miramar_sale;
      }
    }

    this.otamendiSale = nextOtamendi;
    this.miramarSale = nextMiramar;
  }
}


