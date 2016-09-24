# React-Native-Starter-Kit
The React Native starter kit which included all the best practises(I thought) should be included in a project.

## Features
- Ready for ES2015 and beyond
- Javascript Linting
- Ready for test driven development with ava
- Code Coverage with nyc
- Ready for automated acceptance testing
- Code quality metrics
- Debugger Tools & Practises
- Continuous Integration Scripts
- Functional architecture (immutability, hot reloading)
- Form validation
- Code coverage
- Data persistence
- Navigation


## Progress
Initially the boilerplate will support Android only.

- [x] Unit Testing setup with ava, enzyme
- [x] Code coverage with nyc
- [x] Automated acceptance testing setup with appium
- [ ] Continuous Integration setup
- [x] Redux
- [ ] ~Immutable data structures~
- [ ] Redux middleware management strategy(**in progress**)
- [x] Redux debugger
- [ ] Form validation
- [ ] Hot Reloading
- [ ] Default app structure(**in progress**)
- [ ] CDD with getstorybook
- [x] Navigation with react-native-router-flux
- [ ] Persistence

## Libraries
- [React Native](https://facebook.github.io/react-native/)
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
- [Redux](http://rackt.github.io/redux/)
- [react-native-debugger](https://github.com/jhen0409/react-native-debugger)
- [babeljs](https://babeljs.io/)
- [immutablejs](http://facebook.github.io/immutable-js)
- [eslint](http://eslint.org/)
- [ava](https://github.com/avajs/ava)
- [nyc](https://github.com/istanbuljs/nyc)
- [sinon](http://sinonjs.org/)
- [Enzyme](http://airbnb.io/enzyme/)
- [getstorybook](https://github.com/kadirahq/react-native-storybook)
- And more

##Immutable
We hold using Immutable in the whole project structure, the reason as follow:

 * We use Redux. In combineReducers and all separate reducers we already return new object.
 * The benefits we can get from Immutable is avoiding re-render when props & state is not changed, But we need to add Immutable to Store, Reducers, All Components. This is too intrusive.
 * In some specific cases, we can use Immutable case by case.
