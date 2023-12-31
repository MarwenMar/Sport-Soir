import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  // Object
  stadium : any ={};

  // FORM ID
  stadiumForm: FormGroup;
  constructor(private stadiumService: StadiumService) { }

  ngOnInit() {
  }

  addStadium() {
    console.log("Here stadium object", this.stadium);
    this.stadiumService.addStadium(this.stadium).subscribe(
      (response) => {
        console.log("Here response from BE", response.msg);
      });
  }

}
