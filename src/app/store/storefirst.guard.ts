import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { StoreComponent } from './store.component';

@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) {}

  canActivate(
    actRouteSnap: ActivatedRouteSnapshot,
    stateSnapshot: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (actRouteSnap.component != StoreComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
