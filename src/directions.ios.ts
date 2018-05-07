import { DirectionsApi, DirectionsCommon, NavigateToOptions } from "./directions.common";
import * as utils from "tns-core-modules/utils/utils";
const isAppAvailable = require("nativescript-appavailability").availableSync;

export class Directions extends DirectionsCommon implements DirectionsApi {

  public available(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  public navigate(options: NavigateToOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const fromToQs = Directions.getFromToQuerystring(options);

        if ((options.ios === undefined || options.ios.preferYandexNavi !== false) && isAppAvailable("yandexnavi://")) {
          //this is the documentation of yandexnavi route map https://github.com/yandexmobile/yandexmapkit-ios/wiki/%D0%98%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D1%81-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%9D%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%BC
          const toArray = options.to instanceof Array ? options.to : [options.to];
          utils.openUrl(`yandexnavi://build_route_on_map?lat_to=${toArray[0].lat}&lon_to=${toArray[0].lng}`);
        }  else if ((options.ios === undefined || options.ios.preferGoogleMaps !== false) && isAppAvailable("comgooglemaps://")) {
          // if Google maps is installed, use that, otherwise use Apple maps (which doesn't support waypoints.. so nav to the first destination if that's used)
          // url = `http://maps.google.com/maps?${fromToQs}+to:${encodeURIComponent("Weerdestein 144, Dordrecht, Netherlands")}`;
          utils.openUrl("comgooglemaps://" + fromToQs);
        }else if (options.ios && options.ios.allowGoogleMapsWeb && options.to instanceof Array && options.to.length > 1) {
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