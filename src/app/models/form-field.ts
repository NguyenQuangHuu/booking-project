export interface FormField {
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea';
  name: string;
  placeholder?: string;
  value?: any;
  validators?: any[];
  options?: { value: any; label: string }[];
  errorMessages?: { [key: string]: string };
}

export interface FormConfig {
  formName: string;
  fields: FormField[];
  submitButtonText?: string;
  cancelButtonText?: string;
}
