# NPM Start Pack
## Build tools included:
 - Gulp
 - Bootstrap 5
 - Bootsrap Icons
 - ejs templates
 - node-json-db to easily save data
 - compiles and minidies js and css when you run build in the package.json scripts.

## Installation
> [!NOTE]
> You'll have to fork or download to install.

##### GitHub CLI
[> Get GitHub's CLI](https://cli.github.com/)
```bash
gh repo clone Yohn/Node-Starter
```
```bash
cd Node-Starter
```
```bash
npm install
```

I have `copy-files-from-to` installed globally on my computer to help copy / move files needed from the 	`node_modules` and `vender` folder folder to my project directory to easilt modify if need be, and to add them to the compiler and build what we need.

open `package.json` and run the `build` command to build your site or..

```bash
gulp build
```
after that you can run the `start` command in `package.json` or..

```bash
node backend.js
```
This'll start your server, and give you a link in the terminal for how to view.Theres not much on there now except a basic template starting point. You can edit the pages sections within the `views` directory. All views need to be `.ejs` extension.

You can run `gulp dev` to set up watchers for your js and css files.

Edit the files within the `src` directory. The dev watcher looks for scss and js files to be edited. once they're edited it'll auto reguild the unminified files automatically for testing and development.