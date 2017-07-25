import { DirectionsCommon, NavigateToOptions } from "./directions.common";
import * as utils from "utils/utils";
const isAppAvailable = require("nativescript-appavailability").availableSync;

export class Directions extends DirectionsCommon {

  public available(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  public navigate(options: NavigateToOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const fromToQs = Directions.getFromToQuerystring(options);
        console.log("fromToQs: " + fromToQs);

        if ((options.ios === undefined || options.ios.preferGoogleMaps !== false) && isAppAvailable("comgooglemaps://")) {
          // if Google maps is installed, use that, otherwise use Apple maps (which doesn't support waypoints.. so nav to the first destination if that's used)
          // url = `http://maps.google.com/maps?${fromToQs}+to:${encodeURIComponent("Weerdestein 144, Dordrecht, Netherlands")}`;
          utils.openUrl("comgooglemaps://" + fromToQs);
        } else if (options.ios && options.ios.allowGoogleMapsWeb && options.to instanceof Array && options.to.length > 1) {
          // TODO see web doc if this doesnt work
          utils.openUrl("http://maps.google.com/maps" + fromToQs);
        } else {
          utils.openUrl("http://maps.apple.com/maps" + fromToQs);
        }
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
}