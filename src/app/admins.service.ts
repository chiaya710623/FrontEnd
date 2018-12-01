import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  constructor() {}
  admins = [
    {
      id: '1',
      display_name: '洪偉捷',
      discrimination: '',
      picture: 'assets/images/t1.jpg'
    },
    {
      id: '2',
      display_name: '吳宇宸',
      discrimination: '',
      picture: 'assets/images/t2.jpg'
    },
    {
      id: '3',
      display_name: '謝維毅',
      discrimination: '專業貓奴，負責前台後端(?',
      picture: 'assets/images/t3.jpg'
    },
    {
      id: '4',
      display_name: '黃千綾',
      discrimination: '抹茶控．負責前台前端部分',
      picture: 'assets/images/t4.jpg'
    },
  ];
}
