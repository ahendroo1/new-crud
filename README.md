This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Instructions
#
# __React & jsPDF__

### A simple React app to Fake Api 

## __:snowflake: Follow these instructions:__

Create a folder in your computer directory and open bash or terminal, point the path to the folder that has been created, then follow the instructions below.

```bash

$ npm install -g json-server

$ npm init

```
Create the db.json file in the folder and enter the following data array

```bash

{
  "berita": [
    {
      "id": 1,
      "title": "Berita o",
      "news": "Post Berita 1",
      "datepost": "20 Januari 2019"
    },
    {
      "id": 3,
      "title": "Berita 2",
      "news": "Post Berita 2"
    },
    {
      "id": 3,
      "title": "uiowadsdas",
      "news": "Post Berita 3",
      "datepost": "22-0-2019",
    }
  ],
  "user": [
    {
      "id": 1,
      "name": "Amad Hendro"
    }
  ]
}

```

```bash

$ json-server --watch db.json

```

JSON Server is ready and please access http://localhost:3000

Application is ready and please access https://ahendroo1-kumparan.netlify.com

__Done!__ :thumbsup:

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/ahendroo) |
[Twitter](https://twitter.com/ahendroo) |
:octocat: [GitHub](https://github.com/ahendroo1) |
[Instagram](https://www.instagram.com/ahendroo1)


### `npm run build` fails to minify

Some third-party packages don't compile their code to ES5 before publishing to npm. This often causes problems in the ecosystem because neither browsers (except for most modern versions) nor some tools currently support all ES6 features. We recommend to publish code on npm as ES5 at least for a few more years.

<br>
To resolve this:

1. Open an issue on the dependency's issue tracker and ask that the package be published pre-compiled.
  * Note: Create React App can consume both CommonJS and ES modules. For Node.js compatibility, it is recommended that the main entry point is CommonJS. However, they can optionally provide an ES module entry point with the `module` field in `package.json`. Note that **even if a library provides an ES Modules version, it should still precompile other ES6 features to ES5 if it intends to support older browsers**.

2. Fork the package and publish a corrected version yourself. 

3. If the dependency is small enough, copy it to your `src/` folder and treat it as application code.

In the future, we might start automatically compiling incompatible third-party modules, but it is not currently supported. This approach would also slow down the production builds.

## Alternatives to Ejecting

[Ejecting](#npm-run-eject) lets you customize anything, but from that point on you have to maintain the configuration and scripts yourself. This can be daunting if you have many similar projects. In such cases instead of ejecting we recommend to *fork* `react-scripts` and any other packages you need. [This article](https://auth0.com/blog/how-to-configure-create-react-app/) dives into how to do it in depth. You can find more discussion in [this issue](https://github.com/facebookincubator/create-react-app/issues/682).

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/facebookincubator/create-react-app/issues) or [contribute some!](https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md)
