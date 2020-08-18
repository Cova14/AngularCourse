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
      'Authorization': 'Bearer BQA38C5oy8JaNOsvxBV510WFpFHmF1EJuy-bo6U_OsK12WXVIAcF-QHjNhtF43y1H6A6G-EVnngDsd564DU'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      })
  }
}
