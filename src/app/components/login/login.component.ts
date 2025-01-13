import {Component, OnDestroy, Signal, signal, WritableSignal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {catchError, of, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpEventType, HttpResponse} from '@angular/common/http';

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
  usernameSignal: WritableSignal<string> = signal('');
  passwordSignal: WritableSignal<string> = signal('');
  private subscription: Subscription = new Subscription;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(6)],),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    this.loginForm.get('username')?.valueChanges.subscribe(
      value => {
        this.usernameSignal.set(value);
      }
    );
    this.loginForm.get('password')?.valueChanges.subscribe(
      value => {
        this.passwordSignal.set(value);
      }
    )
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.subscription = this.userService.login(this.usernameSignal(), this.passwordSignal())
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
