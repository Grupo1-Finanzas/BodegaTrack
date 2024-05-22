import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./public/components/header/header.component";
import {FooterComponent} from "./public/components/footer/footer.component";
import {LogInComponent} from "./public/components/log-in/log-in.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BodegaTrack';
}
