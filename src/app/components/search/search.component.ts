import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

// tslint:disable-next-line:no-inferrable-types
public stash: string = 'foooo';

  constructor(public _spotify: SpotifyService) {
    this._spotify.getArtistas();
   }

  ngOnInit() {
  }

}

