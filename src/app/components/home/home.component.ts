import {Component, inject, Signal} from '@angular/core';
import {DestinationStore} from '../../stores/destination.store';
import {Posts} from '../../models/posts.model';
import {RouterLink} from '@angular/router';
import {DatePipe, NgOptimizedImage} from '@angular/common';

@Component({
    selector: 'app-home',
    imports: [
        RouterLink,
        DatePipe,
        NgOptimizedImage
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  readonly store = inject(DestinationStore);
  postItems = this.store.posts;

  constructor() {

  }
}
