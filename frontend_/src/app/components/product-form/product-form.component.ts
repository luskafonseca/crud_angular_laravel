import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  showConfirmation = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      value: ['', Validators.required],
      expiration_date: ['', Validators.required],
      quantity: ['', Validators.required],
      perishable: [false]
    });
  }

  submitForm() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.productService.createProduct(productData).subscribe(
        () => {
          console.log('Produto criado com sucesso.');
          this.showConfirmation = true;
        },
        error => {
          console.log('Erro ao criar produto: ', error);
        
        }
        
      );
      this.router.navigate(['/']);
    }
  }
}
