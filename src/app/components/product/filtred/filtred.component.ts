import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPeople } from 'src/app/models/peoples';
import {peoples as data} from '../../../data/people'


@Component({
  selector: 'app-filtred',
  templateUrl: './filtred.component.html',
})
export class FiltredComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) {}
  
  filter: string = this.activatedRoute.snapshot.queryParamMap.get('tab')!
  
  peoples: IPeople[] = data
  
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.filter = param.get('tab')!
  })

  }
}
