import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
  
@NgModule({
  declarations: [NavComponent, FooterComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavComponent, FooterComponent, CommonModule, FormsModule]
})
export class ComponentsModule { }
