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
      'Authorization': 'Bearer BQBkm4D8xakLpDmkVhJb2FPlYNBDVDZ0o8CHLde2RLsRqf3LQcB1tL3jvJwnTTBYmVUwQODuxZD_0G6XoJ0'
    });
    return this.http.get(url, {headers})
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtists(artists: string) {
    return this.getQuery(`search?q=${artists}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }

  getTopTracks(artistId: string) {
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`).pipe(map(data => data['tracks']));
  }
}
