import { openUrl } from "tns-core-modules/utils/utils";
import { DirectionsApi, DirectionsCommon, NavigateToOptions } from "./directions.common";

const isAppAvailable = require("nativescript-appavailability").availableSync;

export class Directions extends DirectionsCommon implements DirectionsApi {

  public available(): Promise<boolean> {
    return Promise.resolve(true);
  }

  public navigate(options: NavigateToOptions): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        const fromToQs = Directions.getFromToQuerystring(options);

        if ((options.ios === undefined || options.ios.preferGoogleMaps !== false) && isAppAvailable("comgooglemaps://")) {
          // if Google maps is installed, use that, otherwise use Apple maps (which doesn't support waypoints.. so nav to the first destination if that's used)
          // url = `http://maps.google.com/maps?${fromToQs}+to:${encodeURIComponent("Weerdestein 144, Dordrecht, Netherlands")}`;
          openUrl("comgooglemaps://" + fromToQs);
        } else if (options.ios && options.ios.allowGoogleMapsWeb && options.to instanceof Array && options.to.length > 1) {
          openUrl("http://maps.google.com/maps" + fromToQs);
        } else {
          openUrl("http://maps.apple.com/maps" + fromToQs);
        }
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
}
