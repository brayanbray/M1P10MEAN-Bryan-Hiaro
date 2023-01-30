import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { analytics } from "./app/firebase.config";
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));