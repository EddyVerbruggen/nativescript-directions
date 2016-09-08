import {Common} from "./taptic-engine.common";

export class TapticEngine extends Common {

  public weakBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      AudioServicesPlaySystemSound(1519);
      resolve();
    });
  }

  public strongBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      AudioServicesPlaySystemSound(1520);
      resolve();
    });
  }

  public burst(): Promise<any> {
    return new Promise((resolve, reject) => {
      AudioServicesPlaySystemSound(1521);
      resolve();
    });
  }
}