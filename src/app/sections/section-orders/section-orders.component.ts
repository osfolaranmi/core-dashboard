import { Component, OnInit } from '@angular/core';
import { Order } from './../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer: 
      {id:1, name:'Simeon', state:'Lagos', email:'osfolaranmi@mail.com'}, 
      total:230, placed: '2019, 08, 28', 
      fulfilled: '2019, 08, 29', status: 'Completed'},
     {id: 2, customer: 
      {id:1, name:'Simeon', state:'Lagos', email:'osfolaranmi@mail.com'}, 
      total:230, placed: '2019, 08, 28', 
      fulfilled: '2019, 08, 28', status: 'Completed'},
    {id: 3, customer: 
       {id:1, name:'Simeon', state:'Lagos', email:'osfolaranmi@mail.com'}, 
       total:230, placed: '2019, 08, 28', 
       fulfilled: '2019, 08, 28', status: 'Completed'},
    {id: 4, customer: 
       {id:1, name:'Simeon', state:'Lagos', email:'osfolaranmi@mail.com'}, 
       total:230, placed: '2019, 08, 28', 
       fulfilled: '2019, 08, 28', status: 'Completed'},      
  ]; 
  ngOnInit() {
  }
//new Date(2019, 08, 29)
}
