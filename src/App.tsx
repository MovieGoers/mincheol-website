import { BrowserRouter, Routes, Route } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';


const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('container')}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;