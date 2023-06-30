import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.getProduct(productId);
  }

  getProduct(productId: number) {
    this.productService.getProduct(productId).subscribe(
      product => {
        this.product = product;
      },
      error => {
        console.log('Erro ao carregar detalhes do produto: ', error);
      }
    );
  }
}
