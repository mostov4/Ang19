import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "Mosto";

  constructor(){
    console.log(this.firstName)
  }

  showWelcomeAlert(){
    alert("Hello")
  }
}
