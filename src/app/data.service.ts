import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodo } from './interface/model';

// interface IProduct {
//   id: number;
//   name: string;
//   description: string;
//   price: string;
// }

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  // products: IProduct;
  todos: ITodo;
  constructor() {}

  createDb() {
    return {
      todos: [
        {
          id: 1,
          content: 'create the ngrx version of the app',
        },
        {
          id: 2,
          content: 'feed your dog with all the foods he loves',
        },
        {
          id: 3,
          content: 'go to the clinic to have a checkup with Dr. Bean',
        },
      ],
    };
  }
}
