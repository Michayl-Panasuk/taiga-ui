import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly template = import('./examples/import/template.md?raw');
}
