import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Trang chủ';
  card_data = [
    {id:1,
    title:'Thailand',
    link:'',
    image_url:'../assets/images/chinatown.jpg',
    },
    {id:2,
      title:'Thailand',
      link:'',
      image_url:'../assets/images/chinatown.jpg',
    },
    {id:3,
      title:'Thailand',
      link:'',
      image_url:'../assets/images/chinatown.jpg',
    },

  ]
}
