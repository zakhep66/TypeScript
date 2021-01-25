import { Pipe, PipeTransform } from '@angular/core';
// import { isNullOrUndefined } from 'util';

import {Student} from '../service/studentmodel'

@Pipe({
  name: 'studpipe',
  pure: false
})
export class StudpipePipe implements PipeTransform {

  transform (students: Student[], searching):any{

    let searchNum = searching.firstname;
    
    // if (){

    //   let newArr = students.filter(students => 

       

    //     return newArr;
    // } else {return students}
  }

}
