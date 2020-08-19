import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  loading: boolean;
  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  search(artist:string) {
    this.loading = true;
    this.spotify.getArtists(artist)
      .subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      })
  };
}
