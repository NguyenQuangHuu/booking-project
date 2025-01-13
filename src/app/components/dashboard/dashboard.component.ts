import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import {PopupFormComponent} from '../../common/component/popup-form/popup-form.component';
import {FormConfig} from '../../models/form-field';
import {Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    PopupFormComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  openBox = signal(false);
  isSubmitting = signal(false);
  wordForm: FormConfig = {
    formName: 'Thêm từ mới',
    fields: [
      {
        label: 'Từ mới',
        type: 'text',
        name: 'word',
        validators: [Validators.required, Validators.min(1)],
        errorMessages: {required: 'Không được bỏ trống', min: 'Giá trị nhập phải lớn hơn 1 kí tự'},
        placeholder: 'Nhập từ mới'
      },
      {
        label: 'Nghĩa tiếng việt',
        type: 'text',
        name: 'meaning_vn',
        placeholder: 'Nghĩa Tiếng Việt'
      },
      {
        label: 'Nghĩa tiếng đức',
        type: 'text',
        name: 'meaning_de',
        placeholder: 'Nghĩa Tiếng Đức'
      },
      {
        label: 'Loại từ',
        type: 'select',
        name: 'word_type',
        validators: [Validators.required],
        options: [
          {
            value: null,
            label: '--Loại từ--'
          },
          {
            value: 'nouns',
            label: 'Danh từ'
          },
          {
            value: 'verb',
            label: 'Động từ'
          },
          {
            value: 'adverb',
            label: 'Trợ động từ'
          },
        ]
      }
    ],
    submitButtonText: 'Thêm',
    cancelButtonText: 'Hủy bỏ'
  };

  constructor() {

  }

  isActive() {
    this.openBox.update(value => !value)
  }

  handleSubmit() {
    this.isSubmitting.set(true);
    try {
      // Simulate API call

      this.openBox.set(false);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  handleCancel() {
    this.openBox.set(false);
  }
}
