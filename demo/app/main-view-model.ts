import {Observable} from "data/observable";
import {TapticEngine} from "nativescript-taptic-engine";

export class HelloWorldModel extends Observable {
  public message: string;
  private tapticEngine: TapticEngine;

  constructor() {
    super();
    this.tapticEngine = new TapticEngine();
  }

  public doWeakBoom() {
    this.tapticEngine.weakBoom().then(() => {
      console.log("Boomed weakly, if avail");
    }, (err) => {
      console.log("U on Android? :)");
    });
  }

  public doStrongBoom() {
    this.tapticEngine.strongBoom().then(() => {
      console.log("Boomed strongly, if avail");
    }, (err) => {
      console.log("U on Android? :)");
    });
  }

  public doBurst() {
    this.tapticEngine.burst().then(() => {
      console.log("Bursted, if avail");
    }, (err) => {
      console.log("U on Android? :)");
    });
  }

}