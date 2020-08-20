import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.loading = true
    this.spotify.getNewReleases()
      .subscribe((data:any) => {
        this.newReleases = data;
        this.loading = false;
      }, err => {
        this.error = true;
        this.loading = false;
        this.errorMessage = err.error.error.message;
      })
  }

  ngOnInit(): void {
  }

}
