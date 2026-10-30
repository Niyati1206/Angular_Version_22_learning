import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { VisitorCount } from './visitor-count/visitor-count';
import { LearningComputedSignals } from './learning-computed-signals/learning-computed-signals';
import { Effects } from './effects/effects';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { GetterSetterSignals } from './getter-setter-signals/getter-setter-signals';
import { Parent } from './parent/parent';

@Component({
  imports: [RouterOutlet, Profile, VisitorCount, LearningComputedSignals,
    Effects, TwoWayBinding, GetterSetterSignals, Parent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular 22 Tutorial');
  name ="Niyati Sawant";
}
