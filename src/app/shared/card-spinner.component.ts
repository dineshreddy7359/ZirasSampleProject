import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-card-spinner',
    template: `<div class="card-preloader">
        <div class="text-center">{{message}}</div>
        <div class="card-spinner">
        <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
    encapsulation: ViewEncapsulation.None
})
export class CardSpinnerComponent implements OnDestroy {
    
    public isSpinnerVisible = true;

    @Input() public backgroundColor = 'rgba(0, 115, 170, 0.69)';
    @Input() public message = 'Please wait...';

    constructor() { }

    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }

}
