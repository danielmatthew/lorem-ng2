import { Component } from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { HeroListComponent } from './toh/hero-list.component';

@Component({
    selector: 'my-app',
    template: `<hero-list></hero-list>`,
    directives: [ HeroListComponent ]
})

export class AppComponent {}
