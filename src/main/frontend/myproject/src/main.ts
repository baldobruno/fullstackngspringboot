import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/app.routes';


bootstrapApplication(
	AppComponent,
	{ providers: [provideRouter(ROUTES)] }
)
	.then(() => console.log('Bootstrap success'))
	.catch(error => console.log(error));
