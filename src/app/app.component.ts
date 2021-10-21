import { Component } from '@angular/core';
import { EmpservService } from './service/empserv.service';
import { observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empls';

  employee: any [] = [];
  employeename: string | any;
  employeeage: number | any;
  employeeadd: string | any;
  message:string |any;
  record: any[] = [];

  constructor(public EmpsevService: EmpservService){
    this.record=[];
  }

  ngOnInit(): void {

    this.EmpsevService.get_allemp().subscribe( (data: any[]) =>{
      this.employee = data; data.map( e => {
        return
        {
          id: e.payload.doc.id;
          name: e.payload.doc.data()['name'];
          age: e.payload.doc.data()['age'];
          address: e.payload.doc.data()['address'];

        };
      }) 
      console.log(this.employee);
    })
    
  }

  creatrecord(){

    // this.record = {};
    this.record.push(this.employeename);
    this.record.push(this.employeeage);
    this.record.push(this.employeeadd);

    this.EmpsevService.create_NewEmploye(this.record).then(res =>{
      this.employeename="";
      this.employeeage=undefined;
      this.employeeadd="";
      this.message="Employe data save done";
      console.log(res);

    }).catch(error => {
      console.log(error);
    }) 
  }
}
