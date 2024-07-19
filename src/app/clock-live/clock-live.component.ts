import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-live',
  standalone: true,
  templateUrl: './clock-live.component.html',
  styleUrls: ['./clock-live.component.css']
})
export class ClockLiveComponent implements OnInit {
  @Input() otamendiTimes: string[] = [];
  @Input() miramarTimes: string[] = [];
  
  otamendiRemainingTime: string = '';
  miramarRemainingTime: string = '';
  
  private intervalId: any;

  ngOnInit(): void {
    this.calculateRemainingTimes();
    this.intervalId = setInterval(() => this.calculateRemainingTimes(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private calculateRemainingTimes(): void {
    const now = new Date();
    this.otamendiRemainingTime = this.getNextRemainingTime(this.otamendiTimes, now);
    this.miramarRemainingTime = this.getNextRemainingTime(this.miramarTimes, now);
  }

  private getNextRemainingTime(times: string[], now: Date): string {
    let nextTime = times[0];
    let minDiff = Infinity;

    times.forEach(time => {
      const [hours, minutes] = time.split(':').map(Number);
      const timeDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
      
      if (timeDate < now) {
        timeDate.setDate(timeDate.getDate() + 1);
      }
      
      const diff = timeDate.getTime() - now.getTime();
      if (diff < minDiff) {
        minDiff = diff;
        nextTime = timeDate.toTimeString().split(' ')[0].substring(0, 5); // format HH:MM
      }
    });

    const hours = Math.floor(minDiff / (1000 * 60 * 60));
    const minutes = Math.floor((minDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((minDiff % (1000 * 60)) / 1000);

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}




