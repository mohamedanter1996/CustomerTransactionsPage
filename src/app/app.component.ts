import { ChartComponentComponent } from './chart-component/chart-component.component';
import { CustomersTransactionsMainComponent } from './customers-transactions-main/customers-transactions-main.component';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomersTransactionsMainComponent,
    ChartComponentComponent,
    HttpClientModule,
    NgxChartsModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CustomersTransactionsProject';
}
