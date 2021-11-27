import React, { useRef, useEffect } from 'react';
import { bool, node, string } from 'prop-types';

import Loading from './components/Loading';

function LoadingWrapper({ loading, children, withInitialLoading, className, type, width, height }) {
  const initialLoading = useRef(withInitialLoading);
  useEffect(() => {
    if (initialLoading.current && loading) {
      initialLoading.current = false;
    }
  }, [loading]);
  return initialLoading.current || loading ? (
    <Loading className={className} type={type} width={width} height={height} />
  ) : (
    <>{children}</>
  );
}

LoadingWrapper.propTypes = {
  loading: bool.isRequired,
  children: node,
  className: string,
  height: string,
  type: string,
  width: string,
  withInitialLoading: bool
};

LoadingWrapper.defaultProps = {
  className: '',
  withInitialLoading: false
};

export default LoadingWrapper;
