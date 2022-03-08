import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LanguageTranslatorService {

  host = environment.host_lt;
  constructor(private http:HttpClient) { }
  getTranslation(text: string,langInp:string, langOut:string) {
    let url = encodeURIComponent(this.host + '?text=' + text + '&langIn=' + langInp + '&langOut=' + langOut);

    return this.http.get(this.host+'?text='+text+'&langIn='+langInp+'&langOut='+langOut);

  }
  getLanguages(){
    return this.http.get(this.host+ "languages");
  }
}
