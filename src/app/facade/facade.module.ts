import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacadeRoutingModule } from './facade-routing.module';
import { FacadeComponent } from '../facade/facade.component';
import { MenuComponent } from '../facade/menu/menu.component';
import { FooterComponent } from '../facade/footer/footer.component';


@NgModule({
  declarations: [FacadeComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    FacadeRoutingModule
  ]
})
export class FacadeModule { }
