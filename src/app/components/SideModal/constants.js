import { SIDES } from '~constants/sides';

import styles from './styles.module.scss';

export const LATERAL_STYLES = {
  [SIDES.RIGHT]: styles.lateralMenuRight,
  [SIDES.LEFT]: styles.lateralMenuLeft
};

export const OUT_STYLES = {
  [SIDES.RIGHT]: styles.outRight,
  [SIDES.LEFT]: styles.outLeft
};

export const OVERLAY_STYLES = {
  [SIDES.RIGHT]: styles.right,
  [SIDES.LEFT]: styles.left
};
