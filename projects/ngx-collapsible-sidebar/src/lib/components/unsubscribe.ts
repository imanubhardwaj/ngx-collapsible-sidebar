import {OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

export abstract class Unsubscribe implements OnDestroy {
  protected destroyed$ = new Subject();

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
