import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  createProduct(): void{
   
    //vai criar a mensagem e navegar para a tela inicial de novo produto
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto criado')
      this.router.navigate(['/products'])
    })
  }
  cancel(): void{
    this.router.navigate(['/products'])
    

  }

}
