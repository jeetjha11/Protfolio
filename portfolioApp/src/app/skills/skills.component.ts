import { Component } from '@angular/core';
import { Skills } from '../model/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillList:Skills[]=[
    {
      name:'Java,Java-8',
      level:'Advanced',
      rating:97,
    },
    {
      name:'Angular, Angular Material',
      level:'Intermidiate',
      rating:75,
    },
    {
      name:'HTML,CSS,Javascript',
      level:'Intermidiate',
      rating:95,
    },
    {
      name:'Spring, Spring-Boot',
      level:'Intermidiate',
      rating:90,
    },
    {
      name:'Sql,No-Sql,MongoDB',
      level:'Intermidiate',
      rating:90,
    },
    {
      name:'Microservice,Docker',
      level:'Advanced',
      rating:95,
    },
    {
      name:'Junit,Mocito',
      level:'Beginner',
      rating:50,
    }
  ]

}
