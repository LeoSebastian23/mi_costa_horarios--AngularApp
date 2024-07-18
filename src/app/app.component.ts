import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { clockLiveComponent } from './clock-live/clock-live.component';
import { HorariosService } from './Services/horarios.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, clockLiveComponent],  // Asegúrate de importar CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Cambiar a styleUrls
})
export class AppComponent implements OnInit {
  horarios: any[] = [];

  constructor(private horariosService: HorariosService) { }

  ngOnInit(): void {
    this.horariosService.getHorarios().subscribe(data => {
      this.horarios = data;
    });
  }
}