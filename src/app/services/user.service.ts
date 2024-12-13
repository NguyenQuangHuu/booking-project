import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) {
  }

  login(username: string, password: string): Observable<object> {
    return this._httpClient.post("http://localhost:8080/api/user/login", JSON.stringify({
      username: username,
      password: password
    }), {withCredentials: true})
  }
}
