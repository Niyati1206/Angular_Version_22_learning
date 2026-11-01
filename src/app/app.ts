import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { VisitorCount } from './visitor-count/visitor-count';
import { LearningComputedSignals } from './learning-computed-signals/learning-computed-signals';
import { Effects } from './effects/effects';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { GetterSetterSignals } from './getter-setter-signals/getter-setter-signals';
import { Parent } from './parent/parent';
import { Handson1Parent } from './handson1-parent/handson1-parent';
import { Handson2Parent } from './handson2-parent/handson2-parent';
import { Handson3Parent } from './handson3-parent/handson3-parent';
import { Handson4Parent } from './handson4-parent/handson4-parent';
import { Handson5Parent } from './handson5-parent/handson5-parent';
import { Handson6Parent } from './handson6-parent/handson6-parent';
import { Handson7Parent } from './handson7-parent/handson7-parent';
import { Handson8Parent } from './handson8-parent/handson8-parent';
import { Handson9Parent } from './handson9-parent/handson9-parent';

@Component({
  imports: [RouterOutlet, Profile, VisitorCount, LearningComputedSignals,
    Effects, TwoWayBinding, GetterSetterSignals, Parent, Handson1Parent,
     Handson2Parent, Handson3Parent , Handson4Parent, Handson5Parent, Handson6Parent,
    Handson7Parent , Handson8Parent, Handson9Parent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular 22 Tutorial');
  // name ="Niyati Sawant";
}
