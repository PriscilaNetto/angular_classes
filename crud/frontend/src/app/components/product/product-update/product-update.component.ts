import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    }); //recebo o id a partir da navegação, vai trazer o produto com os dados preenchidos para alteração
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() =>{
    this.productService.showMessage('Produto atualizado com sucesso!')
    this.router.navigate(["/products"]); //requisição do tipo put para o backend 
    });
    

  }
  cancel():void {
    this.router.navigate(['/products'])
  }

}
