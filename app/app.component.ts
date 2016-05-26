import {Component} from 'angular2/core';
import {SearchFormComponent} from './search-form.component';

@Component({
    selector: 'my-app',
    directives: [SearchFormComponent],
    template: `
        <search-form></search-form>
    `
})
export class AppComponent {
}
