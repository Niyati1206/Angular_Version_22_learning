import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
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
  imports: [RouterLink,
    Handson1Parent,
    Handson2Parent,
    Handson3Parent,
    Handson4Parent,
    Handson5Parent,
    Handson6Parent,
    Handson7Parent,
    Handson8Parent,
    Handson9Parent
  ],
  selector: 'app-hands-on-practice',
  styleUrl: './hands-on-practice.css',
  templateUrl: './hands-on-practice.html',
})
export class HandsOnPractice {

  private route= inject(ActivatedRoute);
  question = 1;

  constructor(){
    this.route.queryParamMap.subscribe(params => {
      this.question = Number(params.get('id') ?? 1);
    });
  }
  //  params.get('id') ?? 1 // isme ?? ko nullish coalescing operator kehte hain.
  //Iska matlab: agar left side null ya undefined hai, toh default value 1 use karo.
}
