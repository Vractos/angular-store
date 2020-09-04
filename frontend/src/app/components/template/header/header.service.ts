import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<IHeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): IHeaderData {
    return this._headerData.value
  }

  set headerData(headerData: IHeaderData) {
    this._headerData.next(headerData)
  }
}
