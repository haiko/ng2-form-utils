/**
 * Created by haiko on 28-5-16.
 */
export declare const VALIDATORS: string;
/**
 * required decorator
 *
 * @param target - prototype of class
 * @param propertyKey - key of property
 */
export declare function required(target: Object, propertyKey: string): void;
/**
 * email decorator
 *
 * @param target - prototype of class
 * @param propertyKey - key of property
 */
export declare function emailCheck(target: Object, propertyKey: string): void;
/**
 * numberCheck decorator
 *
 * @param target - prototype of class
 * @param propertyKey - key of property
 */
export declare function numberCheck(target: Object, propertyKey: string): void;
