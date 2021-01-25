import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-stud-filter',
  templateUrl: './stud-filter.component.html',
  styleUrls: ['./stud-filter.component.css']
})
export class StudFilterComponent {
  @Output() FilterStudentsList= new EventEmitter<object>();

  searching={
    surname: '',
  }

  constructor() { }

  onFilterStudentsList(){
    this.FilterStudentsList.emit(this.searching);
  }


}
