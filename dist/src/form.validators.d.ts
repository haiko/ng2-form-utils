/**
 * Created by haiko on 5-2-16.
 *
 * Custom input validator
 */
import { Control } from '@angular/common';
import { ValidationResult } from './ivalidationresult';
export declare class FormValidators {
    static isNumber(control: Control): ValidationResult;
    static isMailAddress(control: Control): ValidationResult;
}
