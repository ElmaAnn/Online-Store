import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private dataSource: RestDataSource) {}

  //Authenticate method will receive User/Admin Credentials
  authenitcate(username: string, password: string): Observable<boolean> {
    return this.dataSource.authenticate(username, password);
  }
  //Authenticated Property Getter only
  get authenticated(): boolean {
    return this.dataSource.auth_token != null;
  }

  //Clear will remove the token from the data source
  clear() {
    this.dataSource.auth_token = null;
  }
}
