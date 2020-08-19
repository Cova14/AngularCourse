import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service ready!!')
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6g23L0WR4ooox7t794mmOaHYKRCJHgP6-QJBE9edRBOte5cK1G6dis7biJgArdu6TRTbs9Yau5PL8Bfs'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(artist: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC6g23L0WR4ooox7t794mmOaHYKRCJHgP6-QJBE9edRBOte5cK1G6dis7biJgArdu6TRTbs9Yau5PL8Bfs'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`, {headers});
  }
}
