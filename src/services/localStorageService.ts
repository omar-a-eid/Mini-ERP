import { Employee } from "../interfaces/Employee";

export const initializeLocalStorage = (key: string, initialData: Employee[]) => {
  const existingData = getFromLocalStorage(key);
  if (!existingData || existingData.length === 0) {
    saveToLocalStorage(key, initialData);
  }
};

export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const saveToLocalStorage = (key: string, value: Employee[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
