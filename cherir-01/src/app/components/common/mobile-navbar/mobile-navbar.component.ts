import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MobileNavbarComponent {}
