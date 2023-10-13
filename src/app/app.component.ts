import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Ilias";
  lastname: string = "Jvr";

  person: Person = {
    givenName: 'Ilias',
    surName: 'Jvr',
    age: 0x24,
    email: 'tzavilias@gmail.com',
    address: 'Athens, Greece',
  };

  person2: Person = {
    givenName: 'George',
    surName: 'Chatzidimitrakopoulos',
    age: 0x37,
    email: 'G.chatz@gmail.com',
    address: 'Athens, Greece',
  };
}
