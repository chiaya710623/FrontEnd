import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  getOrders() {
    return this.httpClient.get(`http://host.limaois.me:1723/api/orders`, {
      'headers': new HttpHeaders({
        'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9ob3N0LmxpbWFvaXMubWU6MTcyM1wvYXBpXC9sb2dpbiIsImlhdCI6MTU0MzY0NjY2MSwiZXhwIjoxNTQzNjUwMjYxLCJuYmYiOjE1NDM2NDY2NjEsImp0aSI6Im1mbUdTZ1NuU2tKREZ5WW0iLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gQ0S0MNKs02UxL2yZO7t00t_yzHO6meK_PDqxOKBtI0'
      })
    });
  }

}
