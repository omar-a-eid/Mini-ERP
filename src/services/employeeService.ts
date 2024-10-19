import { Employee } from '../interfaces/Employee';
import { getFromLocalStorage, saveToLocalStorage } from './localStorageService';

const EMPLOYEES_KEY = 'employees';

export const getEmployees = async (): Promise<Employee[]> => {
  return getFromLocalStorage(EMPLOYEES_KEY) || [];
};

export const saveEmployees = (employees: Employee[]) => {
  saveToLocalStorage(EMPLOYEES_KEY, employees);
};

export const deleteEmployee = async (id: number) => {
  const employees = getFromLocalStorage(EMPLOYEES_KEY) || [];
  const updatedEmployees = employees.filter((employee: Employee) => employee.id !== id);
  saveToLocalStorage(EMPLOYEES_KEY, updatedEmployees);
};

export const updateEmployee = async (updatedEmployee: Employee) => {
  const employees = getFromLocalStorage(EMPLOYEES_KEY) || [];
  const updatedEmployees = employees.map((employee: Employee) => employee.id === updatedEmployee.id ? updatedEmployee : employee);
  saveToLocalStorage(EMPLOYEES_KEY, updatedEmployees);
};

export const addEmployee = async (newEmployee: Employee) => {
  const employees = getFromLocalStorage(EMPLOYEES_KEY) || [];
  employees.push(newEmployee);
  saveToLocalStorage(EMPLOYEES_KEY, employees);
};
