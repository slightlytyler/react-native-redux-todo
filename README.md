## React Native Todo

react-native / redux implementation of a Todo app

## Installation

```bash
git clone git@github.com:slightlytyler/react-native-redux-todo.git
cd react-native-redux-todo
npm install
```

## Development

```bash
npm run hot
open ./ios/ReactNativeReduxTodo.xcodeproj
```

Cmd+R inside Xcode to run the app in the iOS simulator. On first run, you'll likely receive an error because, in order for hot-loading to work, you need to be debugging in Chrome. Dismiss the error (press escape), then press Cmd+D and click on the Debug in Chrome button. When the Chrome debugger is open and connected, press Cmd+R in the iOS simulator to reload the app. You should now be hot-loading, and all changes you save in your source should update in the app.

## Features / Issues I'd like to address

- [ ] Data models need a single source of truth. Right now actions are passed indiviudal attrs as arguments but it would be better to pass an object constructed using a defined model.
- [ ] More generic components. List, Item, Form could all be abstracted.
- [ ] v3 features to include a Today view (similar to clear), more controls via a side menu (project list, todo filtering), and color coding.

## Built using these project

[react-native-hot-redux-starter](https://github.com/adampash/react-native-hot-redux-starter) used as a starter repo.

- [react-native](https://github.com/facebook/react-native)
- [redux](https://github.com/rackt/redux)
- [reselct](https://github.com/rackt/reselect)
- [redux-storage](https://github.com/michaelcontento/redux-storage)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-custom-action-sheet](https://github.com/eyaleizenberg/react-native-custom-action-sheet)
- [react-native-blur](https://github.com/Kureev/react-native-blur)