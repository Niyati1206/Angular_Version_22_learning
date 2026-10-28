import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { VisitorCount } from './visitor-count/visitor-count';
import { LearningComputedSignals } from './learning-computed-signals/learning-computed-signals';
import { Effects } from './effects/effects';

@Component({
  imports: [RouterOutlet, Profile, VisitorCount, LearningComputedSignals, Effects],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular 22 Tutorial');
  name ="Niyati Sawant";
}
