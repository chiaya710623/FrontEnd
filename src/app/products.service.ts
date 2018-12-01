import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
 show_list = {
    name: '',
    author_name: '',
    publisher: '',
    isbn: '',
    classification: ''
  };
  Today = new Date();
  getNewProducts() {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?publish_year=${this.Today.getFullYear}`);
  }
  getProducts(amount, page) {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?count=${amount}&current_page=${page}`);
  }
  getProduct(id) {
    return this.httpClient.get(`http://host.limaois.me:1723/api/products?id=${id}`);
  }

  // products = [
  //   {
  //     classification: '考試用書',
  //     id: '1',
  //     isbn: '9783456782135',
  //     name: '作為小豬',
  //     author: {
  //       name: '人',
  //       description: '是個有才華的朋友呢'
  //     },
  //     translator: '另一個人',
  //     publisher: '有家出版社',
  //     price: 200,
  //     description: '就是一本很好看的書呀',
  //     createdAt: '2018-04-11T21:58:27.358Z',
  //     updatedAt: '2018-05-11T21:58:27.358Z',
  //     photo: 'assets/images/m5.jpg',
  //     publish_year: 2018
  //   },
  //   {
  //     classification: '童書繪本',
  //     id: '2',
  //     isbn: '9783456734635',
  //     name: '小綿羊',
  //     author: {
  //       name: '阿低',
  //       description: '英雄不怕出生低'
  //     },
  //     translator: '阿督',
  //     publisher: '地下出版社',
  //     price: 290,
  //     description: '瑪莉有隻小綿羊',
  //     createdAt: '2013-06-11T21:58:27.358Z',
  //     updatedAt: '2018-05-14T21:58:27.358Z',
  //     photo: 'assets/images/m6.jpg',
  //     publish_year: 2018
  //   },
  //   {
  //     classification: '語言學習',
  //     id: '3',
  //     isbn: '9233455782135',
  //     name: 'お腹がすいた',
  //     author: {
  //       name: '小中大',
  //       description: '頭小身體大'
  //     },
  //     translator: '會日文的人',
  //     publisher: '高橋会社',
  //     price: 380,
  //     description: '肚子餓的時候學日文的效果不太好呢',
  //     createdAt: '2013-05-11T21:58:27.358Z',
  //     updatedAt: '2014-05-11T21:58:27.358Z',
  //     photo: 'assets/images/m7.jpg',
  //     publish_year: 2018
  //   },
  //   {
  //     classification: '文學叢書',
  //     id: '4',
  //     isbn: '9783456567135',
  //     name: '養生雞湯',
  //     author: {
  //       name: '廚師',
  //       description: '又會吃又會煮'
  //     },
  //     translator: '饕客',
  //     publisher: '美食出版社',
  //     price: 1000,
  //     description: '人生就像一碗好喝的雞湯',
  //     createdAt: '2003-05-11T16:58:27.358Z',
  //     updatedAt: '2007-12-11T21:58:27.358Z',
  //     photo: 'assets/images/m8.jpg',
  //     publish_year: 2018
  //   },
  //   {
  //     classification: '考試用書',
  //     id: '5',
  //     isbn: '9783456782135',
  //     name: '三隻小豬',
  //     author: {
  //       name: '人',
  //       description: '是個有才華的朋友呢'
  //     },
  //     translator: '另一個人',
  //     publisher: '有家出版社',
  //     price: 200,
  //     description: '就是一本很好看的書呀',
  //     createdAt: '2018-04-11T21:58:27.358Z',
  //     updatedAt: '2018-05-11T21:58:27.358Z',
  //     photo: 'assets/images/m5.jpg',
  //     publish_year: 2018
  //   },
  //   {
  //     classification: '童書繪本',
  //     id: '6',
  //     isbn: '9783456734635',
  //     name: '天使平底鍋',
  //     author: {
  //       name: '阿低',
  //       description: '英雄不怕出生低'
  //     },
  //     translator: '阿督',
  //     publisher: '地下出版社',
  //     price: 290,
  //     description: '瑪莉有隻小綿羊',
  //     createdAt: '2013-06-11T21:58:27.358Z',
  //     updatedAt: '2018-05-14T21:58:27.358Z',
  //     photo: 'assets/images/m6.jpg',
  //     publish_year: 2018
  //   },
  //   {
  //     classification: '語言學習',
  //     id: '7',
  //     isbn: '9233455782135',
  //     name: '幸運數字七',
  //     author: {
  //       name: '小中大',
  //       description: '頭小身體大'
  //     },
  //     translator: '隔壁鄰居',
  //     publisher: '高橋会社',
  //     price: 380,
  //     description: '肚子餓的時候學日文的效果不太好呢',
  //     createdAt: '2013-05-11T21:58:27.358Z',
  //     updatedAt: '2014-05-11T21:58:27.358Z',
  //     photo: 'assets/images/m7.jpg',
  //     publish_year: 2015
  //   },
  //   {
  //     classification: '文學叢書',
  //     id: '8',
  //     isbn: '9783456567135',
  //     name: '望著你那窄窄的背影',
  //     author: {
  //       name: '旺旺',
  //       description: '咚咚咚咚鏘'
  //     },
  //     translator: '愛讀書的人',
  //     publisher: '愛悅出版社',
  //     price: 1700,
  //     description: '一個猶豫要不要多吃一點的故事',
  //     createdAt: '2003-05-11T16:58:27.358Z',
  //     updatedAt: '2007-12-11T21:58:27.358Z',
  //     photo: 'assets/images/m3.jpg',
  //     publish_year: 2015
  //   },
  //   {
  //     classification: '考試用書',
  //     id: '9',
  //     isbn: '9232356782135',
  //     name: '如何當個好工具',
  //     author: {
  //       name: '工具人',
  //       description: '頭小身體大'
  //     },
  //     translator: '隔壁鄰居',
  //     publisher: '高橋会社',
  //     price: 380,
  //     description: '在天上',
  //     createdAt: '2011-05-11T21:58:27.358Z',
  //     updatedAt: '2013-05-11T21:58:27.358Z',
  //     photo: 'assets/images/m2.jpg',
  //     publish_year: 2015
  //   },
  //   {
  //     classification: '童書繪本',
  //     id: '10',
  //     isbn: '9783456567234',
  //     name: '小魚與小蝦',
  //     author: {
  //       name: '派大興',
  //       description: '住在海裡'
  //     },
  //     translator: '饕客',
  //     publisher: '美食出版社',
  //     price: 105,
  //     description: '小魚跟小蝦很可愛，所以要吃掉',
  //     createdAt: '2005-05-11T16:58:27.358Z',
  //     updatedAt: '2007-12-11T21:58:27.358Z',
  //     photo: 'assets/images/m1.jpg',
  //     publish_year: 2015
  //   },
  //   {
  //     classification: '漫畫',
  //     id: '11',
  //     isbn: '9783374682135',
  //     name: '小豬與我',
  //     author: {
  //       name: '寶特瓶',
  //       description: '是個有腰身的朋友呢'
  //     },
  //     translator: '阿愣',
  //     publisher: '天堂出版社',
  //     price: 200,
  //     description: '就是一本很好看的書呀',
  //     createdAt: '2011-04-11T21:58:27.358Z',
  //     updatedAt: '2013-07-01T21:58:27.358Z',
  //     photo: 'assets/images/m7.jpg',
  //     publish_year: 2015
  //   },
  //   {
  //     classification: '雜誌',
  //     id: '12',
  //     isbn: '9783456734000',
  //     name: 'Women`s Style',
  //     author: {
  //       name: '寶寶',
  //       description: '氣死寶寶了'
  //     },
  //     translator: '嘎嘎',
  //     publisher: '地下出版社',
  //     price: 210,
  //     description: '教妳地下時尚',
  //     createdAt: '2013-06-11T21:58:27.358Z',
  //     updatedAt: '2014-12-14T21:58:27.358Z',
  //     photo: 'assets/images/m1.jpg',
  //     publish_year: 2016
  //   },
  //   {
  //     classification: '文具',
  //     id: '13',
  //     isbn: '9233455222135',
  //     name: '一枝筆一張紙一顆心',
  //     author: {
  //       name: '阿創',
  //       description: '是個創作者來著'
  //     },
  //     translator: '阿創的鄰居',
  //     publisher: '文創文創',
  //     price: 3809,
  //     description: '學習的好幫手，最佳文具套組',
  //     createdAt: '2015-05-11T21:58:27.358Z',
  //     updatedAt: '2016-07-04T22:28:27.358Z',
  //     photo: 'assets/images/m2.jpg',
  //     publish_year: 2016
  //   },
  //   {
  //     classification: '文學叢書',
  //     id: '14',
  //     isbn: '9783456567125',
  //     name: '養生雞湯2',
  //     author: {
  //       name: '廚師',
  //       description: '又會吃又會煮'
  //     },
  //     translator: '饕客',
  //     publisher: '美食出版社',
  //     price: 10900,
  //     description: '人生就像兩碗好喝的雞湯',
  //     createdAt: '2012-05-11T16:38:27.358Z',
  //     updatedAt: '2014-13-11T21:58:27.358Z',
  //     photo: 'assets/images/m3.jpg',
  //     publish_year: 2016
  //   },
  //   {
  //     classification: '小說',
  //     id: '15',
  //     isbn: '9783452959135',
  //     name: '我和你的故事',
  //     author: {
  //       name: '我',
  //       description: '我就是我'
  //     },
  //     translator: '你',
  //     publisher: '故事出版社',
  //     price: 285,
  //     description: '你懂的',
  //     createdAt: '2000-04-11T21:58:27.258Z',
  //     updatedAt: '2001-05-11T21:58:27.458Z',
  //     photo: 'assets/images/m5.jpg',
  //     publish_year: 2016
  //   },
  //   {
  //     classification: '童書繪本',
  //     id: '16',
  //     isbn: '9783456734445',
  //     name: '天使平底鍋',
  //     author: {
  //       name: '阿低',
  //       description: '英雄不怕出生低'
  //     },
  //     translator: '阿督',
  //     publisher: '地下出版社',
  //     price: 770,
  //     description: '瑪莉有隻小綿羊',
  //     createdAt: '2013-06-11T21:58:27.358Z',
  //     updatedAt: '2018-05-14T21:58:27.358Z',
  //     photo: 'assets/images/m6.jpg',
  //     publish_year: 2017
  //   },
  //   {
  //     classification: '小說',
  //     id: '17',
  //     isbn: '9233445682135',
  //     name: '果果新語',
  //     author: {
  //       name: '果果',
  //       description: '好吃'
  //     },
  //     translator: '隔壁鄰居',
  //     publisher: '高橋会社',
  //     price: 70,
  //     description: '肚子餓的時候學日文的效果不太好呢',
  //     createdAt: '2013-05-11T21:58:27.358Z',
  //     updatedAt: '2014-05-11T21:58:27.358Z',
  //     photo: 'assets/images/m7.jpg',
  //     publish_year: 2017
  //   },
  //   {
  //     classification: '漫畫',
  //     id: '18',
  //     isbn: '9783345267135',
  //     name: '偵探online',
  //     author: {
  //       name: '廚師',
  //       description: '又會吃又會煮'
  //     },
  //     translator: '饕客',
  //     publisher: '美食出版社',
  //     price: 1670,
  //     description: '人生就像一碗好喝的雞湯',
  //     createdAt: '2001-05-11T16:58:27.358Z',
  //     updatedAt: '2009-12-11T21:58:27.358Z',
  //     photo: 'assets/images/m8.jpg',
  //     publish_year: 2017
  //   },
  //   {
  //     classification: '雜誌',
  //     id: '19',
  //     isbn: '9232456782135',
  //     name: '阿里巴巴',
  //     author: {
  //       name: '巴巴',
  //       description: '頭小身體大'
  //     },
  //     translator: '阿里',
  //     publisher: '高橋会社',
  //     price: 350,
  //     description: '在天上',
  //     createdAt: '2011-05-11T21:58:27.358Z',
  //     updatedAt: '2013-05-11T21:58:27.358Z',
  //     photo: 'assets/images/m2.jpg',
  //     publish_year: 2017
  //   },
  //   {
  //     classification: '童書繪本',
  //     id: '20',
  //     isbn: '9783456567234',
  //     name: '深海的魚雷',
  //     author: {
  //       name: '海龜',
  //       description: '住在海裡'
  //     },
  //     translator: '饕客',
  //     publisher: '美食出版社',
  //     price: 345,
  //     description: '小魚跟小蝦很可愛，所以要吃掉',
  //     createdAt: '2005-05-11T16:58:27.358Z',
  //     updatedAt: '2007-12-11T21:58:27.358Z',
  //     photo: 'assets/images/m1.jpg',
  //     publish_year: 2017
  //   }
  // ];
  // originalProducts = this.products;
  // show_list = {
  //   name: '',
  //   author_name: '',
  //   publisher: '',
  //   isbn: '',
  //   classification: ''
  // };

  search(keyword_list) {
  //   this.products = this.originalProducts;
  //   // tslint:disable-next-line:forin
  //   for (const key in keyword_list) {
  //     switch (key) {
  //       case 'name':
  //         if (keyword_list[key].trim() !== '') {
  //           this.products = this.products.filter(
  //             products => products.name.indexOf(keyword_list[key]) !== -1
  //           );
  //         }
  //         break;
  //       case 'author_name':
  //         if (keyword_list[key].trim() !== '') {
  //           this.products = this.products.filter(
  //             products => products.author.name.indexOf(keyword_list[key]) !== -1
  //           );
  //         }
  //         break;
  //       case 'publisher':
  //         if (keyword_list[key].trim() !== '') {
  //           this.products = this.products.filter(
  //             products => products.publisher.indexOf(keyword_list[key]) !== -1
  //           );
  //         }
  //         break;
  //       case 'isbn':
  //         if (keyword_list[key].trim() !== '') {
  //           this.products = this.products.filter(
  //             products => products.isbn.indexOf(keyword_list[key]) !== -1
  //           );
  //         }
  //         break;
  //       case 'classification':
  //         if (keyword_list[key].trim() !== '') {
  //           this.products = this.products.filter(
  //             products =>
  //               products.classification.indexOf(keyword_list[key]) !== -1
  //           );
  //         }
  //         break;
  //     }
  //   }
    this.show_list = keyword_list;
  }
  // origin() {
  //   this.products = this.originalProducts;
  //   this.show_list = {
  //     name: '',
  //     author_name: '',
  //     publisher: '',
  //     isbn: '',
  //     classification: ''
  //   };
  // }
  // sort(choice) {
  //   switch (choice) {
  //     case '1': // 價錢高到低
  //       for (let i = 0; i < this.products.length; i++) {
  //         for (let j = 1; j < this.products.length - i; j++) {
  //           if (this.products[j].price > this.products[j - 1].price) {
  //             const t = this.products[j];
  //             this.products[j] = this.products[j - 1];
  //             this.products[j - 1] = t;
  //           }
  //         }
  //       }
  //       break;
  //     case '2': // 價錢低到高
  //       for (let i = 0; i < this.products.length; i++) {
  //         for (let j = 1; j < this.products.length - i; j++) {
  //           if (this.products[j].price < this.products[j - 1].price) {
  //             const t = this.products[j];
  //             this.products[j] = this.products[j - 1];
  //             this.products[j - 1] = t;
  //           }
  //         }
  //       }
  //       break;
  //   }
  // }
}
