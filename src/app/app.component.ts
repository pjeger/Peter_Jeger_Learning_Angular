import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, my name is Peter';
  paragraph = 'This is my first Javascript Frameworks assignment using Angular and Github, this is very confusing.'
  date = 'September 11, 2024'
}
