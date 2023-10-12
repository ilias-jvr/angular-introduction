import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
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
}
