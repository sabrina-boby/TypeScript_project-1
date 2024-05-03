import { Component } from '@angular/core';
import { PRODUCTS_DB } from 'src/app/core/db/products.db';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  products: any[] = PRODUCTS_DB;

  ngOnInit() {
    console.log(this.products);
    this.modifyArray();
    console.log(this.products);
  }

  modifyArray() {
    this.products = this.products.map(m => {
      return {
        ...m,
        ...{
          
          anofield:50,
        }
      }
    })
  }

  // modifyArray() {
  //   const arrayOfValues = [50, 60, 70, 80]; 
  
  //   this.products = this.products.map((product, index) => ({
  //     ...product,
  //     oPrice: arrayOfValues[index], 
  //   }));
  // }


}
