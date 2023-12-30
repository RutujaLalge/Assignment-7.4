import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public Name : string = "Marvellous Infosystems";
  public UpperEvent()
  {
    this.Name = this.Name.toUpperCase();
  }

  public LowerEvent()
  {
    this.Name = this.Name.toLowerCase();
  }
}
