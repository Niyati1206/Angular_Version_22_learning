import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
console.log("Before bootstrap")
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err))
  .then(() => console.log("Durinng bootstrap"));
console.log("After bootstrap")