import { Component ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
  '../../node_modules/ng2-toasty/style-bootstrap.css',
  '../../node_modules/ng2-toasty/style-default.css',
  '../../node_modules/ng2-toasty/style-material.css'
],
encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'EFSoftware';
}
