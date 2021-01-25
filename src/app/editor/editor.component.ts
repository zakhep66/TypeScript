import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SrvService} from '../service/srv-service.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  id: number;

  constructor(private srv: SrvService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(param => {
      this.id = parseInt(param.id,10);
    })
   }

   studForm: FormGroup;
   disabledControl: boolean;

   onEditStud(id){
     let student = this.studForm.value;
     student.id = id;
     this.srv.editStudent(student).then(() =>
     document.location.href = "/list");
   }

   isNaN(id:number){
     return isNaN(id);
   }

   onAddStud(){
     const studnew = this.studForm.value;
     this.srv.addStudent(studnew).then(()=>{
       this.studForm.reset();
       document.location.href="/list";
     })
   };

   onDelete(id){
    this.srv.removeStudent(id).then(()=>
   document.location.href = '/list')
  }

 

  ngOnInit(): void {
    this.studForm = new FormGroup({
      surname: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      name: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      middlename: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      phone: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      email: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      birth: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      group: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      stud: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
    });

    if (this.id){
      this.srv.getStudents().then(()=>{
        (this.srv.students).forEach(student=>{
          if (student.id === this.id){

            const item = student;
            delete item.id;
            this.studForm.setValue(item);
          }
          })
      })
    }
  }

}
