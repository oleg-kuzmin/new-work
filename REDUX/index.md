# [`Redux`](../index.md)

- [Общее](#общее)
- [redux](#redux-1)
- [react-redux](#react-redux)
- [redux-persist](#redux-persist)
- [redux-thunk](#redux-thunk)
- [redux-toolkit](#redux-toolkit)

## [Общее](#redux)

- [`Установка`](./Общее/Установка.md)
- [`Использование`](./Общее/Использование.md)
- [`Создание action`](<./Общее/Создание action.md>)
- [`Создание reducer`](<./Общее/Создание reducer.md>)

## [redux](#redux)

- [`applyMiddleware()`](./redux/applyMiddleware.md) подключение middleware
- [`bindActionCreators()`](./redux/bindActionCreators.md) связывает dispatch и action-creator в классовых компонентах
- [`combineReducers()`](./redux/combineReducers.md) объединение reducer
- [`compose`](./redux/compose.md) объединяет усилители
- [`createStore()`](./redux/createStore.md) создание хранилища

## [react-redux](#redux)

- [`Provider`](./react-redux/Provider.md) обертка с хранилищем над приложением
- [`useDispatch()`](./react-redux/useDispatch.md) передача объекта события action
- [`useSelector()`](./react-redux/useSelector.md) получение данных из state
- [`connect()()`](./react-redux/connect.md) обертка для классовых компонентов

## [redux-persist](#redux)

- [`Настройка`](./redux-persist/Настройка.md)
- [`Настройка под rtk`](<./redux-persist/Настройка под rtk.md>)

## [redux-thunk](#redux)

- [`Создание thunk`](<./redux-thunk/Создание thunk.md>)

## [redux-toolkit](#redux)

- [`configureStore()`](./redux-toolkit/configureStore.md) создание store
- [`createSlice()`](./redux-toolkit/createSlice.md) создание slice
- [`createAction()`](./redux-toolkit/createAction.md) создание action
- [`createAsyncThunk()`](./redux-toolkit/createAsyncThunk.md) создание асинхронного action
- [`createReducer()`](./redux-toolkit/createReducer.md) создание reducer
- [`nanoid()`](./redux-toolkit/nanoid.md) создание уникального id
