// types.ts

export type Amount = number;

export type CurrencyCode = 'USD' | 'EUR' | 'GBP';

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface PaymentMethod {
  type: 'credit-card' | 'bank-transfer' | 'paypal';
  details: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  } | {
    bankAccountNumber: string;
    bankRoutingNumber: string;
  } | {
    paypalEmail: string;
  };
}

export interface PaymentRequest {
  amount: Amount;
  currency: CurrencyCode;
  paymentMethod: PaymentMethod;
  billingAddress: Address;
}

export interface PaymentResponse {
  success: boolean;
  paymentId: string;
  error?: string;
}

export interface Transaction {
  id: string;
  amount: Amount;
  currency: CurrencyCode;
  paymentMethod: PaymentMethod;
  status: 'pending' | 'successful' | 'failed';
  createdAt: Date;
}

export interface TransactionList {
  transactions: Transaction[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
}