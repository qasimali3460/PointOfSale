import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  sale;
  constructor(private apiService:ApiService) { }
  ngOnInit() {
    this.getSale();
  }
  getSale()
  {
    this.apiService.getSale().subscribe(data => {
    console.log(data);
      this.sale=data;
    });
  }
}
