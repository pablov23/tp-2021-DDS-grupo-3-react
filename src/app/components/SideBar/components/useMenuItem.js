import { useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { pathMatches } from '~utils/paths';

const useMenuItem = ({ item, onClick }) => {
  const location = useLocation();
  const [isHovering, setHovering] = useState(false);

  const subMenuSelected = item.subMenus?.some(subItem => pathMatches(subItem, location));
  const [subMenuOpen, setSubMenuOpen] = useState(subMenuSelected);

  const openSubMenu = () => setSubMenuOpen(!subMenuOpen);
  const handleClick = () => {
    onClick?.(item);
    setSubMenuOpen(!subMenuOpen);
  };
  const setHover = state => () => setHovering(state);

  const isSelected = useMemo(() => pathMatches(item, location), [item, location]);
  const ImgComponent = item?.icon;
  const ItemComponent = item?.subMenus?.length || !!item?.onClick ? 'button' : Link;

  const isSelectedOrHovering = isSelected || isHovering;

  return {
    setHover,
    ImgComponent,
    ItemComponent,
    isSelectedOrHovering,
    openSubMenu,
    handleClick,
    isSelected,
    isHovering,
    subMenuOpen
  };
};

export default useMenuItem;
