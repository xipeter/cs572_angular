import { Product } from './product';

enum kind { new, used, discontinued };

export const Products: Product[]=[
    {
        id:1,name:'computer',
        description:'my mac',
        price:5000.99,
        condition: kind.new,
        category:'laptop'
      },
      {
        id:2,
        name:'iphone',
        description:'my iphone',
        price:3000,
        condition: kind.new,
        category:'cell phone'
      },
      {
        id:3,
        name:'wallet',
        description:'my bag',
        price:1000,
        condition: kind.new,
        category:'bag'
      },
      {
        id:4,
        name:'pen',
        description:'my pen',
        price:200,
        condition: kind.new,
        category:'pen'
      },
      {
        id:5,
        name:'tv',
        description:'my tv',
        price:3200,
        condition: kind.new,
        category:'tv'
      },
      {
        id:6,
        name:'headphone',
        description:'my headphone',
        price:400,
        condition: kind.new,
        category:'headphone'
      }
];