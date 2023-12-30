import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

 // Biến để lưu trạng thái hiển thị của các dòng của table 1
 showRow1_1 = false;
 showRow1_2 = false;

 // Hàm để thay đổi trạng thái hiển thị của một dòng của table 1
 toggleRow1(index: number) {
   if (index === 1) {
     this.showRow1_1 = !this.showRow1_1;
   } else if (index === 2) {
     this.showRow1_2 = !this.showRow1_2;
   }
 }

 // Biến để lưu trạng thái hiển thị của các dòng của table 2
 showRow2_1 = false;
 showRow2_2 = false;
 showRow2_3 = false;

 // Hàm để thay đổi trạng thái hiển thị của một dòng của table 2
 toggleRow2(index: number) {
   if (index === 1) {
     this.showRow2_1 = !this.showRow2_1;
   } else if (index === 2) {
     this.showRow2_2 = !this.showRow2_2;
   } else if (index === 3) {
     this.showRow2_3 = !this.showRow2_3;
   }
 
 }

 // Biến để lưu trạng thái hiển thị của các dòng của table 3
 showRow3_1 = false;
 showRow3_2 = false;
 showRow3_3 = false;
 showRow3_4 = false;

 // Hàm để thay đổi trạng thái hiển thị của một dòng của table 3
 toggleRow3(index: number) {
   if (index === 1) {
     this.showRow3_1 = !this.showRow3_1;
   } else if (index === 2) {
     this.showRow3_2 = !this.showRow3_2;
   } else if (index === 3) {
     this.showRow3_3 = !this.showRow3_3;
   } else if (index === 4) {
    this.showRow3_4 = !this.showRow3_4;
  }
 
 }

  // Biến để lưu trạng thái hiển thị của các dòng của table 4
  showRow4_1 = false;
  showRow4_2 = false;
 
  // Hàm để thay đổi trạng thái hiển thị của một dòng của table 4
  toggleRow4(index: number) {
    if (index === 1) {
      this.showRow4_1 = !this.showRow4_1;
    } else if (index === 2) {
      this.showRow4_2 = !this.showRow4_2;
    }
  }


   // Biến để lưu trạng thái hiển thị của các dòng của table 5
 showRow5_1 = false;
 showRow5_2 = false;
 showRow5_3 = false;
 showRow5_4 = false;

 // Hàm để thay đổi trạng thái hiển thị của một dòng của table 5
 toggleRow5(index: number) {
   if (index === 1) {
     this.showRow5_1 = !this.showRow5_1;
   } else if (index === 2) {
     this.showRow5_2 = !this.showRow5_2;
   } else if (index === 3) {
     this.showRow5_3 = !this.showRow5_3;
   } else if (index === 4) {
    this.showRow5_4 = !this.showRow5_4;
  }
 
 }

 // Biến để lưu trạng thái hiển thị của các dòng của table 6
showRow6_1 = false;
showRow6_2 = false;


// Hàm để thay đổi trạng thái hiển thị của một dòng của table 6
toggleRow6(index: number) {
  if (index === 1) {
    this.showRow6_1 = !this.showRow6_1;
  } else if (index === 2) {
    this.showRow6_2 = !this.showRow6_2;
  }
}
  }
  