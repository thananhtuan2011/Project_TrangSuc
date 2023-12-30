import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-finish',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './finish.component.html',
  styleUrl: './finish.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class FinishComponent {
  constructor( private router: Router) {}
}
