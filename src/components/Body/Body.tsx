import classNames from 'classnames/bind';
import styles from './Body.module.scss';

const cx = classNames.bind(styles);

const Body = () => {
  return <main className={cx('body')}>Body</main>;
};

export default Body;
