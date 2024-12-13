import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ChattingComponent} from './components/chat/chatting/chatting.component';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chat',
    component: ChattingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
