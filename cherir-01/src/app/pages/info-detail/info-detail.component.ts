import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-info-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './info-detail.component.html',
  styleUrl: './info-detail.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class InfoDetailComponent {
  customerData: any;

  constructor(private dataService: DataService, private router: Router) {}

  captureCustomerData(): void {
    this.dataService.setCustomerData(this.customerData);
    alert(this.customerData)
  }

  goToPaymentDetail(): void {
    this.captureCustomerData();
    this.router.navigate(['/payment-detail']);
  }
  
}
