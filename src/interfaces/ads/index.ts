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
    id: string;
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
    images: IAdsImages[]
}

export interface IAdsUpdate {
    title?: string;
    adType?: string;
    description?: string;
    year?: number;
    price?: number;
    mileage?: number;
    motorType?: string;
    userId?: string;
    images?: IAdsImages[]
}



export interface IAdsResponse {
    message: string,
    data: IAds
};

export interface IAdsListResponse {
    message: string;
    data: IAds[]
};
