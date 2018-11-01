import React from 'react';
import { MenuList } from './menu';
import { action, props, union } from 'ts-action';
// import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

const MenuSelected = action('MENU_SELECTED', props<{ menu: string }>());
const All = union({ MenuSelected });
interface State {
  selected?: string;
}
const initialState = { selected: '' };

export function menubar(state = initialState, action: typeof All): State {
  switch (action.type) {
    case MenuSelected.type:
      return { ...state, selected: action.menu };
    default:
      return state;
  }
}

const mapStateToProps = (state: State) => {
  return {
    selected: state.selected,
    menus: [
      { id: 'dashboard', title: 'Dashboard' },
      { id: 'orders', title: 'Order Management' },
      { id: 'shipping', title: 'Shipping' },
    ],
  };
};
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onClick: (id: string) => {
      // dispatch(new MenuSelected({ menu: id }));
      console.log(event);
    },
  };
};

const onClicked = (event: React.MouseEvent) => {
  console.log('clicked');
};

const menus = [
  { id: 'dashboard', title: 'Dashboard', onClick: onClicked },
  { id: 'orders', title: 'Order Management' },
  { id: 'shipping', title: 'Shipping' },
];

export const MenuListApp = () => <MenuList menus={menus} />;
// export const MenuListApp= connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MenuList);
