import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CollectionComponent {}
