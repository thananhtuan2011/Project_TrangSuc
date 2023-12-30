import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import{ MatMenuModule} from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    CommonModule,
  ],
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css','./../../../../assets/css/style1.css']
})
export class ProductsHeaderComponent implements  OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  itemsShowCount = 8;
  sort = 'desc';

  constructor(){

  }

  ngOnInit():void{}

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

  onItemsUpdated(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const count = parseInt(target.value, 10);
    this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onSortUpdated(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newSort = target.value;
    console.log('Sort Updated:', newSort);
    this.sortChange.emit(newSort);
    this.sort = newSort;
  }

}
