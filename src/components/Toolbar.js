import React, { Component } from 'react';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.sorted = { birth_date: true, name: true };
  }

  sort(type) {
    const { update, data } = this.props;
    const isSorted = this.sorted[type];
    let direction = isSorted ? 1 : -1;

    const sorted = [].slice.call(data).sort((a, b) => {
      if (a[type] === b[type]) { return 0; }
      return a[type] > b[type] ? direction : direction * -1;
    });

    this.sorted[type] = !isSorted;

    update({
      data: sorted,
      active: 0
    });
  }

  reset() {
    this.props.update({
      data: this.props.initialData,
      term: '',
      active: 0
    });
  }

  render() {
    return (
      <div className="toolbar col-md-4">
        <button className="btn btn-default" onClick={() => this.sort('name')}>
          <i className="fa fa-sort-alpha-asc"></i> Сорт. по имени
        </button>
        <button className="btn btn-default" onClick={() => this.sort('birth_date')}>
          <i className="fa fa-sort-numeric-desc"></i>  Сорт. по возрасту
        </button>
      </div>
    )
  }
}
