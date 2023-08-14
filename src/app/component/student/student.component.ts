import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // declare a variable named studentList to store Student details as Array
  studentList:Student[] = new Array<Student>();
  // declare a variable named filterData to store Student details as Array
  filterData:Student[] = new Array<Student>();
  
  // Create a constructor and inject studentService class
  constructor(private studentService: StudentService) { }

  // OnInit() to call getStudentDetails() of studentService and store data in studentList variable
  ngOnInit(): void {
    this.studentService.getStudentDetails().subscribe((data) => {
      // Store data in studentList
      this.studentList = data;
      // call noFilter()
      this.noFilter();
    });
  }

  // Create a method named noFilter() to store studentList into filterData variable
  noFilter() {
    this.filterData=this.studentList;
  }

  // Create a method named ageGreaterThan25 to filter student details with age greater than 25
  ageGreaterThan25(){
    // Apply filter on studentList to filter student whose age greater than 25
    this.filterData = this.studentList.filter((student) => student.age > 25);
  }
  // Create a method named nameStartsWitha to filter student details with name start with a||A
  nameStartsWitha(){
    // Apply filter on studentList to filter student name starts with a or A and return data
    this.filterData = this.studentList.filter((student) => {
      return student.name.charAt(0)=="a" || student.name.charAt(0)=="A"
    });
  }
}
