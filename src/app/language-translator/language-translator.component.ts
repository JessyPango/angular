import {Component, Input, OnInit} from '@angular/core';
import {LanguageTranslatorService} from "../services/language-translator.service";
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-language-translator',
  templateUrl: './language-translator.component.html',
  styleUrls: ['./language-translator.component.css']
})
export class LanguageTranslatorComponent implements OnInit {

  textInput = "Hello word!";
  textResult = "";
  languageOutput="fr";
  languageInput="en";

  languages: any;

  constructor(private ltServ: LanguageTranslatorService) {
  }

  ngOnInit(): void {
    this.ltServ.getLanguages().subscribe( data => {
      this.languages = data;
      this.languages = this.languages.languages;
      console.log(this.languages);
    });

  }

  getTranslation() {
    if (this.textInput.length >= 1 && this.languageInput != this.languageOutput) {
      this.ltServ.getTranslation(this.textInput, this.languageInput, this.languageOutput).subscribe(data => this.affiche(data))
    }
    else{
      this.textResult = this.textInput;
    }
  }

  affiche(data: any) {
    this.textResult = data.translations[0].translation;

    console.log(this.textResult)
  }
}
