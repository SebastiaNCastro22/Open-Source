import { Component } from '@angular/core';
import { ParticipantsService } from 'src/app/shared/services/participants/participants.service';
import { CentersService } from 'src/app/shared/services/centers/centers.service';
import {Participant} from "../../../../shared/model/participant";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  marathonWinner: any;
  participants: Participant[] = [];
  centers:any;
  rankingToFind = 1;

  constructor(
    private participantsService:ParticipantsService,
    private centersService: CentersService) {  }
  ngOnInit(): void {
    this.participantsService.getAll()
      .subscribe((data:any) => {
        this.participants = data;
        // Getting the marathon winner data
        this.getMarathonWinner();
      });
    this.centersService.getAll()
      .subscribe((data:any) => {
        this.centers = data;
      });
  }

  getMarathonWinner() {
    if (this.participants){
      this.marathonWinner = this.participants.find((participant: any) => participant.ranking === this.rankingToFind);
    }
  }

  getCenterName(centerId: number): string {
    const center = this.centers.find((center: any) => center.id === centerId);
    return center ? center.name : '';
  }

}
