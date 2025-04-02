import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SingleFileComponentComponent } from "./extra/singleFileComponent/single-file-component/single-file-component.component";
import { DataBindingComponent } from "./extra/dataBinding/data-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignupComponent, SingleFileComponentComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang19';
}
