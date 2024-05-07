import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <input type="text" placeholder="Filter By City" #filter> <!-- The # creates a template variable -->
    <button class = "primary" type="button" (click)="filterResults(filter.value)" >Search</button>
  </section>
  <section class="results">
    <app-housing-location *ngFor=" let housingLocation of filteredLocationList" [housingLocation]= "housingLocation"></app-housing-location>    <!-- the code within the *ngFor quotes is Angular template syntax, It creates a template variable called housingLocation which reperesents an each entry from housingLocationList -->
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService)
  filteredLocationList: HousingLocation[] = [];

  constructor(){
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) =>{
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = this.housingLocationList;                                          //this might look complicated but its simple 
    });     
  }
  filterResults(text: string){
    if(!text) this.filteredLocationList = this.filteredLocationList;

    this.filteredLocationList = this.filteredLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
  }

}
