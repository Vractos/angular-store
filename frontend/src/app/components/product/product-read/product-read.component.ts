import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Array<IProduct>

  constructor(private protectService: ProductService) { }

  ngOnInit(): void {
    this.protectService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
