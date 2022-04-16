import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-site',
  templateUrl: './meu-site.component.html',
  styleUrls: ['./meu-site.component.css']
})
export class MeuSiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valorAtual: string = '';
  valorSalvo = '';


  botaoClicado(){
  alert('Botão clicado!');
  }

  onkeyUp(evento:KeyboardEvent){
    this.valorAtual=(<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
this.valorSalvo = valor;
  }

  isMouseOver: boolean = false;

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade:20
  }

}
