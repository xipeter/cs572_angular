import { AbstractControl, ValidationErrors } from "@angular/forms";



export class ValidateProduct{
    static validate(control:AbstractControl) :ValidationErrors |null{
        if((control.value as string)=='P123'){
            return {uniqueid:true};
        }
        return null;
    }
}