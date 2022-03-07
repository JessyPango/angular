import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() nomClient : string | undefined;
  nomSte: string = "ABC Entreprise";

  produits = [
    {id: '1', designation: 'Chaussures', prix: '30', qte: '3', description: 'chaussures pour hommes'},
    {id: '2', designation: 'Robes', prix: '20', qte: '2', description: 'chemises pour hommes'},
    {id: '3', designation: 'Veste', prix: '40', qte: '4', description: 'robes pour fillettes'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}