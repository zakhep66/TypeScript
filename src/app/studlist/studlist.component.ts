import { Component, OnInit } from '@angular/core';
import {Student} from '../service/studentmodel'
import {SrvService} from '../service/srv-service.service';


@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.css']
})
export class StudlistComponent implements OnInit {

StudentFilterGroup: any = {group: '',stud:''};
StudentFilterStud: any = {stud: ''};
  constructor(private srv: SrvService) { }

  ngOnInit(): void {
    this.getStudents();
    console.log(this.students);
  }

  onDelete(id){
    this.srv.removeStudent(id).then(()=>
    this.students = this.students.filter(student=>student.id !== id))
  }

  students: Student[]=[];
  sorting = false;

  getStudents(){
    this.students = [];
    this.srv.getStudents().then(()=>
    (this.srv.students).forEach(student=>this.students.push(student)))

  }

  useSorting(){
    console.log(this.sorting)
    if (this.sorting == false){
      this.sorting = true; 
      this.students.sort((prev,next) =>{
        if (prev.surname < next.surname) return -1;
        else if (prev.surname > next.surname) return 1;
        else return 0;
      });   
        
    }
    else if (this.sorting == true){
      this.sorting = false;   
      this.students.sort((prev,next) =>{
        if (prev.surname > next.surname) return -1;
        else if (prev.surname < next.surname) return 1;
        else return 0;
       
      });  
       
    }
  }

}
