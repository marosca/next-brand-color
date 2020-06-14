import { BehaviorSubject } from "rxjs";
import React, { useEffect } from "react";

const TIME = 2000;
const YOIGO_COLORS = ["purple", "blue", "green", "orange"];

export const BrandColorContext = React.createContext();
let brandColorService

const BrandColorProvider = ({ children }) => {
  brandColorService = brandColorService ? brandColorService : new BrandColorService();

  useEffect(() => {
    return () => {
      clearInterval(brandColorService.interval);
    };
  }, [])

  return (
    <BrandColorContext.Provider value={brandColorService.brandColorObservable$}>
      {children}
    </BrandColorContext.Provider>
  );
}

class BrandColorService {
  interval; //: any
  index = 0
  brandColorObservable$ = new BehaviorSubject(YOIGO_COLORS[this.index]);

  constructor() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.brandColorObservable$.next(YOIGO_COLORS[this.index]);
        if (this.index === YOIGO_COLORS.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
        console.log('indice', this.index)
      }, TIME);
    }
  }
}

export default BrandColorProvider