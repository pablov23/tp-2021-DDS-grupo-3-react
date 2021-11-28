import i18next from 'i18next';
import React from 'react';

import SideBar from '~app/components/SideBar';
import { ReactComponent as Foot } from '~assets/foot.svg';

import Card from './components/Card';
import LoginAndRegisterButtons from './components/LoginAndRegisterButtons';
import { POSTS } from './constants';
import styles from './styles.module.scss';

const Home = () => (
  <div className={styles.container}>
    <SideBar />
    <div className={styles.content}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Foot className={styles.logo} alt="icon" />
          <span className={styles.title}>{i18next.t('Home:title')}</span>
        </div>
        <LoginAndRegisterButtons />
      </div>
      <div className={styles.grid}>
        {POSTS.map(({ id, ...props }) => (
          <Card key={id} id={id} {...props} />
        ))}
      </div>
    </div>
  </div>
);

export default Home;
