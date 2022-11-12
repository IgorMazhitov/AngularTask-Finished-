import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/models/peoples';
import {peoples as data} from '../../../data/people'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent implements OnInit {

  peoples: IPeople[] = data

  constructor() { }

  ngOnInit(): void {
  }

  income = (array: IPeople[]) => array.filter(el => el.type === 'income')
  outcome = (array: IPeople[]) => array.filter(el => el.type === 'outcome')
  loans = (array: IPeople[]) => array.filter(el => el.type === 'loan')
  invest = (array: IPeople[]) => array.filter(el => el.type === 'investment')

}
