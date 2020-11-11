import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() { }

  /**
   * @description function for seting data to local Storage
   * @param key key to store data
   * @param value value what to store
   */
  setData(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  /**
   * @description Function to get data from localstorage .
   */
  getStoredJsonData(key): any | false {
    const data = this.getData(key);
    if (data && data.length > 20) {
      return JSON.parse(data);
    } else {
      return false;
    }
  }

  /**
   * @description function for getting data from localstorage.
   * @param key key where data is stored.
   */
  getData(key: string): any {
    return window.localStorage.getItem(key);
  }

  /**
   * @description function to remove stored data in localstorage.
   * @param key key to get value.
   */
  remove(key: string) {
    window.localStorage.removeItem(key);
  }
}
