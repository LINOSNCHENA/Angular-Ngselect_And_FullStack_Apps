import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { IEstablishment } from './model/model';
import { Router } from '@angular/router';
import { VenuesService } from './services/venues.services';
import { Person } from './model/person';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amsterdam';
  name = '';
  city = '';
  zipcode = "";
  adress = "";
  urls = '';
  media = '';

  establishment: IEstablishment[] = [];
  events: IEstablishment[] = [];
  totalEstablishment: number;
  totalEvents: number;

  // employees$: Person[];
  selectedCities = [];
  selectedCities2: any[];
  employees$: Observable<any>;
  constructor(private dataService2: DataService,
    private dataService: VenuesService, private _router: Router) { }

  ngOnInit() {
    this.employees$ = this.dataService2.getEmployees();
    this.selected();
    this.selectedCities2 = this.selectedCities;


    this.dataService.getEstablishment().subscribe(
      (dataSet1: any) => {
        this.establishment = dataSet1;
        console.log(this.establishment);
        console.log(this.establishment);
        this.totalEstablishment = this.establishment.length;
      }
      
    );
    this.dataService.getEvents().subscribe(
      (dataSet2: any) => {
        this.events = dataSet2;
        console.log(this.events)
        this.totalEvents = this.events.length
      }
    );
  }
  clearModel() { this.selectedCities = []; }
  changeModel() { this.selectedCities = [{ name: 'New person' }]; }

  e = []; o = []; z = [];
  venues = [{ city: 'Gelya McMaster', name: 'John1', selected: false, value: 1 },
  { city: 'Maxwell Irwin', name: 'John1', selected: false, value: 1 },
  { city: 'Johannes McMaster', name: 'John1', selected: false, value: 1 },
  { city: 'Davon Irwin', name: 'John1', selected: false, value: 1 }]; searchtxt: [];



  selected() {
    let citiesSeached = this.selectedCities;
    this.e = []; this.o = []; this.z = [];
    for (var index in citiesSeached) {            ////////////////////////////////  # 1
      console.log("1-Total of Elements Found -: " + index);
      if (citiesSeached[index].name !== "Mendoza Ruiz") {
        this.e.push(citiesSeached[index].name)
      }
    }

    let states2 = this.venues;                   /////////////////////////////////  #2
    for (var index in states2) {
      if (states2[index].value! > 0) {
        this.o.push(states2[index].name)
      }
    }

    for (var index in this.e) {                  /////////////////////////////////  #3
      let states = this.venues;
      for (var index in states) {
        if (states[index].name === "John1") {
          this.z.push(states[index].name)
        }
      }
      console.log("2-Searched in the array the Found (Z):"); console.log(this.z)
    }
    console.log("3-Array for inputting array found (E):"); console.log(this.e)
    console.log("4-Oposite than Mendoza Ruiz Found (O):"); console.log(this.o)
  }

  viewDetails(iEstablishment: any) {
    this.dataService.setter(iEstablishment);
    this._router.navigate(['/enrolls']);
  }
}