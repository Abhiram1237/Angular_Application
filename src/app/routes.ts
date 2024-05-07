import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";


const routeConfig: Routes = [{
    path: '',
    component: HomeComponent,
    title: 'Home Page'

}, {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details page'
}];

export default routeConfig;

// path represents which url matches which components, when users visits the app we want them to be in home component thats why path is empty
// by giving /:id in the above we can dynamically change the id value based on the list