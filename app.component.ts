import { Component } from '@angular/core';
import { Customer, PocArrayService } from './poc-array.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PocArrayService]
})
export class AppComponent {
  title = 'Dev-Extreme-App';
}
