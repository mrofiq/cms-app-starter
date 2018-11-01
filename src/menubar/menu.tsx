import React from 'react';

interface IMenuProps {
  /** ID Menu */
  id: string;
  /** Judul menu */
  title: string;
  onClick?: React.MouseEventHandler;
}

export const Menu = (props: IMenuProps) => {
  return <div onClick={props.onClick}>{props.title}</div>;
};

export const MenuList = (props: { menus: IMenuProps[] }) => {
  return (
    <ul>
      {props.menus.map(i => (
        <Menu {...i} key={i.id} />
      ))}
    </ul>
  );
};
