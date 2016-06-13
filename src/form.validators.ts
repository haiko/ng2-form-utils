/**
 * Created by haiko on 5-2-16.
 *
 * Custom input validator
 */
import { Control } from '@angular/common';
import { ValidationResult } from './ivalidationresult';


export class FormValidators {

  static isNumber(control: Control): ValidationResult {

    if ( control.value !== '' && isNaN(control.value)) {
      return { 'nan': true};
    }
    return undefined;
  }

  static isMailAddress(control: Control): ValidationResult {

    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if ( control.value !== '' && !EMAIL_REGEXP.test(control.value)) {
      return {'mail_format_error' : true};
    }
    return undefined;
  }
}
