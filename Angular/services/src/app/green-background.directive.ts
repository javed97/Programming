import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appGreenBackground]'
})
export class GreenBackgroundDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = "green";
  }


}
