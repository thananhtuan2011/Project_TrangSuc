import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-payment-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css',"./../../../assets/css/style.css"],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PaymentDetailComponent {
  cartData: any;
  cusData: any;

  constructor(private dataService: DataService) {
    this.cartData = this.dataService.getCartData();
    console.log(this.cartData);
    this.cusData = this.dataService.getCustomerData();
    console.log(this.cusData)
  }

  showInfoModal(): void {

    const modal = document.getElementById('infoModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

}


