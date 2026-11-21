import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './components/profile/profile';
import { ProfileCard } from './components/profile-card/profile-card';
import { ProfileCard2 } from './components/profile-card-2/profile-card-2';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { CardList } from './components/card-list/card-list';


@Component({ 
  
  imports: [RouterOutlet , Profile, ProfileCard, ProfileCard2 , Navbar,Hero ,CardList, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})  
export class App {
  protected readonly title = signal('Angular 22 Tutorial');
  people = ["Niyati", "Subhadip ","Pranjal"];
  // name ="Niyati Sawant";
}
