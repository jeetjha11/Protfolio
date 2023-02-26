import { Component } from '@angular/core';
import { Projects } from '../model/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projectList:Projects[]=[
    {
      title:'JukeBox Music Player(console bassed)',
      technologies:'Java,Sql',
      descriptions:[
        'It is a console-based project where I used Java And Java 8 features',
        'In this project I used database SQL as a back end to store user data it is a stand-alone project',
        'Users can play the music user can listen to the music user can pause the music user can make a playlist multiple playlists users can delete the playlist these all are the features of this project.'

      ]
    },
    {
      title:'Kanban Board(Project Management Tool)',
      technologies:'Java,Angular,Spring,Spring-boot,MongoDB,Sql,Docker,Microservice',
      descriptions:[
        'It is a project management web application tool.',
        'Itwill track the progress of a project and the deadline of the project. This project has a user-friendly Interface for interacting with the app we have enhanced the chatbot functionality for user help.',
        
      ]
    },
    {
      title:'Library Management System',
      technologies:'Java,Angular,Spring,Spring-boot,MongoDB,Sql,Docker,Microservice',
      descriptions:[
        'It is a console-based project where I used Java And Java 8 features. In this project I used database SQL as a back end to store user data it is a stand-alone project.',
        'The student can register himself in the library after that he is able to issue the book and submit the book he can see the book that he has issued. Students can search the book according to the name Author and Genre.',
        'This application is a role-based application.',
        ' I am still working on this project to add multiple functionalities like chatbot and the location with providing online pdf etc.'
        
      ]
    },
    

  ]

}
