import { NavigateToOptions } from "./directions.common";
export declare class Directions {
    private isPackageInstalled();
    available(): Promise<any>;
    navigate(options: NavigateToOptions): Promise<any>;
}
