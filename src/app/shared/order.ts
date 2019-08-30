import { Customer } from './customer';

export interface Order {
    id: number;
    customer: Customer;
    total: number;
    placed: string;
    fulfilled: string;
    status: string;
}