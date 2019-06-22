import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category;
  constructor(private apiService:ApiService) { }
  newId;
  newName;
  ngOnInit() {
    this.getCatgory();
  }
  getCatgory()
  {
    this.apiService.getCategory().subscribe(data => {
    console.log(data);
      this.category=data;
    });
  }
  addCategory()
  {
    this.apiService.addCat(this.newId,this.newName).subscribe(data =>{
      // console.log(data);
      this.getCatgory();
      
    this.newId="";
    this.newName="";
    });
       
  }
  dltCat(id)
  {
    this.apiService.deleteCat(id).subscribe(data => {
      console.log(data);
      this.getCatgory();
    })
  }

}
