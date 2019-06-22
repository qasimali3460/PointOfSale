import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { parseWebDriverCommand } from 'blocking-proxy/built/lib/webdriver_commands';

interface users{
  name;
  pwd;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  login=false;
  url="http://localhost:3000"
  constructor(private http:HttpClient) { }
  addProduct(product)
  {
   return this.http.post(this.url+"/products",product);
  }
  addSale(data)
  {
    // console.log("Sending Data"+JSON.stringify(data.length));
    return this.http.post(this.url+"/sales",data);
  }
  getSale()
  { 
    return this.http.get(this.url+"/sales");
  }
  getProducts()
  { 
    return this.http.get(this.url+"/products");
  }
  dltProduct(id)
  {
    console.log("Deleting product with id "+id);
    return this.http.delete(this.url+"/products/"+id);
  }
  getCategory()
  { 
    return this.http.get(this.url+"/category");
  }
  addCat(id,name)
  {
    var cat={
      "id":id,
      "name":name
    };
    return this.http.post(this.url+"/category",cat);
  }
  deleteCat(id)
  {
  return this.http.delete(this.url+"/category/"+id);
  }
  getSupplier()
  { 
    return this.http.get(this.url+"/suppliers");
  }
  addSup(id,name,address)
  {
    var cat={
      "id":id,
      "name":name,
      "address":address
    };
    return this.http.post(this.url+"/suppliers",cat);
  }
  deleteSup(id)
  {
  return this.http.delete(this.url+"/suppliers/"+id);
  }
  getUser()
  {
    return this.http.get<users>(this.url+"/user");
  }
  setLogIn(data)
  {
    this.login=data;
  }
  getLogin()
  {
    return this.login;
  }
}
