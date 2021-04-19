import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:Product[];
  constructor(private router: Router, private ProductService: ProductService) { }

  addProductForm: boolean;
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.ProductService.getProducts()
    .subscribe(data =>{
      this.products = data;
      console.log(data);
    });
  }

  removeProducts(Product:Product){
    if(confirm("are you sure to delete "+Product.titel)){
      this.ProductService.deleteProduct(Product.id).subscribe(data =>{
        alert(`${Product.titel}is deleted succsusfuly`)
        this.getProducts
      })
    }
  }


  showAddProductForm(){
    this.addProductForm = true;
  }
  cancelNewProductForm(){
    this.addProductForm = false;
  }

  form = new FormGroup({
    productName: new FormControl('',Validators.required),
    productDescription: new FormControl('',[
      Validators.required,
      Validators.minLength(30),
      Validators.maxLength(250)
    ]),
    productPrice: new FormControl('', [
      Validators.required,
      Validators.min(0.),
      Validators.max(100000)
    ]),
    categoryId: new FormControl('',[
      Validators.required
    ])
  });
  onSubmit(){
    alert(JSON.stringify(this.form.value));
  }

}
