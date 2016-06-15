//import Decorator = ts.Decorator;
/**
 * Created by haiko on 28-5-16.
 */

export const VALIDATORS = 'ng2-formobject.validators';


/**
 * required decorator
 *
 * @param target - prototype of class
 * @param propertyKey - key of property
 */
export function required(target: Object, propertyKey: string) {
  _addValidatorFlag('required', target, propertyKey);
}

/**
 * email decorator
 *
 * @param target - prototype of class
 * @param propertyKey - key of property
 */
export function email(target: Object, propertyKey: string) {
  _addValidatorFlag('email', target, propertyKey);

}

/**
 * Add metadata flag for given property on object.
 *
 * @param flag type of validation.
 * @param target object
 * @param propertyKey name of property of object.
 * @private
 */
 function _addValidatorFlag(flag: string, target: Object, propertyKey: string) {

   // create empty array if none exists
   if ( !Reflect.hasMetadata(VALIDATORS, target, propertyKey)) {
     Reflect.defineMetadata(VALIDATORS, [], target, propertyKey);
   }

   let validators: Array<string> = Reflect.getMetadata(VALIDATORS, target, propertyKey);
   validators.push(flag);

   Reflect.defineMetadata(VALIDATORS, validators, target, propertyKey);
 }




