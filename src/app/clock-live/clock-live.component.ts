import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-live',
  standalone: true,
  templateUrl: './clock-live.component.html',
  styleUrls: ['./clock-live.component.css']
})
export class clockLiveComponent implements OnInit {
  currentTime: string; // Variable para almacenar la hora actual
  targetTime: string = '14:30'; // Hora objetivo en formato HH:MM
  remainingTime: string; // Variable para almacenar el tiempo restante hasta la hora objetivo

  constructor() {
    // Inicializa la hora actual y el tiempo restante cuando se crea la instancia del componente
    this.currentTime = new Date().toLocaleTimeString();
    this.remainingTime = this.calculateRemainingTime();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
      this.remainingTime = this.calculateRemainingTime();
    }, 1000);
  }

  calculateRemainingTime(): string {    
    const now = new Date(); // Obtiene la fecha y hora actual
    const [targetHours, targetMinutes] = this.targetTime.split(':').map(Number); // Divide la hora objetivo en horas y minutos
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHours, targetMinutes); // Crea un objeto de fecha para la hora objetivo
    
    // Si la hora objetivo ya pasó, añade un día a la fecha objetivo
    if (targetDate < now) {
      targetDate.setDate(targetDate.getDate() + 1);
    }

    const diff = targetDate.getTime() - now.getTime(); // Calcula la diferencia en milisegundos entre la hora objetivo y la hora actual

    // Convierte la diferencia de tiempo en horas, minutos y segundos
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Devuelve el tiempo restante en formato HH:mm:ss
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(num: number): string {
    // Añade un cero a la izquierda si el número es menor que 10, para asegurar un formato de dos dígitos
    return num < 10 ? '0' + num : num.toString();
  }
}


