import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  private _siteName: string = "FIRST ANGULAR";
  private _userName: string = "World";
  private userName$: EventEmitter<string> = new EventEmitter();
  constructor() { }

  get siteName(): string {
    return this._siteName;
  }

  set userName(value) {
    if (this._userName !== value) {
      this._userName = value;
      this.userName$.emit(value);
    }
  }

  public getUserName(f: Function) {
    this.userName$.subscribe(f)
    return this._userName;
  }
}
