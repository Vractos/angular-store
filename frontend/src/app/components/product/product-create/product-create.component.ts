import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from './../product.service'
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: IProduct = {
    name: '',
    price: null,  // FIX: Esta salvando como string no DB, tem que salvar como number
    stock: null
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
