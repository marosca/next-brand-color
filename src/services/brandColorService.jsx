import { BehaviorSubject } from "rxjs";
import React from "react";

const TIME = 2000;
const YOIGO_COLORS = ["purple", "blue", "green", "orange"];

export const BrandColorContext = React.createContext();
export default class BrandColorService {
  interval; //: any
  brandColorObservable$; //: Observable<string>

  constructor() {
    let index = 0;
    this.brandColorObservable$ = new BehaviorSubject(YOIGO_COLORS[0]);
    this.interval = setInterval(() => {
      if (index === YOIGO_COLORS.length - 1) {
        index = 0;
      } else {
        index++;
      }
      this.brandColorObservable$.next(YOIGO_COLORS[index]);
    }, TIME);
  }
}