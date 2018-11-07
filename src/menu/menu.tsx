import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export interface IMenuProps {
  /** ID Menu */
  id: string;
  /** Judul menu */
  title: string;
  active?: boolean;
  onClick?: React.MouseEventHandler;
}

export interface MenuListProps {
  selected?: string;
  menus: IMenuProps[];
  onMenuClicked?: (id: string) => void;
}

export class MenuList extends Component<MenuListProps, any> {
  render() {
    const onClick = (id: string) => (event: React.MouseEvent) => {
      this.props.onMenuClicked && this.props.onMenuClicked(id);
    };
    return (
      <ListGroup>
        {this.props.menus.map(i => (
          <ListGroupItem {...i} key={i.id} onClick={onClick(i.id)}>
            {i.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
