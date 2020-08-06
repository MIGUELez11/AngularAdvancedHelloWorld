import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userName: string;
  constructor(private _globalService: GlobalsService) { }

  ngOnInit(): void {
    this.userName = this._globalService.getUserName((value) => this.userName = value);
  }

}
