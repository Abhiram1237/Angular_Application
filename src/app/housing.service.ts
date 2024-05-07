import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';


// protected is a property that can be accessed within the same class and by instances of derived classes (subclasses), but not outside of these classes.


@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/Location';
 
  constructor() { }

  async getAllHousingLocations() : Promise <HousingLocation[]> {
    
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined>{
      const data = await fetch(`${this.url}/${id}`);
      return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email:string){
    console.log(firstName, lastName, email)
  }
}

