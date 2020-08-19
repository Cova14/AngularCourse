import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service ready!!')
  }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBcm02iBC1DBtZVSLPjlfnsW5m8AUla32BEX9IWrPOsdXc7WfFNDFy1JVZRkqgRE8woA1SPAA3qfrdAy7s'
    });
    return this.http.get(url, {headers})
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtist(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }
}
