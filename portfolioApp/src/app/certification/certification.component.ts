import { Component } from '@angular/core';
import { Certifications } from '../model/models';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {

  certificationList:Certifications[]=[

    {
      name:'Full Stack Java Developement',
      place:'NIIT TECHNOLOGIES',
      duration:'6 MONTHS',
      description:[
        'This was end to end web development course.'
        ,'There I learn all the technologies and skills which is required for full-stack development.'
      ]
    }
  ]

}
