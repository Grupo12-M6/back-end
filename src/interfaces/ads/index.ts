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

export interface IAdsImages {
    url: string;
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
    image: IAdsImages[]
}

export interface IAdsResponse {
    message: string,
    data: IAds
};

export interface IAdsListResponse {
    message: string;
    data: IAds[]
};
