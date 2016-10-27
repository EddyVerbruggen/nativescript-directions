import {NavigateToOptions} from "./directions.common";
import {android as AndroidApplication} from "application";

// ignore TS error
let com: any;

export class Directions {

  private isPackageInstalled(): boolean {
    try {
      let intent = new android.content.Intent(
        android.content.Intent.ACTION_VIEW,
        android.net.Uri.parse("http://maps.google.com/maps"));

      let pm = com.tns.NativeScriptApplication.getInstance().getPackageManager();
      return intent.resolveActivity(pm) != null;
    } catch (e) {
    }
    return true;
  }

  public available(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.isPackageInstalled());
    });
  };

  public navigate(options: NavigateToOptions): Promise<any> {
    return new Promise((resolve, reject) => {

      if (!this.isPackageInstalled()) {
        reject("Maps app not installed, use 'available' before using 'navigate'.");
        return;
      }

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
      };

      if (options.to.address) {
        dest = options.to.address;
      } else if (options.to.lat && options.to.lng) {
        dest = options.to.lat + "," + options.to.lng;
      } else {
        reject("Either set 'address' or 'lat' and 'lng'.");
        return;
      }

      let url = "http://maps.google.com/maps?saddr=" + encodeURIComponent(source) + "&daddr=" + encodeURIComponent(dest);

      let intent = new android.content.Intent(
        android.content.Intent.ACTION_VIEW,
        android.net.Uri.parse(url));

      AndroidApplication.currentContext.startActivityForResult(intent, 0);

      resolve();
    });
  }
}