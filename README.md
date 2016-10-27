# NativeScript Directions plugin
For iOS and Android

## Installation
From the command prompt go to your app's root folder and execute:

```
tns plugin add nativescript-directions
```

## Demo app
Want to dive in quickly? Check out [the demo app](demo)! Otherwise, continue reading.

You can run the demo app from the root of the project by typing `npm run demo.ios.device` or `npm run demo.android`.

<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-directions/master/directions-animated.gif" width="320px" height="570px"/>

## API

### `available`
Not all devices have the Google (Android) or Apple (iOS) Maps app installed. Well, most do of course, but on an Android simulator you may be out of luck, so let's check beforehand:

##### JavaScript
```js
// require the plugin
var Directions = require("nativescript-directions").Directions;

// instantiate the plugin
var directions = new Directions();

directions.available().then(
  function(avail) {
    console.log(avail ? "Yes" : "No");
  }
);
```

##### TypeScript
```js
// require the plugin
import {Directions} from "nativescript-directions";

// instantiate the plugin
let directions = new Directions();

directions.available().then((avail) => {
    console.log(avail ? "Yes" : "No");
});
```

### `navigate`
This function opens the native Maps app with a predefined `from` and `to` address.

If you don't pass `from` the current location of the user will be used.

If an `address` is specified then `lat` and `lng` will be ignored.

Note that if there's an ocean in between `from` and `to` you won't be able to get directions, don't blame this plugin for that 😁

##### JavaScript
```js
directions.navigate({
  from: { // optional, default 'current location'
    lat: 52.215987,
    lng: 5.282764
  },
  to: {
    address: "Hof der Kolommen 34, Amersfoort, Netherlands",
  }
}).then(
  function() {
    console.log("Maps app launched.");
  },
  function(error) {
    console.log(error);
  },
);
```

##### TypeScript
```js
directions.navigate({
  from: { // optional, default 'current location'
    lat: 52.215987,
    lng: 5.282764
  },
  to: {
    address: "Hof der Kolommen 34, Amersfoort, Netherlands",
  }
}).then(() => {
    console.log("Maps app launched.");
}, (error) => {
    console.log(error);
});
```

## Future work
* Perhaps add Android-specific options like opening the map in StreetView mode, or pre-defining the transportation type (walk/bike/car).
