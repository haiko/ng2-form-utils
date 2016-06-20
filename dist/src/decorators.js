/**
 * Created by haiko on 28-5-16.
 */
"use strict";
exports.VALIDATORS = 'ng2-formobject.validators';
/**
 * required decorator
 *
 * @param target - prototype of class
 * @param propertyKey - key of property
 */
function required(target, propertyKey) {
    _addValidatorFlag('required', target, propertyKey);
}
exports.required = required;
/**
 * email decorator
 *
 * @param target - prototype of class
 * @param propertyKey - key of property
 */
function emailCheck(target, propertyKey) {
    _addValidatorFlag('emailCheck', target, propertyKey);
}
exports.emailCheck = emailCheck;
/**
 * numberCheck decorator
 *
 * @param target - prototype of class
 * @param propertyKey - key of property
 */
function numberCheck(target, propertyKey) {
    _addValidatorFlag('numberCheck', target, propertyKey);
}
exports.numberCheck = numberCheck;
/**
 * Add metadata flag for given property on object.
 *
 * @param flag type of validation.
 * @param target object
 * @param propertyKey name of property of object.
 * @private
 */
function _addValidatorFlag(flag, target, propertyKey) {
    // create empty array if none exists
    if (!Reflect.hasMetadata(exports.VALIDATORS, target, propertyKey)) {
        Reflect.defineMetadata(exports.VALIDATORS, [], target, propertyKey);
    }
    var validators = Reflect.getMetadata(exports.VALIDATORS, target, propertyKey);
    validators.push(flag);
    Reflect.defineMetadata(exports.VALIDATORS, validators, target, propertyKey);
}
//# sourceMappingURL=decorators.js.map