import { Component } from '@angular/core';
import {ParticipantsService} from "../../shared/services/participants/participants.service";
import {CentersService} from "../../shared/services/centers/centers.service";

@Component({
  selector: 'app-marathon',
  templateUrl: './marathon.component.html',
  styleUrls: ['./marathon.component.css']
})
export class MarathonComponent {

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'centerId',
    'ranking',
    'recordTime'
  ];
  dataSource: any;
  centers: any;
  constructor(
    private participantsService:ParticipantsService,
    private centersService: CentersService) {  }
  ngOnInit(): void {
    this.participantsService.getAll()
      .subscribe((data:any) => {
        this.dataSource = data;
      });
    this.centersService.getAll()
      .subscribe((data:any) => {
        this.centers = data;
      });

  }
  getCenterName(centerId: number): string {
    const center = this.centers.find((center: any) => center.id === centerId);
    return center ? center.name : '';
  }

}
