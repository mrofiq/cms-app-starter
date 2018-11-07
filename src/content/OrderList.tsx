import React, { Component } from 'react';
import { Table } from 'reactstrap';

const data = [{ id: 1, title: 'title' }, { id: 2, title: 'title2' }];
export default class OrderList extends Component {
  public render() {
    let orderlist = data.map(i => (
      <tr>
        <td>{i.id}</td>
        <td>{i.title}</td>
      </tr>
    ));
    let i = 'row';
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          {orderlist}
        </tbody>
      </Table>
    );
  }
}
