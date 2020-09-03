import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialogs/dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Array<IProduct>
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  deleteProduct(id: string, name: string): void {
    this.dialog.open(DialogDeleteComponent, {
      data: { id, name }
    })
      .afterClosed().subscribe(() => {
        this.productService.read().subscribe(products => {
          this.products = products
        })
      })
  }

}