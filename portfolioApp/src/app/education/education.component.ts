import { Component } from '@angular/core';
import { Education } from '../model/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationList:Education[]=[
    {
      institute:'Vidya Vihar Institute Of Technology',
      course:'B.tech(CSE)',
      duration:'2018-2022',
      score:'7.93 CGPA',
    },
    {
      institute:'G.C.S.S college Ranipatra',
      course:'Higher Secondary',
      duration:'2016-18',
      score:'50%',
    },
    {
      institute:'B.R.V high school Sahkol',
      course:'Secondary',
      duration:'2016',
      score:'60%',
    }
  ]

}
