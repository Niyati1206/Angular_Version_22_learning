import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  imports: [Card],
  selector: 'app-card-list',
  styleUrl: './card-list.css',
  templateUrl: './card-list.html',
})
export class CardList {
  items =["Directives","Dependency Injection","Services","SPA","Faster Apps"]
}
