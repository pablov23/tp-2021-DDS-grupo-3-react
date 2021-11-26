import { push } from 'connected-react-router';
import { string } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import { ROUTES } from '~constants/routes';

import styles from './styles.module.scss';

const Card = ({ name, age, race, gender, image, id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(push(`${ROUTES.PET_CARD.basePath}/${id}`));
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <img className={styles.pic} src={image} />
      <div className={styles.texts}>
        <div className={styles.name}>{name}</div>
        {[age, race, gender].map(text => (
          <div key={text} className={styles.text}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  age: string,
  gender: string,
  id: string,
  image: string,
  name: string,
  race: string
};

export default Card;
