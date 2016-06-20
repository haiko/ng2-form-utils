"use strict";
/**
 * Created by haiko on 18-4-16.
 *
 * Creates a ControlGroup and Controls for fields from given Object. Traverses object tree until primary type are encountered ( string, number, boolean ).
 */
var common_1 = require('@angular/common');
require('rxjs/add/operator/debounceTime');
var _ = require('lodash');
require('reflect-metadata');
var form_validators_1 = require('./form.validators');
var decorator = require('./decorators');
var FormObjectBuilder = (function () {
    /**
     *  Construct a new ControlGroup and Controls for given object.
     *  Names for controls
     *
     * @param object
     */
    function FormObjectBuilder(object) {
        this.controls = {};
        this.formModel = object;
        this._createControls(this.formModel, '');
        this.controlGroup = new common_1.ControlGroup(this.controls);
    }
    /**
     *  Retrieve FormObject.
     */
    FormObjectBuilder.prototype.getFormObject = function () {
        return this.formModel;
    };
    FormObjectBuilder.prototype.getControlGroup = function () {
        return this.controlGroup;
    };
    /**
     * Return Control for given key
     *
     * @param name key for Control.
     * @returns {Control}
     */
    FormObjectBuilder.prototype.getControl = function (name) {
        return this.controls[name];
    };
    /**
     * Mark all controls dirty.
     */
    FormObjectBuilder.prototype.dirtyControls = function () {
        for (var controlKey in this.controls) {
            var control = this.controls[controlKey];
            control.markAsDirty();
        }
    };
    /**
     * Return all invalid controls with propertyname as key.
     *
     * @returns {key:Control}
     */
    FormObjectBuilder.prototype.getInvalidControls = function () {
        var invalid = {};
        for (var controlKey in this.controls) {
            var control = this.controls[controlKey];
            if (!control.valid) {
                invalid[controlKey] = control;
            }
        }
        return invalid;
    };
    /**
     * Create controls for properties of object and nested object
     *
     * NULL and UNDEFINED values throws errors!!
     *
     * @param object an Object
     * @param prefix creating navigating path on object to get property.
     * @private
     */
    FormObjectBuilder.prototype._createControls = function (object, prefix) {
        var _loop_1 = function(property) {
            if (object.hasOwnProperty(property)) {
                if (object[property] === null || object[property] === 'undefined') {
                    throw new Error('cannot determine type of ' + property);
                }
                if (this_1._isPrimitive(object, property)) {
                    var propertyName_1 = property;
                    if (prefix) {
                        propertyName_1 = prefix.concat('.').concat(property);
                    }
                    var validatorComponents = [];
                    this_1._addValidators(object, property, validatorComponents);
                    var control = null;
                    if (validatorComponents.length > 0) {
                        control = new common_1.Control(object[property], common_1.Validators.compose(validatorComponents));
                    }
                    else {
                        control = new common_1.Control(object[property]);
                    }
                    this_1.controls[propertyName_1] = control;
                    var self_1 = this_1;
                    control.valueChanges.debounceTime(500 /* ms */)
                        .subscribe(function (newValue) {
                        // touch value to make it work.
                        var value = newValue;
                        _.set(self_1.formModel, propertyName_1, value);
                    });
                }
                else if (typeof object[property] === 'object' && !Array.isArray(object[property])) {
                    this_1._createControls(object[property], property);
                }
                else {
                    console.log(property + ' not found in given object');
                }
            }
        };
        var this_1 = this;
        for (var property in object) {
            _loop_1(property);
        }
    };
    FormObjectBuilder.prototype._addValidators = function (object, property, validatorComponents) {
        if (Reflect.hasMetadata(decorator.VALIDATORS, object, property)) {
            var validators = Reflect.getMetadata(decorator.VALIDATORS, object, property);
            // required
            if (validators.indexOf('required') > -1) {
                validatorComponents.push(common_1.Validators.required);
            }
            // email
            if (validators.indexOf('emailCheck') > -1) {
                validatorComponents.push(form_validators_1.FormValidators.isMailAddress);
            }
            // NaN check
            if (validators.indexOf('numberCheck') > -1) {
                validatorComponents.push(form_validators_1.FormValidators.isNumber);
            }
        }
    };
    /**
     * Check properties on given object.
     *
     * @param object
     * @param property
     * @returns {boolean|boolean}
     */
    FormObjectBuilder.prototype._isPrimitive = function (object, property) {
        return typeof object[property] === 'number' || typeof object[property] === 'string' || typeof object[property] === 'boolean'
            || (typeof object[property] === 'object' && Array.isArray(object[property]))
            || (typeof object[property] === 'object' && Object.prototype.toString.call(object[property]) === '[object Date]');
    };
    return FormObjectBuilder;
}());
exports.FormObjectBuilder = FormObjectBuilder;
//# sourceMappingURL=form-object.builder.js.map