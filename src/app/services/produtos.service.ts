import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = 'http://localhost:3000/produtos';

  constructor() { }

  buscarTodos(){
    
  }
}
