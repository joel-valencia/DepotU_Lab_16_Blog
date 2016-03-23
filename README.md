### Instructions

The objective of this project is create a blog site using the PlatypusTS framework.
Before begining, complete the [getting started guide](https://developers.platypi.io/docs/getting-started).

IMPORTANT NOTE!!!!!!!!!!!!!: Stop before completing the deploy to a device step.

#### Resources
[PlatypusTS Developer Guide](https://developers.platypi.io/docs/guide)
[Platypus CLI](https://developers.platypi.io/docs/guide/cli)


### Basic Req's
* Open a new tab in Terminal (command T). Navigate to the BlogServer folder we provided you. You should not include this in your GitHub repository. It is a separate entity that exists on its own.
* Once inside the project folder, run `npm install`. Then type `nodemon`. This will start a server at `http://localhost:4000` (NOTE the port number is 4000).
* Keep this server running on this tab. You can use the other tab in Terminal to run the platypi commands.
* So there will be two servers running: PlatypusTS runs your app on `http://localhost:3000`, and BlogServer runs the API at `http://localhost:4000/api`. **Make sure you use port 4000 when you are making your API requests.**
* Now onto the PlatypusTS setup: initialize a new project using platypi-cli:
1. First make sure you create a GitHub repository. Make sure the boxes for README and gitignore are NOT checked.
2. Now clone the repo to your Source folder.
3. With terminal navigated to Source (NOT inside the repo), do the following:
		~~~~~~
		$ plat create -n name-of-the-repo-folder
        // press enter to accept the default folder name (should be the same as the line above)
		// Answer no to ? Should we create a Cordova project? (Y/n)
        // Answer yes to ? Should we create a .gitignore
        ~~~~~~
Now navigate into the project folder in Terminal, and then run these commands:
        ~~~~~~
		$ npm install
		$ npm start
		~~~~~~
This will start up the website and make it available at `http://localhost:3000`. Any time you save a TS or LESS file, the files will automatically be recompiled and the server will be restarted. Yay!

The Platypus Blog will have all the same components as previous blog versions but no server will need to be created. The server will be running on http://localhost:3000 through the use of http-server npm module.

* app.ts - initialize app and configure views
* models: define types (interfaces) for post items

* Services- Use to communicate with APIs: (`plat create service -n NameOfService`)
	- create a function which uses the host string from the base service to get all post from the local API. Should return an array with the results.
	- create a function which uses the host string from the base service to save to the local API
	- Both functions should handle any errors

	-Hint: [plat http](https://developers.platypi.io/docs/api/class/plat.async.Http) enables api calls from client side and will be useful
	
    -[plat http guide](https://developers.platypi.io/docs/guide/useful-components#plat.async.Http) (use .json(), not .ajax())

* Repository: (`plat create repository -n NameOfRepository`)
	- create a function which calls the get function from the service.
	- create a function which calls the post function from the service.

* Viewcontrols: (`plat create viewcontrol -n NameOfViewControl`)
	- enable user to switch between views
	- PostListViewControl - displays a list of all blog posts. (the home page of the website)
	- ComposePostViewControl - includes form to submit posts and navigate back to list view when complete.
    - SinglePostViewControl - should display a single blog post (use a route parameter)
	- ViewControl should call functions from the repository when necessary to handle actions

