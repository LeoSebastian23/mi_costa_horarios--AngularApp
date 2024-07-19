import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ClockLiveComponent } from './clock-live/clock-live.component';
import { HorariosComponent } from './horarios/horarios.component';
import { HorariosService } from './Services/horarios.service';

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
      // Asumiendo que los datos vienen en un formato que contiene los horarios de Otamendi y Miramar
      this.otamendiTimes = data.map(h => h.otamendi_sale);
      this.miramarTimes = data.map(h => h.miramar_sale);
    });
  }
}



