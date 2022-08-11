import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 20;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 9.95,
      starRating: 3.2,
      imageUrl: 'logo_xrkp85.jpg',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'saw_vvcnyl.png',
    },
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor() {}

  ngOnInit(): void {}
}
