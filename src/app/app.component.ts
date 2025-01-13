import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { DestinationStore } from './stores/destination.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgOptimizedImage],
  providers: [DestinationStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Trang chủ';
  card_data = [
    {
      id: 1,
      title: 'Thailand',
      link: '',
      image_url: '../assets/images/chinatown.jpg',
    },
    {
      id: 2,
      title: 'Thailand',
      link: '',
      image_url: '../assets/images/chinatown.jpg',
    },
    {
      id: 3,
      title: 'Thailand',
      link: '',
      image_url: '../assets/images/chinatown.jpg',
    },
  ];
}
