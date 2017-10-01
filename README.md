# React/redux moltin boilerplate

The purpose of this project is to provide you with an out of the box setup for redux, react and moltin to play together. It comes with:

* `./utils/moltin`: exported moltin API functions via the JS SDK

* `./store.js`: fully functional redux store including routerMiddleware from react-router-redux, browserHistory, a redux-logger, redux-thunk, and a comprehensive set of reducers to handle moltin data.

* `./ducks`: set of action creators to work with the reducers so that you can easily dispatch actions that use the moltin API. These files use the [modular ducks approach](https://github.com/erikras/ducks-modular-redux).

* `./components`: set of container components that give you a skeleton for a basic commerce store.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
