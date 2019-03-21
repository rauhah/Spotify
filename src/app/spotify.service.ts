import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append ('Authorization','Bearer BQBKxyBt9NmtvgOZGevYy9ul8nnLEgF9Nf3IcavFxG5ssnIS6qJInRXfvm_JRSVF8Qn_1NMi2ACzAcsAR_7Mroxf4xpvIQ5o7iLUCHT9rG63sGntVpieu4ZQn_SUtkwhhnM6MproYVGBhOqLiiLh8MLNFAhSpI3ecw');
  
    return this.http.get(url, {headers});

  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = '&type=artist') {

    const param = '&offset=0&limit=20' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }

  getArtist(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }

}
