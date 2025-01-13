import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  private subscription: Subscription = new Subscription;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }

  login() {
    let username = this.loginForm.value.username
    let password = this.loginForm.value.password
    this.subscription = this.userService.login(username, password)
      .subscribe({
        next: result => {
          this.router.navigate(['/chat']).then(() => {
            console.log(result)
          })
        },
        error: error => {
          console.log(error.error)
        },
        complete: () => {
          console.log('finished')
        }
      })
    this.loginForm.reset()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
