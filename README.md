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
Initially the boilerplate will support iOS & Android.

- [x] Unit Testing setup with ava, enzyme
- [x] Code coverage with nyc
- [x] Automated acceptance testing setup with appium
- [ ] Continuous Delivery pipeline setup(**in progress**)
- [x] Redux
- [x] ~~Immutable data structures~~
- [x] Redux middleware management strategy
- [x] Redux debugger
- [ ] Form validation(**in progress**)
- [x] Hot Reloading
- [x] Default app structure
- [x] CDD with getstorybook
- [x] Navigation with react-native-router-flux
- [ ] Persistence
- [ ] Deep Link
- [ ] Data Collection
- [ ] Mix Native with React Native
- [ ] MapView
- [ ] Offline support

## Libraries
- [React Native](https://facebook.github.io/react-native/)
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
- [Redux](http://rackt.github.io/redux/)
- [react-native-debugger](https://github.com/jhen0409/react-native-debugger)
- [redux-actions](https://github.com/acdlite/redux-actions)
- [redux-thunk](https://github.com/acdlite/redux-actions)
- [babeljs](https://babeljs.io/)
- [eslint](http://eslint.org/)
- [ava](https://github.com/avajs/ava)
- [nyc](https://github.com/istanbuljs/nyc)
- [sinon](http://sinonjs.org/)
- [Enzyme](http://airbnb.io/enzyme/)
- [getstorybook](https://github.com/kadirahq/react-native-storybook)
- [redux-form](https://github.com/erikras/redux-form)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- And more

##Immutable
We hold using Immutable in the whole project structure, the reason as follow:

 * We use Redux. In combineReducers and all separate reducers we already return new object.
 * The benefits we can get from Immutable is avoiding re-render when props & state is not changed, But we need to add Immutable to Store, Reducers, All Components. This is too intrusive.
 * In some specific cases, we can use Immutable case by case.

##Data Flow
In Redux, The data flow normally as follow:

* [Basic Data Flow](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)
* [Data Flow with Middleware](https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966)

Based on this data flow, the patterns for Mobile App user action will be :

**User Action -> (State Acquisition) -> Update Store -> UI Change**

In Redux:

 * User Action is just call a function,
 * Update Store just a bunch of reducers,
 * UI change is just mapStateToProps

So the most complicated part is State Acquisition, it includes a lot of complicated scenarios, such as:

1. Get data synchronous
2. Get data asynchronous
3. Get data-1(sync/async)
   Get data-2(sync/async) -> update
4. Get data-1 -> use data-1 to get data-2 -> update

We need to think how to design the patterns in these scenarios.

1. 求数据和特定的 UI 事件耦合到一起是不明智的。

##Deep Link
http://mp.weixin.qq.com/s?__biz=MzAwNjAzNjMyOQ==&mid=2650215008&idx=1&sn=5de38cea68bb86589680a93e679fc9d1&chksm=83103c66b467b5703c1b78d8bafc79a867a611be5672b9ed259577757fb6fa0ff8d42c954f69&scene=1&srcid=09247GuNPrKh2VyqHt6Pydxe&from=groupmessage&isappinstalled=0#wechat_redirect


##Data Synchorisation
https://www.objc.io/issues/10-syncing-data/data-synchronization/
https://www.objc.io/issues/10-syncing-data/sync-case-study/

##Component Driven Development
an article is working in progress...

##Hot Reloading
开发中的很大一部分时间，都花在了保存文件到检查 UI 是否有变化的过程中，特别是对于一些路径特别长的功能或者界面。典型的一个场景就是某个功能界面，距离启动界面有多个层级，当应用重新启动之后，你需要多次点击，有时甚至需要输入一些数据，最后才能到达之前的功能界面。而 Hot Reloading 就是这样一个特性，开启这个特性之后，你可在当前界面重新加载，并且保持应用之前的状态，这将极大地提高开发效率。
简而言之，Hot Reloading 这个特性，可以保持应用的持续运行，不丢失应用的状态，实时地注入最新的代码。

React Native中实现了React Component的Hot Loading, 只需要开发者自己打开就行, 如果要支持Redux架构下的reducer的Hot Reloading就需要开发者自己添加代码。

关于React Native实现Hot Reloading的原理,参见下面的文章:

https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html
http://www.jianshu.com/p/1fa6e9c0799f（中文版）

关于Redux reducer的Hot Reloading, 参见：https://github.com/reactjs/react-redux/releases/tag/v2.0.0


## Common And Import Components

###Form
In Native field,  we don't have the concept of Form, all the form is just a normal view, so React Native didn't have Form Components.
That means all the form UI code should follow Native UI style, use View, Text, TextInput to construct UI. But we can use Redux-form
to format reducer, validtor for Forms.

####How to create a form
####How to combine form stat with Redux
####How to do validation about Form Input



