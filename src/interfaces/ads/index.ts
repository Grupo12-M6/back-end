export interface IAds {
    id: string;
    title: string;
    adType: string;
    description: string;
    year: number;
    price: number;
    mileage: number;
    motorType: string;
    isActive: boolean;
}

export interface IAdsRequest {
    title: string;
    adType: string;
    description: string;
    year: number;
    price: number;
    mileage: number;
    motorType: string;
    isActive: boolean;
    userId: string;
}

export interface IAdsResponse {
    message: string,
    data: IAds
};

export interface IAdsListResponse {
    message: string;
    data: IAds[]
};
