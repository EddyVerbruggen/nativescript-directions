import {Common} from "./taptic-engine.common";

export class TapticEngine extends Common {

  public weakBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }

  public strongBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }

  public burst(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
}