import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NgModule, OnInit } from '@angular/core';
import { TestComponent } from './test.component';

@NgModule({
  imports: [
  RouterModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
],
  declarations: [
    TestComponent
  ],
})

export class TestModule implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
