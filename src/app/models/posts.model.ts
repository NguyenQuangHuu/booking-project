import {PostDetail} from './post-detail.model';
import {Comments} from './comments.model';

export interface Posts {
  id: number;
  title: string;
  tags: string;
  viewsNumber: number;
  author: string;
  liked: number;
  unliked: number;
  createdDate: Date;
  modifyDate: Date | null;
  imageUrl: string;
  postDetail: PostDetail[];
  comments: Comments[];
}
