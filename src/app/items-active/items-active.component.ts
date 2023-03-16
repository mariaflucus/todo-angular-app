import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items-active',
  templateUrl: './items-active.component.html',
  styleUrls: ['./items-active.component.css']
})
export class ItemsActiveComponent implements OnInit{

  completedItem: boolean;
  constructor(public itemsService: ItemsService){
    this.completedItem = false;
  }
  ngOnInit(): void {
    
  }
}
