import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prods;
  index="Choose here";
  pstock;
  selectedStock;
  order=[];
  grandTotal=0;
  orderId:any;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getProducts();
    this.genId();
  }
  genId()
  {
    this.orderId=Math.floor((Math.random() * 5000) + 1);
  }
  getProducts(){
    this.apiService.getProducts().subscribe(data => {
      this.prods=data;
      console.log(this.prods);
    });
  }
  showStock(data)
  {
    this.pstock="Stock  : "+this.prods[this.index].stock;
  }
  addToCart()
  {
   console.log(this.prods[this.index].Name);
   console.log(this.prods[this.index].sellingPrice);
   console.log(this.selectedStock);
   let totalPr=this.selectedStock*this.prods[this.index].sellingPrice;
    let temp={
      name:this.prods[this.index].Name,
      price:this.prods[this.index].sellingPrice,
      qty:0,
      total:0,
      gdTotal:0,
      id:this.orderId
    };
    temp.qty=this.selectedStock;
    console.log(this.selectedStock+"asdf");
    temp.total=totalPr
    this.order.push(temp);
    console.log(this.order);
    this.gTotal();
    
    this.index="Choose here";
    this.selectedStock="";

  } 
  enterPressed(data)
  {
    console.log(data);
    if(data.keyCode==13)
    {
      console.log("calling")
      this.addToCart();

    }
  }
  gTotal()
  {
    this.grandTotal=0;
    this.order.map(ord => {this.grandTotal+=ord.total});
  }
  finalize()
  {
    // debugger;
    console.log("Finalize is called");
    let orders=this.order.map(obj => {
        obj.gTotal=this.grandTotal;
        console.log(this.grandTotal+"This is the grand Total "+ obj.gdTotal);
        obj.gdTotal=this.grandTotal;
        console.log("after"+obj.gdTotal);
        return obj;
      });
      
    // console.log(orders);
      
    this.apiService.addSale(orders).subscribe(data => {
      console.log("Add Sale Done");
      this.index="Choose here";
      this.selectedStock="";
      this.order=[];
      this.pstock="";
      this.genId();
      this.grandTotal=0;
      window.alert("Order Completed Successfully");
   
   
    });
  }
}
