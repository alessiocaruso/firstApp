export interface Person {
  id: number;
  name: string;
  rule: string;
  image: string;
  logo: string;
  key: string;
  numeroTel: string;
  description: string;
}

export const people = [
  {
    id:1,
    name: 'Alessio Caruso',
    rule: 'Solution Developer',
    image: 'https://cdn.pixabay.com/photo/2019/10/17/08/40/person-4556344_1280.jpg',
    logo: 'https://static.vecteezy.com/system/resources/thumbnails/002/206/015/small/developer-working-icon-free-vector.jpg',
    key: 'alessio',
    numeroTel: '+3933322211',
    description: 'Deals with software development'
  },
  {
    id:2,
    name: 'Ylenia Morra',
    rule: 'Graphic Designer',
    image: 'https://media.internazionale.it/images/2016/02/04/120867-md.jpg',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGIwgJT74A3kEo-ca0ZmymNe5trZ04OehrqoWLXfJOLFIs-xNCxstpjIZiqJy8ry8p7M&usqp=CAU',
    key: 'ylenia',
    numeroTel: '+3933344455',

    description: 'Takes care of the graphic side'
  },
  {
    id:3,
    name: 'Leonardo Esposito',
    rule: 'Team Leader',
    image: 'https://get.pxhere.com/photo/man-person-suit-people-male-young-spring-corporate-office-fashion-professional-business-clothing-jacket-outerwear-tuxedo-gentleman-footwear-boss-owner-leadership-businessman-executive-entrepreneur-photo-shoot-successful-manager-formal-wear-businessperson-868229.jpg',
    logo: 'https://www.pngitem.com/pimgs/m/642-6422887_manager-manager-icon-png-transparent-png.png',
    key: 'leonardo',
    numeroTel: '+39333666777',

    description: 'Takes care of team management'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/