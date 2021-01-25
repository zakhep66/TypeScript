import {Injectable} from '@angular/core';
import {Student} from '../service/studentmodel';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SrvService {
  students: Student[] = [];
  studentsadd: Student[] = [];
  studentsedit: Student[] = [];
  link = 'http://localhost:3000/posts/';
  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(public http: HttpClient) {
  }

  async getStudents() {
    this.students = [];
    
   const data = await this.http
     .get(this.link)
     .toPromise();

    for (const index in data) {
      delete data[index].createdAt;
      delete data[index].updatedAt;
      this.students.push(data[index]);
    }
    
  }

  async addStudent(student: Student) {
    this.studentsadd = [];
    const dataadd = await this.http
    .get(this.link)
    .toPromise();

   for (const index in dataadd) {
     delete dataadd[index].createdAt;
     delete dataadd[index].updatedAt;
     this.studentsadd.push(dataadd[index]);
   }



    return this.http.post(this.link, student, this.options).toPromise();
  }

  async removeStudent(id: number) {
    let linkdel = this.link + id;
    return this.http.request('delete', linkdel, {body: {id}}).toPromise();
  }

  async editStudent(phone: Student) {
    this.studentsedit = [];
    const dataedit = await this.http
    .get(this.link)
    .toPromise();

   for (const index in dataedit) {
     delete dataedit[index].createdAt;
     delete dataedit[index].updatedAt;
     this.studentsedit.push(dataedit[index]);
   }
   
     let link = this.link + phone.id;
    return this.http.put(link, phone, this.options).toPromise();
  }
}
