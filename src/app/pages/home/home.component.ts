import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart,  } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild("meuCanvas", { static: true })
  elemento!: ElementRef;
  ngOnInit(): void {

    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels : [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [
          {
            data: [25, 26, 35, 46, 63, 48],
            borderColor: '#43DE97',
          },
          {
            data: [56, 86, 25, 22, 41, 63],
            borderColor: '#EDA654',
          },
          {
            data: [24, 22, 43, 78, 39, 36],
            borderColor: '#6ACBD4',
          }
        ]
      },
      options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
    });
  }

}
