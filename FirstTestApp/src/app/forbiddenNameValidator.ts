import {AbstractControl, ValidatorFn} from "@angular/forms";

export function forbiddenNameValidator(nameRegEx: RegExp):ValidatorFn {
  return (control: AbstractControl): {[key:string]: any} => {
    const name = control.value;
    const no = nameRegEx.test(name);
    return no ? {'forbiddenName': {name}} : null;
  };
}
