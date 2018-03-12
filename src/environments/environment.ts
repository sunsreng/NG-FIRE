// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDYS8OCrbNeJMNFaI1kHRhCQzP7qdy39jI',
    authDomain: 'c-mana.firebaseapp.com',
    databaseURL: 'https://c-mana.firebaseio.com',
    projectId: 'c-mana',
    storageBucket: 'c-mana.appspot.com',
    messagingSenderId: '669505234797'
  }
};
