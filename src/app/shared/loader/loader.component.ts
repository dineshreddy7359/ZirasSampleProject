import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  @Input() public isLoading: boolean;
  @Input() public pageLoad: boolean;
  @Input() public message = 'Please wait...';

  Subscription: Subscription;

  constructor(private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef
  ) {
    this.Subscription = loaderService.loader$.subscribe(data => {
      if(this.isLoading !== data.isLoading) {
        this.isLoading = data.isLoading;
        this.cdRef.detectChanges();
      }
      this.message = data.message;
      this.pageLoad = data.pageLoad;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}
