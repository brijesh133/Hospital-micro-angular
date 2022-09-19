import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';

import { PatientServiceService } from './components/patient-service.service';

describe('PatientServiceService', () => {
  
  let service: PatientServiceService;
  let httpclientspy:jasmine.SpyObj<HttpClient>;
  let Pat=[
    {
        "id": 1,
        "name": "Tim",
        "visitedDoc": "Brijesh",
        "dtOfVisit": "2019-04-28T14:45:15.000+00:00",
        "prescription": "Lets see"
    },
    {
        "id": 2,
        "name": "Tim",
        "visitedDoc": "Abcd",
        "dtOfVisit": "2019-04-28T14:45:15.000+00:00",
        "prescription": "Lets see"
    },
    {
        "id": 3,
        "name": "Tim",
        "visitedDoc": "punith",
        "dtOfVisit": "2019-04-28T14:45:15.000+00:00",
        "prescription": "Lets see"
    },
    {
        "id": 4,
        "name": "Test",
        "visitedDoc": "omkar",
        "dtOfVisit": "2019-04-28T14:45:15.000+00:00",
        "prescription": "Lets see"
    },
    {
        "id": 5,
        "name": "rahul",
        "visitedDoc": "gagan",
        "dtOfVisit": "2022-09-29T00:00:00.000+00:00",
        "prescription": "how"
    }
];
  beforeEach(() => {
    httpclientspy=jasmine.createSpyObj('HttpClient',['get']);
    service=new PatientServiceService(httpclientspy);
  });

  describe('getPatientList()', () => {
   it('should get correct size expected patinet',()=>{

    httpclientspy.get.and.returnValue(of(Pat));
    service.getPatientList().subscribe({
      next: (pati)=>{
        expect(pati.length).toEqual(Pat.length)
      },
      error:()=>{},
    });
    expect(httpclientspy.get).toHaveBeenCalledTimes(1);
   })
  })

})