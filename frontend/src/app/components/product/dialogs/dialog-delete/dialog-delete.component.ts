import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../product.service';

interface DialogData {
  id: string
  name: string
}

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.productService.delete(this.data.id).subscribe(() => {
      this.productService.showMessage('Produto excluído')
    })
  }

}
