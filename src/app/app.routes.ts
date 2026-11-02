import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { VisitorCount } from './visitor-count/visitor-count';
import { Profile } from './profile/profile';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { LearningComputedSignals } from './learning-computed-signals/learning-computed-signals';
import { GetterSetterSignals } from './getter-setter-signals/getter-setter-signals';
import { Effects } from './effects/effects';
import { PageNotFound } from './page-not-found/page-not-found';
import { HandsOnPractice } from './hands-on-practice/hands-on-practice';

export const routes: Routes = [
    {path:"", component:VisitorCount},
    {path:"profile", component:Profile},
    {path:"two-way-binding", component:TwoWayBinding},
    {path:"learn-signals", component:LearningComputedSignals},
    {path:"getter-setter", component:GetterSetterSignals},
    {path: "effects",component:Effects},
    {path:"handson", component:HandsOnPractice},
    // {path:"**", redirectTo:''}, when you have to redirect every incorrect path to a specific page
    {path:"**", component:PageNotFound}

];
