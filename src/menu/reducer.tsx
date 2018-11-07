import { MenuList, MenuListProps, IMenuProps } from './menu';
import { action, props, union } from 'ts-action';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

export const MenuSelected = action('MENU_SELECTED', props<{ menu: string }>());
const All = union({ MenuSelected });
interface State {
  menu_selected: string;
}
const initialState: State = { menu_selected: 'order' };

export function menu(state = initialState, action: typeof All): State {
  switch (action.type) {
    case MenuSelected.type:
      return { ...state, menu_selected: action.menu };
    default:
      return state;
  }
}
const menus = [
  { id: 'dashboard', title: 'Dashboard' },
  { id: 'order', title: 'Order Management' },
  { id: 'shipping', title: 'Shipping' },
];
function getMenuListWithSelected(state: State) {
  const activeselected = (i: IMenuProps) => ({
    ...i,
    active: state.menu_selected == i.id,
  });
  return menus.map(activeselected);
}
type T0 = Pick<MenuListProps, 'selected' | 'menus'>;
const mapStateToProps = (state: { menu: State }): T0 => {
  console.log(state);
  return {
    selected: state.menu && state.menu.menu_selected,
    menus: getMenuListWithSelected(state.menu),
  };
};
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onMenuClicked: (id: string) => {
      dispatch(new MenuSelected({ menu: id }));
    },
  };
};

export const MenuListApp = connect<T0>(
  mapStateToProps,
  mapDispatchToProps
)(MenuList);
