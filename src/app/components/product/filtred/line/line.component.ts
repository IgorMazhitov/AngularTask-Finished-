import { Component, Input } from '@angular/core';
import { IPeople } from 'src/app/models/peoples';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
})
export class LineComponent{

  @Input() people: IPeople

}
