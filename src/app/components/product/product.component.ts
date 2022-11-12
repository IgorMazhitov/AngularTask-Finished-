import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IPeople } from 'src/app/models/peoples'
import {peoples as data} from '../../data/people'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {

    peoples: IPeople[] = data
    
    income: boolean = true
    outcome: boolean = false
    loans: boolean = false
    investments: boolean = false
    
    incomeActive = () => {

        this.income = true
        this.outcome = false
        this.loans = false
        this.investments = false

    }

    outcomeActive = () => {

        this.income = false
        this.outcome = true
        this.loans = false
        this.investments = false

    }

    loansActive = () => {

        this.income = false
        this.outcome = false
        this.loans = true
        this.investments = false

    }

    investActive = () => {


        this.income = false
        this.outcome = false
        this.loans = false
        this.investments = true

    }
}