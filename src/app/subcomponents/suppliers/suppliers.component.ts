import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  supplier;
  constructor(private apiService:ApiService) { }
  newId;
  newName;
  newAddress;
  ngOnInit() {
    this.getSupplier();
  }
  getSupplier()
  {
    this.apiService.getSupplier().subscribe(data => {
    console.log(data);
      this.supplier=data;
    });
  }
  addSupplier()
  {
    this.apiService.addSup(this.newId,this.newName,this.newAddress).subscribe(data =>{
      console.log(data);
      this.getSupplier();
      
    this.newId="";
    this.newName="";
    this.newAddress="";
    });
       
  }
  dltSup(id)
  {
    this.apiService.deleteSup(id).subscribe(data => {
      console.log(data);
      this.getSupplier();
    })
  }
}
