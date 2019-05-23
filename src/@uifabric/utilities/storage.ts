import { getWindow } from './dom/getWindow';

export class LocalStorage {
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
public static getItem = (key: string): string | null => {
  let result = null;
  try {
    const win = getWindow();
    result = win ? win.localStorage.getItem(key) : null;
  } catch (e) {
    /* Eat the exception */
  }
  return result;
}

/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
public static setItem = (key: string, data: string): void =>{
  try {
    const win = getWindow();

    win && win.localStorage.setItem(key, data);
  } catch (e) {
    /* Eat the exception */
  }
}
}

export class SessionStorage {
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
public static getItem = (key: string): string | null => {
  let result = null;
  try {
    result = window.sessionStorage.getItem(key);
  } catch (e) {
    /* Eat the exception */
  }
  return result;
}

/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
public static setItem = (key: string, data: string): void =>{
  try {
    window.sessionStorage.setItem(key, data);
  } catch (e) {
    /* Eat the exception */
  }
}
}