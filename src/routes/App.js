import '../assets/css/App.css';
import '../scss/style.scss'
import React, {Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from '../states/store'


const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'))
const Login = React.lazy(() => import('../views/pages/login/Login'))
const Page404 = React.lazy(() => import('../views/pages/page404/Page404'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route path="/login" name="Home" element={<Login />} />
            <Route path="/404" name="Home" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
