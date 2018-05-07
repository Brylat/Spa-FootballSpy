// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAEmzTZmqntgFML3_lBLEXwfbn-ZgZxptY',
    authDomain: 'spa-super-spa.firebaseapp.com',
    databaseURL: 'https://spa-super-spa.firebaseio.com',
    projectId: 'spa-super-spa',
    storageBucket: 'spa-super-spa.appspot.com',
    messagingSenderId: '947680418967'
  }
};
