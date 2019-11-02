import {NgModule} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
  ]
})
export class MaterialModule {}

/**  Copyright 2019 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
