import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategorypassService {

    constructor() { }
    private CategoryName = null;
    private counter : number = 0;
    private previousCounter : number = 0;
    CategoryClicked(name: string) {
        this.CategoryName = name;
        this.counter++;
    }

    getCategoryName() {
        if(this.counter == this.previousCounter)    {
            return null;
        }
            
        else    {
            this.previousCounter++;
            return this.CategoryName;
        }
    }
}



