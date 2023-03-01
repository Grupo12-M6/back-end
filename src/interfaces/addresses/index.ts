export interface IAddress {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAddressRequest {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
}

export interface IAddressUpdate {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
}

export interface IAddressResponse {
  message: string;
  data: IAddress;
}
