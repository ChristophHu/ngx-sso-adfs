import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideSsoAdfs } from '../../../ngx-sso-adfs/src/lib/ngx-sso-adfs.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideSsoAdfs({}),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
