export interface AddressOptions {
    lat?: number;
    lng?: number;
    address?: string;
}
export interface NavigateToOptions {
    from?: AddressOptions;
    to: AddressOptions;
}
