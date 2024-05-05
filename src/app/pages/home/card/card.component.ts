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
    console.log("new db  = ", this.products);
  }

  // modifyArray() {
  //   this.products = this.products.map(m => {
  //     return {
  //       ...m,
  //       ...{

  //         anofield:50,
  //       }
  //     }
  //   })
  // }

  // modifyArray() {
  //   const arrayOfValues = [50, 60, 70, 80];

  //   this.products = this.products.map((product, index) => ({
  //     ...{
  //       oPrice: arrayOfValues[index],
  //     },
  //     ...product,
  //   }));
  // }


  modifyArray() {
    // const arrayOfValues = [500, 60, 70, 800];
    const arrayOfValues = ['/assets/images/home/IMG_20220530_105803_204_edited_edited-1.jpeg','/assets/images/home/IMG_20220530_105803_204_edited_edited-1.jpeg','/assets/images/home/IMG_20220530_105803_204_edited_edited-1.jpeg'];

    this.products.forEach((product, index) => {
      product.image = arrayOfValues[index]?? product.image;
    });

    console.log("this.products",this.products)
  }

}
