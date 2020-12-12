import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = []
  private categoryService: CategoryService

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService
  }

  ngOnInit(): void {
    const observable = this.categoryService.getCatgories()
    observable.subscribe(response => {
      if (response['status'] == 'success') {
        this.categories = response['data']
      }
    })
  }

}
