/**
 * Created by haiko on 18-4-16.
 *
 * Creates a ControlGroup and Controls for fields from given Object. Traverses object tree until primary type are encountered ( string, number, boolean ).
 */
import { Control, ControlGroup } from '@angular/common';
import 'rxjs/add/operator/debounceTime';
import 'reflect-metadata';
export declare class FormObjectBuilder<T> {
    controlGroup: ControlGroup;
    private controls;
    private formModel;
    /**
     *  Construct a new ControlGroup and Controls for given object.
     *  Names for controls
     *
     * @param object
     */
    constructor(object: any);
    /**
     *  Retrieve FormObject.
     */
    getFormObject<T extends Object>(): any;
    getControlGroup(): ControlGroup;
    /**
     * Return Control for given key
     *
     * @param name key for Control.
     * @returns {Control}
     */
    getControl(name: string): Control;
    /**
     * Mark all controls dirty.
     */
    dirtyControls(): void;
    /**
     * Return all invalid controls with propertyname as key.
     *
     * @returns {key:Control}
     */
    getInvalidControls(): {
        [key: string]: Control;
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
    _createControls(object: any, prefix: string): void;
    private _addValidators(object, property, validatorComponents);
    /**
     * Check properties on given object.
     *
     * @param object
     * @param property
     * @returns {boolean|boolean}
     */
    private _isPrimitive(object, property);
}
