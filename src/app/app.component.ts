import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Ilias";
  lastname: string = "Jvr";

  person = {
    givenName: 'Ilias',
    surName: 'Jvr',
    age: 0x24,
    email: 'tzavilias@gmail.com'
  }
}
