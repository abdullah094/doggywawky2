import AsyncStorage from '@react-native-async-storage/async-storage';
import instance, { BACKEND_URL } from '../api/apis';

export const _saveData = async tokenWithData => {
  try {
    const data = JSON.stringify(tokenWithData);
    await AsyncStorage.setItem('tokenWithData', data);
  } catch (e) {
    alert('Something went wrong');
  }
};

export const _removeData = async () => {
  await AsyncStorage.removeItem('tokenWithData');
};

export const _getData = async () => {
  try {
    const value = await AsyncStorage.getItem('tokenWithData');
    if (value !== null) {
      return JSON.parse(value);
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const _saveLanguage = async language  => {
  try {
    await AsyncStorage.setItem('@language', language);
    instance.defaults.baseURL = `${BACKEND_URL}/${language}/api`;
  } catch (e) {
    alert('Something went wrong');
  }
};


export const _getLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem('@language');
    if (value !== null) {
      instance.defaults.baseURL = `${BACKEND_URL}/${value}/api`;
      return value;
    }
    else return 'en';
  } catch (e) {
    return 'en';
  }
};


export const _saveCart = async cart  => {
  try {
    const data = JSON.stringify(cart);
    await AsyncStorage.setItem('@myCart', data);
  } catch (e) {
    alert('Something went wrong');
  }
};

export const _removeMyCart = async () => {
  await AsyncStorage.removeItem('@myCart');
};

export const _getMyCart = async () => {
  try {
    const value = await AsyncStorage.getItem('@myCart');
    if (value !== null) {
      return JSON.parse(value);
    }
    else return [];
  } catch (e) {
    return [];
  }
};

export const _checkFirstOpen = async () => {
  try {
    const value = await AsyncStorage.getItem('firstOpen');
    if (value !== null) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

export const _openedApp = async () => {
  try {
    await AsyncStorage.setItem('firstOpen', 'true');
  } catch (e) {
    alert('Something went wrong');
  }
};
