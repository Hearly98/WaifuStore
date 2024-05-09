import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';
import { ReportsService } from '../../../../shared/services/reports.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  clientsCount: number =0;
  workersCount: number =0;

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    this.reportsService.getDashboardDataClient().subscribe(count => {
      this.clientsCount = count;
    });

    this.reportsService.getDashboardDataWorker().subscribe(count => {
      this.workersCount = count;
    });
  }
}
