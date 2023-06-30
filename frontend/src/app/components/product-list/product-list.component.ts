import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        console.log('Erro ao carregar produtos: ', error);
      }
    );
  }

  editProduct(productId?: number) {
    if (productId) {
      console.log('Editar produto com ID:', productId);
    }
  }

  deleteProduct(productId?: number) {
    if (productId && confirm('Tem certeza que deseja excluir este produto?')) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          console.log('Produto excluído com sucesso.');
          this.getProducts();
        },
        error => {
          console.log('Erro ao excluir produto: ', error);
        }
      );
    }
  }
}
