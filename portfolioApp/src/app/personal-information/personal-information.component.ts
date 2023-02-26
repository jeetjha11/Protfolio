import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {

  myData: string[][] = [
    ['Name', 'Jeet Kumar Jha'],
    ['DOB', '02/10/2000'],
    ['Work Exp', 'Fresher'],
    ['Education', 'B.tech(2022'],
    ['interests', 'Chess'],
  ];

  aboutMe: string[] = [
    'I am Jeet I have done B.Tech from Vidya Vihar Institute of Technology.',
    'After that, I enrolled in the course NIIT which was a full-stack Java developer course there I have learned Java at the basic level and the advanced level.',
    'I am having the command on Angular CSS HTML JavaScript type script spring boot spring Mockito Junit microservices docker.',
    'I am having command of SQL and no SQL both databases I have done a couple of projects on these technologies.'
  ];


}
