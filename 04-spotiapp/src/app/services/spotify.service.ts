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

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQADDbOA4i-ggCwd91m_AQCHIJHWmNMG4ZDoMKzJwhAlPbC-hjzOBnCgOC09LQYfKVWiKyZ6SuOLmzK7Tuc'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map(data => data['albums'].items));
  }

  getArtist(artist: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQADDbOA4i-ggCwd91m_AQCHIJHWmNMG4ZDoMKzJwhAlPbC-hjzOBnCgOC09LQYfKVWiKyZ6SuOLmzK7Tuc'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`, {headers})
      .pipe(map(data => data['artists'].items));
  }
}
