import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }

  getArray(){
    return ["author1","author2","author3"]
  }
}
