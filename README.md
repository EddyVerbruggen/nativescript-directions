# Develop a NativeScript plugin now (w/ TypeScript)

## Getting started

1. Download a zip of this seed.
2. `npm install -g typescript`
3. `cd ... path/to/unzip/folder ...`
2. `npm run setup`
3. Get to work.

This seed expands on several things [presented here](http://developer.telerik.com/featured/creating-nativescript-plugins-in-typescript/).

## Usage

The seed is prepared to allow you to test and try out your plugin via the `demo` folder.
Additionally it provides a proper `.gitignore` to keep GitHub tidy as well as `.npmignore` to ensure everyone is happy when you publish your plugin via npm.

### Prepare

You'll want to change a couple things right away:

* Change the name of the plugin all throughout `package.json` (including github repo, etc.) and the filenames.
* Also in `package.json`, find this line:

```
"preparedemo": "npm run build; cd demo; tns plugin remove nativescript-yourplugin; tns plugin add ..; tns install",
```

Replace `nativescript-yourplugin` with your actual plugin name.

### Typical development workflow:

1. Make changes to plugin files
2. Make changes in `demo` that would test those changes out
3. `npm run demo.ios` or `npm run demo.android`  **(must be run from the root directory)**

Those `demo` tasks are just general helpers. You may want to have more granular control on the device and/or emulator you want to run. For that, you can just run things the manual way:

```
cd demo

// when developing, to ensure the latest code is built into the demo, it's a gaurantee to remove the plugin and add it back
tns plugin remove nativescript-yourplugin // replace with your plugin name
tns plugin add ..

// manual platform adds
tns platform add ios
// and/or
tns platform add android
```

Then use any of the available options from the `tns` command line:

* [Emulate your project](https://github.com/NativeScript/nativescript-cli#emulate-your-project)
* [Run your project](https://github.com/NativeScript/nativescript-cli#run-your-project)
* [Full list of commands](https://github.com/NativeScript/nativescript-cli#the-commands)

## Publish

When you have everything ready to publish:

* Bump the version number in `package.json`
* `npm run build` - **very important** - ensure the latest is built **before** you publish
* `npm publish`

## Contributing - Want to make the seed better?

Or at least help keep it up to date with NativeScript releases, which would be excellent.

```
npm install -g typescript  // if you don't already have it
git clone https://github.com/NathanWalker/nativescript-plugin-seed
cd nativescript-plugin-seed

// Improve!
```
