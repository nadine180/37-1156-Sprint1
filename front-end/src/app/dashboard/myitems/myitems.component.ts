import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MyitemsService } from './myitems.service'
@Component({
  selector: 'app-electronics',
  templateUrl: './myitems.component.html',
  styleUrls: ['./myitems.component.scss'],
  providers: [MyitemsService]
})
export class MyItemsComponent implements OnInit {

  source : LocalDataSource;

  settings = {
    columns: {
     
      name: {
        title: 'Name',
        filter:false
      },
      price: {
        title: 'Price',
        filter:false
      },
      createdAt: {
        title: 'CreatedAt',
        filter:false
      },
      UpdatedAt: {
        title: 'UpdatedAt',
        filter:false
      },
      sellername: {
        title: 'Seller Name',
        filter:false
      }


    }
  };

  data = [];

  constructor(private myitemsService:MyitemsService) { }

  
  onCreateCall(event){
    event.confirm.resolve(event.newData);
    this.myitemsService.createProduct(event.newData.name, event.newData.price).subscribe();
}
onEditCall(event){
    event.confirm.resolve(event.newData);
   // this.myitemsService.updateProduct(event.newData.name, event.newData.price).subscribe();
}
ngOnInit() {
//  this.electronicsService.getProducts().subscribe(
//    (res: Response) => {
//      console.log(res.data)
//      this.data = res.data;
//    }
//  );
}

  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false); 
    
  }


}
