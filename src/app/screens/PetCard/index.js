import { push } from 'connected-react-router';
import i18next from 'i18next';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { ROUTES } from '~constants/routes';
import { ReactComponent as Foot } from '~assets/foot.svg';

import { POSTS } from '../Home/constants';

import styles from './styles.module.scss';

const PetCard = () => {
  const { id } = useParams();
  const { name, image, gender, race, age } = POSTS.find(({ id: petId }) => id === petId);
  const dispatch = useDispatch();

  const goToHome = () => {
    dispatch(push(ROUTES.HOME.path));
  };

  return (
    <div className={styles.container}>
      <div onClick={goToHome} className={styles.headerContainer}>
        <Foot className={styles.logo} alt="icon" />
        <span className={styles.title}>{i18next.t('Home:title')}</span>
      </div>
      <div className={styles.card}>
        <img src={image} className={styles.pic} />
        <div className={styles.texts}>
          <div className={styles.name}>{name}</div>
          {[age, race, gender].map(text => (
            <div key={text} className={styles.text}>
              {text}
            </div>
          ))}
          <button type="button" className={styles.button}>
            {i18next.t('PetCard:wantToAdopt')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
