
import { CategoriesService } from './../../services/category/categories.service';

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {Categories} from 'src/app/models/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Categories;
  pageNumber: number=1;
  pageEvent: PageEvent;


  constructor(private categoriesService : CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getCategories(this.pageNumber,2)
    .subscribe( data =>{
      this.categories=data;
    })
  }
  onPaginateChange(event: PageEvent){
    let page=event.pageIndex;
    let size=event.pageSize;
    page=page +1;
    this.categoriesService.getCategories(page, size)
    .subscribe( data =>{
      this.categories=data;
    })


  }

}

