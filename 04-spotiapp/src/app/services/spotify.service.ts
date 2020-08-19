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
      'Authorization': 'Bearer BQDonZG0KXHf96kRGl7GnAMP2rqsJDkdOQgLZzpyOZvJxOhNaTcg58P1-Qa_dXUHB8MKunGuzrhP0LOpQ4g'
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
