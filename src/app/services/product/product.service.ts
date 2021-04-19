import {Injectable} from '@angular/core';
import {Product} from 'src/app/models/product';

import {HttpClient , HttpHeaders} from '@angular/common/http'; 

const httpOptions = {
    headers: new HttpHeaders({'content-type':'application/json'})
};

@Injectable({
    providedIn: 'root'
})

@Injectable()
    export class ProductService{


constructor(private http:HttpClient){}

private url ='https://localhost:44326';
products: Product[]=[]
public getProducts(){
    return this.http.get<Product[]>(this.url+"/api/products/all")
}

public deleteProduct(id: string){
    return this.http.delete<Product[]>(this.url+`/api/products/delete/`+id)
}


}