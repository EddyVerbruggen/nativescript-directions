import { NavigateToOptions } from "./directions.common";
export declare class Directions {
    private static MAPS_PACKAGE;
    private isPackageInstalled();
    available(): Promise<any>;
    navigate(options: NavigateToOptions): Promise<any>;
}
