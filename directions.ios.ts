import {NavigateToOptions} from "./directions.common";
import * as utils from "utils/utils";

export class Directions {

  public available(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  };

  public navigate(options: NavigateToOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      let dest, source = "current location";

      if (options.from) {
        if (options.from.address) {
          source = options.from.address;
        } else if (options.from.lat && options.from.lng) {
          source = options.from.lat + "," + options.from.lng;
        }
      }

      if (!options.to) {
        reject("Set 'to', please.");
        return;
      }

      if (options.to.address) {
        dest = options.to.address;
      } else if (options.to.lat && options.to.lng) {
        dest = options.to.lat + "," + options.to.lng;
      } else {
        reject("Either set 'address' or 'lat' and 'lng'.");
        return;
      }

      utils.openUrl("http://maps.apple.com/maps?saddr=" + encodeURIComponent(source) + "&daddr=" + encodeURIComponent(dest));
      resolve();
    });
  }
}