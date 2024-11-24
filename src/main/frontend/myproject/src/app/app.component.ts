import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
	standalone: true,
	selector: 'app-root',
	template: `<router-outlet></router-outlet>`,
	styles: [],
	imports: [RouterOutlet]
})
export class AppComponent {
}