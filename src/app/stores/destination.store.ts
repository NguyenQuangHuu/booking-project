import {patchState, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {InjectionToken} from "@angular/core";
import {Posts} from '../models/posts.model';

type DestinationState = {
  posts: Posts[],
  isLoading: boolean,
  filter: {
    query: string,
    order: 'asc' | 'desc'
  }
}

const initialState: DestinationState = {
  posts: [{
    id: 1,
    title: "Thái lan trong chim tôi",
    tags: "Thailand,Travel,Trong nước, Nước ngoài",
    viewsNumber: 1234,
    author: "ADMIN",
    liked: 0,
    unliked: 0,
    createdDate: new Date(2023, 8, 3),
    modifyDate: null,
    imageUrl: 'chinatown.jpg',
    postDetail: [{
      id: 0,
      description: "chinatown-0",
      createDate: new Date(2023, 9, 12),
      imageURl: "chinatown.jpg"
    }],
    comments: [{
      id: 0,
      text: "Bổ ích",
      author: "User02321",
      postedDate: new Date(2023, 9, 12),
      isShow: false
    }]
  },
  ],
  isLoading: false,
  filter: {
    query: '',
    order: 'asc'
  }
}

export const DestinationStore = signalStore({
    providedIn: 'root',
  },
  // Khoi tao store
  withState(initialState),
  // Chua cac ham tinh toan de cap nhat signal state
  withComputed(() => ({})),
  // Cac ham duoc goi de tinh toan state
  withMethods((store) => ({}))
)


