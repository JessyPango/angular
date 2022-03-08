import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  key = environment.meteoKey;
  host = environment.meteoHost;

  constructor(private http: HttpClient) { }
  
  getMeteoljour(ville: string) {
    return this.http.get(this.host + 'weather?q=' + ville + '&appid=' + this.key)
  }

  getMeteo5jours(ville: string): Observable<any> {
    return this.http.get(this.host + 'forecast?q=' + ville + '&appid=' + this.key)
  }
}
