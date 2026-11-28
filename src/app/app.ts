import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './components/profile/profile';
import { ProfileCard } from './components/profile-card/profile-card';
import { ProfileCard2 } from './components/profile-card-2/profile-card-2';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { CardList } from './components/card-list/card-list';
import { ProfileInline } from './components/profile-inline/profile-inline';
import { EventsPractice } from './components/events-practice/events-practice';
import { EventsHardQuestion } from './components/events-hard-question/events-hard-question';
import { DataTypes } from './components/data-types/data-types';
import { ProductHardQuestion } from './components/product-hard-question/product-hard-question';


@Component({ 
  
  imports: [RouterOutlet, Profile, ProfileCard, ProfileCard2, Navbar, Hero, CardList, Footer, ProfileInline, EventsPractice,
    EventsPractice, EventsHardQuestion , DataTypes , ProductHardQuestion
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})  
export class App {
  protected readonly title = signal('Angular 22 Tutorial');
  people = ["Niyati", "Subhadip ","Pranjal"];
  // name ="Niyati Sawant";
}
