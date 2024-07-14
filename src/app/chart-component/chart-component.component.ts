import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { CustomersTransactionsServiceService } from '../services/customers-transactions-service.service';


@Component({
  selector: 'app-chart-component',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './chart-component.component.html',
  styleUrl: './chart-component.component.css',
})
export class ChartComponentComponent implements OnInit {
  constructor(
    private _CustomersTransactionsServiceService: CustomersTransactionsServiceService
  ) {}

  //lineChartData = [
  //  {
  //    name: 'value',
  //    series: [
  //      { value: 1000, name: '2022-01-01' },
  //      { value: 2000, name: '2022-01-02' },
  //    ],
  //  },
  //];

  lineChartData: any[] = [];

  ngOnInit(): void {
    this._CustomersTransactionsServiceService.CustomerNameHolder.subscribe(
      (value) => {
        console.log(value);
        this.lineChartData = value;
      }
    );
  }

  colorScheme = {
    name: 'yScheme',
    selectable: true,
    domain: ['#000'],
    group: ScaleType.Ordinal,
  };
  legend: boolean = true;
  view: number[] = [700, 300];
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Transactions';
  timeline: boolean = true;
}

///export const lineChartData = [
///  {
///    name: 'Ahmed Ali',
///    series: [
///      { value: 1000, name: '2022-01-01' },
///      { value: 2000, name: '2022-01-02' },
///    ],
///  },
///];
