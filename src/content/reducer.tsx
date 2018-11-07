import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MenuSelected } from '../menubar/reducer';
import OrderList from './OrderList';
import { ShippingList } from './ShippingList';

const Contents = { order: OrderList, shipping: ShippingList };

let ContentType: keyof typeof Contents;

export interface State {
  current_page: typeof ContentType;
}

const initialState: State = { current_page: 'order' };

export function content(state = initialState, action: any): State {
  switch (action.type) {
    case MenuSelected.type:
      return { ...state, current_page: action.menu };
    default:
      return { ...state };
  }
}

interface ContentProps {
  page: typeof ContentType;
}
class Content extends Component<ContentProps, any> {
  render() {
    const Content = Contents[this.props.page || 'order'];
    return <Content />;
  }
}

const mapStateToProps = (state: { content: State }) => {
  return {
    page: state.content.current_page,
  };
};

const mapDispatchToProps = {};

export const ContentApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
