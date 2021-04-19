import { Injectable } from '@angular/core';
import{ Observable } from 'rxjs';
import{Categories}from'src/app/models/categories';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient){}
  private url = 'https://localhost:44345';
  public getCategories(pageNumber : number , pageSize : number): Observable<Categories>{
    return this.http.get<Categories>(this.url+'api/category/all/'+ pageNumber + '/' + pageSize);
  }
}