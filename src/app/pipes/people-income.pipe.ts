import { Pipe, PipeTransform } from '@angular/core';
import { IPeople } from '../models/peoples';

@Pipe({
  name: 'peopleIncome'
})
export class PeopleIncomePipe implements PipeTransform {

  transform(peoples: IPeople[], tab: string): IPeople[] {
    let res: IPeople[] = []
    if (tab === '0') {
      for (let i = 0; i < peoples.length; i++) {

        if (peoples[i].type === 'income') {

          res.push(peoples[i])

        }
 
      }

      return res.sort((a, b) => a.amount - b.amount).reverse()

    } else if (tab === '1') {
      for (let i = 0; i < peoples.length; i++) {

        if (peoples[i].type === 'outcome') {

          res.push(peoples[i])

        }
 
      }

      return res.sort((a, b) => a.amount - b.amount).reverse()

    } else if (tab === '2') {

      for (let i = 0; i < peoples.length; i++) {

        if (peoples[i].type === 'loan') {

          res.push(peoples[i])

        }
 
      }

      return res.sort((a, b) => a.amount - b.amount).reverse()

    } else if (tab === '3') {

      for (let i = 0; i < peoples.length; i++) {

        if (peoples[i].type === 'investment') {

          res.push(peoples[i])

        }
 
      }

      return res.sort((a, b) => a.amount - b.amount).reverse()

    } else {

      return res

    }
  }

}
