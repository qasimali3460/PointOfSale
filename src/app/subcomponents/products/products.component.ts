import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  category;
  suppliers;
  cat="Choose here";
  product={
      "id": "",
      "Name": "",
      "photo": "",
      "orginialPrice": "",
      "sellingPrice": "",
      "supplierName": "Choose here",
      "categoryName": "Choose here",
      "stock": ""
    
  }
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategory();
    this.getSuppliers();
  }
  dltProd(data)
  {
    console.log(data);
    this.apiService.dltProduct(data).subscribe(data => {
      this.getProducts();
    })
  }
  getProducts()
  {
    this.apiService.getProducts().subscribe(data => {
      this.products=data;
      this.product={
        "id": "",
        "Name": "",
        "photo": "",
        "orginialPrice": "",
        "sellingPrice": "",
        "supplierName": "Choose here",
        "categoryName": "Choose here",
        "stock": ""
      
    }
    });
    
  }
  addProduct()
  {
    this.apiService.addProduct(this.product).subscribe(data => {
      this.getProducts();
      console.log(this.products);
    });
  }
  getCategory()
  {
    this.apiService.getCategory().subscribe(data => {
      this.category=data;
    });
  }
  getSuppliers()
  {
    this.apiService.getSupplier().subscribe(data => {
      this.suppliers=data;
    });
  }

}
