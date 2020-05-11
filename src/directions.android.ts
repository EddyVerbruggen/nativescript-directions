import { DirectionsApi, DirectionsCommon, NavigateToOptions } from "./directions.common";
import * as application from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";

let com: any;

export class Directions extends DirectionsCommon implements DirectionsApi {

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

  public available(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.isPackageInstalled());
    });
  }

  public navigate(options: NavigateToOptions): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        const fromToQs = Directions.getFromToQuerystring(options);

        if (!this.isPackageInstalled()) {
          // fall back to web
          utils.openUrl("http://maps.google.com/maps" + fromToQs);
        } else {
          const intent = new android.content.Intent(
            android.content.Intent.ACTION_VIEW,
            android.net.Uri.parse("http://maps.google.com/maps" + fromToQs));

          if (!options.android || options.android.newTask !== false) {
            intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
          }

          (application.android.foregroundActivity || application.android.startActivity).startActivityForResult(intent, 0);
        }

        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
}
