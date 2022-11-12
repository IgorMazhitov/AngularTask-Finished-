import { Component, Input, OnInit } from '@angular/core';
import { IPeople } from 'src/app/models/peoples';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent{

  @Input() peoples: IPeople[]
  @Input() type: string


}
