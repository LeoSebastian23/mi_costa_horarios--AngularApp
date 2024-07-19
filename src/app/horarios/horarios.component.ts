import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorariosService } from '../services/horarios.service';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  horarios: any[] = [];

  constructor(private horariosService: HorariosService) { }

  ngOnInit(): void {
    this.horariosService.getHorarios().subscribe(data => {
      this.horarios = data;
    });
  }
}


