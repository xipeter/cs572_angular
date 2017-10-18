import { AbstractControl, ValidationErrors ,AsyncValidatorFn} from "@angular/forms";



export class ValidateProduct{
    static unique(control:AbstractControl) :Promise<ValidationErrors |null>{

        if((control.value as string)=='P123'){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{resolve( {uniqueid:true})},2000);
            });
           
        }
        return new Promise((resolve)=>{
            resolve(null);
        });
    }
}