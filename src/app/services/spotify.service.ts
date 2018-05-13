import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable()
export class SpotifyService {

  constructor(public _http: HttpClient) {
    console.log('servicio spoty listo');
  }

  public getArtistas() {
    // tslint:disable-next-line:prefer-const
    let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQCD0zzE93L0TMZwatMGunNj7l9PzaMV0ujmoUs_D-05vi271oKe-rnuLkwOC44MRL6tAe2HiK_JeKj7_ko'
    });
    this._http.get(url, {headers}).subscribe(resp => console.log(resp));
  }

}

