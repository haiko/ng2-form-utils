/**
 * Created by haiko on 18-4-16.
 *
 * Creates a ControlGroup and Controls for fields from given Object. Traverses object tree until primary type are encountered ( string, number, boolean ).
 */
import { Validators, Control, ControlGroup } from '@angular/common';
import 'rxjs/add/operator/debounceTime';
import * as _ from 'lodash';
import 'reflect-metadata';
import { FormValidators } from './form.validators';
import * as decorator from './decorators';



export class FormObjectBuilder {

  public controlGroup: ControlGroup;

  private controls: { [key: string]: Control} = {};

  private formModel: any;


  /**
   *  Construct a new ControlGroup and Controls for given object.
   *  Names for controls
   *
   * @param object
   */
  constructor(object: any) {

    this.formModel = object;
    this._createControls(this.formModel, '')
    this.controlGroup = new ControlGroup(this.controls);
  }


  /**
   *  Retrieve FormObject.
   */
  getFormObject() {
    return this.formModel;
  }

  getControlGroup() {
    return this.controlGroup;
  }

  /**
   * Return Control for given key
   *
   * @param name key for Control.
   * @returns {Control}
   */
  getControl(name: string) {
    return this.controls[name];
  }

  /**
   * Mark all controls dirty.
   */
  dirtyControls() {
    for (let controlKey in this.controls) {
      let control = this.controls[controlKey];
      control.markAsDirty();
    }
  }

  /**
   * Return all invalid controls.
   *
   * @returns {Array<Control>}
     */
  getInvalidControls() {
    let invalid: Array< Control > = [];

    for (let controlKey in this.controls) {
      let control = this.controls[controlKey];

      if (!control.valid) {
        invalid.push(control);
      }
    }
    return invalid;
  }

  /**
   * Create controls for properties of object and nested object
   *
   * NULL and UNDEFINED values throws errors!!
   *
   * @param object an Object
   * @param prefix creating navigating path on object to get property.
   * @private
   */
  _createControls(object: any, prefix: string) {
    for (let property in object) {
      if (object.hasOwnProperty(property)) {
        if (object[property] === null || object[property] === 'undefined') {
          throw new Error('cannot determine type of ' + property);
        }

        if (this._isPrimitive(object, property)) {
          let propertyName = property;

          if (prefix) {
            propertyName = prefix.concat('.').concat(property);
          }

          let validatorComponents: Array<any> = [];

          if ( Reflect.hasMetadata(decorator.VALIDATORS, object,  property)) {
            console.log(Reflect.getMetadata(decorator.VALIDATORS, object, property));
            let validators: Array<string> = Reflect.getMetadata(decorator.VALIDATORS, object, property);

            // required
            if (validators.indexOf('required') > -1 ){
              validatorComponents.push(Validators.required);
            }

            // email
            if (validators.indexOf('email') > -1 ){
              validatorComponents.push(FormValidators.isMailAddress);
            }
          }

          let control: any = null;

          if (validatorComponents.length > 0) {
            console.log('add validator');
            console.log(validatorComponents);
            console.log(property);
            control = new Control(object[property], Validators.compose(validatorComponents));
          }
          else {
            control = new Control(object[property]);
          }



          this.controls[propertyName] = control;

          let self = this;

          control.valueChanges.debounceTime(500 /* ms */)
            .subscribe((newValue: any) => {

              // touch value to make it work.
              let value = newValue;
              _.set(self.formModel, propertyName, value);
            });

        } else if (typeof object[property] === 'object' && !Array.isArray(object[property])) {
          this._createControls(object[property], property);
        } else {
          console.log(property + ' not found in given object');
        }
      }
    }
  }

  /**
   * Check properties on given object.
   *
   * @param object
   * @param property
   * @returns {boolean|boolean}
     */
  private _isPrimitive(object: any, property: string) {
      return typeof object[property] === 'number' || typeof object[property] === 'string' || typeof object[property] === 'boolean'
          || (typeof object[property] === 'object' && Array.isArray(object[property])) || (typeof object[property] === 'object' && Object.prototype.toString.call(object[property]) === '[object Date]');
      }
}
