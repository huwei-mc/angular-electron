import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, FormsModule],
  exports: [WebviewDirective, FormsModule],
})
export class SharedModule {}
