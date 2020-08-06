import { Component, OnInit } from '@angular/core';
import {GlobalsService} from "../services/globals.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public siteName: string;
  constructor(private _globalService: GlobalsService) { }

  ngOnInit(): void {
    this.siteName = this._globalService.siteName;
  }

}
