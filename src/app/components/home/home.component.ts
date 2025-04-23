import { Component } from '@angular/core';
import { StringManipulationPipe } from '../../pipes/string-manipulation.pipe';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  imports: [StringManipulationPipe],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public hello: string =
    'Hello world! This is a example of string manipulation custom pipe.';
}
