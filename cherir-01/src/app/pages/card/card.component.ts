import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  // styleUrl: './card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardComponent {}
