import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  products = [
    {
      classification: '考試用書',
      id: 1,
      isbn: 9783456782135,
      name: '三隻小豬',
      author: {
        name: '人',
        description: '是個有才華的朋友呢'
      },
      translator: '另一個人',
      publisher: '有家出版社',
      price: 200,
      description: '就是一本很好看的書呀',
      createdAt: '2018-04-11T21:58:27.358Z',
      updatedAt: '2018-05-11T21:58:27.358Z',
      photo: 'assets/images/m5.jpg'
    },
    {
      classification: '童書繪本',
      id: 2,
      isbn: 9783456734635,
      name: '小綿羊',
      author: {
        name: '阿低',
        description: '英雄不怕出生低'
      },
      translator: '阿督',
      publisher: '地下出版社',
      price: 290,
      description: '瑪莉有隻小綿羊',
      createdAt: '2013-06-11T21:58:27.358Z',
      updatedAt: '2018-05-14T21:58:27.358Z',
      photo: 'assets/images/m6.jpg'
    },
    {
      classification: '語言學習',
      id: 3,
      isbn: 9233455782135,
      name: 'お腹がすいた',
      author: {
        name: '小中大',
        description: '頭小身體大'
      },
      translator: '會日文的人',
      publisher: '高橋会社',
      price: 380,
      description: '肚子餓的時候學日文的效果不太好呢',
      createdAt: '2013-05-11T21:58:27.358Z',
      updatedAt: '2014-05-11T21:58:27.358Z',
      photo: 'assets/images/m7.jpg'
    },
    {
      classification: '文學叢書',
      id: 4,
      isbn: 9783456567135,
      name: '養生雞湯',
      author: {
        name: '廚師',
        description: '又會吃又會煮'
      },
      translator: '饕客',
      publisher: '美食出版社',
      price: 1000,
      description: '人生就像一碗好喝的雞湯',
      createdAt: '2003-05-11T16:58:27.358Z',
      updatedAt: '2007-12-11T21:58:27.358Z',
      photo: 'assets/images/m8.jpg'
    },
  ];
}
