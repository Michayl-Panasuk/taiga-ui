import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-default-renderer',
    templateUrl: './default-renderer.template.html',
    changeDetection,
})
export class ExampleTuiDefaultRendererComponent {
    readonly exampleInsertTemplate = exampleInsertTemplate;
}
