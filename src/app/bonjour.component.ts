import {Component} from "@angular/core";

@Component(
  {
    selector: 'bonjour',
    template: '<h1>{{hello}}</h1>',
    styles: ['h1 { font-family: Arial; }']
  }
)
export class Bonjour{
  hello = hello();
}

export function hello() {
  return "Bonjour tout le monde";
}

