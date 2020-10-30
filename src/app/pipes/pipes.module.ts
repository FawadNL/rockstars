import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDurationPipe } from './format-duration.pipe';



@NgModule({
  declarations: [FormatDurationPipe],
  imports: [
    CommonModule
  ],
  exports: [FormatDurationPipe]
})
export class PipesModule { }
