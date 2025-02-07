import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableAkitaProdMode } from '@datorama/akita';
import { isDevMode } from '@angular/core';

if (!isDevMode()) {
  enableAkitaProdMode();
}

bootstrapApplication(AppComponent);
