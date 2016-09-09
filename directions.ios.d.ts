import { NavigateToOptions } from "./directions.common";
export declare class Directions {
    available(): Promise<any>;
    navigate(options: NavigateToOptions): Promise<any>;
}
