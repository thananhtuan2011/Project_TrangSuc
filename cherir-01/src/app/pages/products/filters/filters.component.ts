import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css','./../../../../assets/css/style1.css']
})
export class FiltersComponent implements OnInit{
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] | undefined;
  categoriesSubscription: Subscription | undefined;
  selectedCategory: string | undefined;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((response: Array<string>) => {
        this.categories = response;
      });
  }

  onShowCategory(category: string): void {
    if (this.selectedCategory === category) {
      // Toggle between showing all products and specific category
      this.selectedCategory = undefined;
    } else {
      this.selectedCategory = category;
    }

    this.showCategory.emit(this.selectedCategory);
  }
  isSelectedCategory(category: string): boolean {
    return this.selectedCategory === category;
  }
  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
