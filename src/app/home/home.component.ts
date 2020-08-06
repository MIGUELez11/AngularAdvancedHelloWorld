import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _name = "";
  constructor(private _globalService: GlobalsService) { }
  
  get userName() {
    return this._name;
  }

  set userName(value) {
      this._globalService.userName = value;
  }

  ngOnInit(): void {
    this._name = this._globalService.getUserName((value) => this._name = value);
  }

}
