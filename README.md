CSS Workshop 1
==============

The first in a series of workshops for learning CSS.

#### Install with Bower

This is the best way to install. It will download all required dependencies.

```sh
$ bower install angular-base-app
```

#### Manual download

First you'll have to download the dependencies: `angular, angular-animate, angular-cookies, angular-sanitize, angular-touch, angular-translate and angular-ui-router`.

After you've included all of these in your project, download the [archive](https://github.com/csarov/angular-base-app/archive/master.zip) and include it in your project.

### Adding the module to your project
When you are done downloading all the dependencies and project files the only remaining part is to add the module on your project like this:

```js
angular.module('myProject', ['baseApp']);
```