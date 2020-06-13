import { BehaviorSubject } from "rxjs";
import React from "react";

const TIME = 2000;
export const BrandColorContext = React.createContext();

export default class BrandColorService {
  interval; //: any
  brandColorObservable$; //: Observable<string>
  colors = ["purple", "blue", "green", "orange"];
  currentColor = 'purple'
  currentIdx = 0;

  constructor() {
    this.brandColorObservable$ = new BehaviorSubject(this.currentColor);
    this.interval = setInterval(() => {
      if (this.currentIdx === this.colors.length - 1) {
        this.currentIdx = 0;
      } else {
        this.currentIdx++;
      }
      this.currentColor = this.colors[this.currentIdx]
      this.brandColorObservable$.next(this.currentColor);
    }, TIME);
  }
}
