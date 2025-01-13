import {Component, input, OnInit, output} from '@angular/core';
import {FormConfig} from '../../../models/form-field';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-popup-form',
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './popup-form.component.html',
  styleUrl: './popup-form.component.scss'
})
export class PopupFormComponent implements OnInit {
  //Nhận các field từ component cha
  formGroup!: FormGroup;
  configForm = input.required<FormConfig>();
  showCancel = input(false);
  isSubmitting = input(false);

  submitted = output<any>();
  canceled = output<void>();


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  onCancel() {
    this.canceled.emit();
  }


  private initForm(): void {
    const group: { [key: string]: any } = {};
    this.configForm().fields.forEach(field => {
      group[field.name] = [field.value || '', field.validators || []];
    })
    this.formGroup = this.formBuilder.group(group);
  }
}
