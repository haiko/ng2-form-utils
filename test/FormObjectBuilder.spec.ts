import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {FormObjectBuilder} from '../src/FormObjectBuilder';



describe('FormObjectBuilder', () => {

  fit('should create Controls and ControlGroup for a simple Object', () => {
    let simpleObject = new Person('Foobar', true, 27);

    let fob = new FormObjectBuilder();
    fob.createControls(simpleObject);

    expect(fob).toBeDefined();
    expect(fob.controlGroup.contains('name')).toBe(true);
    expect(fob.controlGroup.contains('male')).toBe(true);
    expect(fob.controlGroup.contains('age')).toBe(true);

  });


  it('should create Controls and ControlGroup for nested Objects', () => {
    debugger;
    let dad = new Person('Foo', true, 27);
    let mom = new Person('Bar', false, 27);

    let fam = new Family(dad, mom, 'van der', 'bierbeke');

    let fob = new FormObjectBuilder();
    fob.createControls(fam);

    expect(fob).toBeDefined();
    expect(fob.controlGroup.contains('dad.name')).toBe(true);

  });
})
