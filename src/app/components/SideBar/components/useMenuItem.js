import { useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { pathMatches } from '~utils/paths';

const useMenuItem = ({ item, onClick }) => {
  const location = useLocation();

  const subMenuSelected = item.subMenus?.some(subItem => pathMatches(subItem, location));
  const [subMenuOpen, setSubMenuOpen] = useState(subMenuSelected);

  const openSubMenu = () => setSubMenuOpen(!subMenuOpen);
  const handleClick = () => {
    onClick?.(item);
    setSubMenuOpen(!subMenuOpen);
  };

  const isSelected = useMemo(() => pathMatches(item, location), [item, location]);
  const icon = item?.icon;
  const ItemComponent = item?.subMenus?.length || !!item?.onClick ? 'button' : Link;

  return {
    icon,
    ItemComponent,
    openSubMenu,
    handleClick,
    isSelected,
    subMenuOpen
  };
};

export default useMenuItem;
