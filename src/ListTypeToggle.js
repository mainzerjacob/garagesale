import React, { Component } from 'react';

class ListTypeToggle extends Component {
  constructor (props) {
    super(props);
    this.toggleList = this.toggleList.bind(this);
    this.toggleGrid = this.toggleGrid.bind(this);
  }
  render() {
    const { listType } = this.props;
    return (
      <div className="btn-group list-toggle" role="group">
        <button className={listType === "list" ? "btn btn-secondary active" : "btn btn-light "} title="List View" onClick={this.toggleList}>
          <i className="fas fa-list"/>
        </button>
        <button className={listType === "grid" ? "btn btn-secondary active" : "btn btn-light "} title="Grid View" onClick={this.toggleGrid}>
          <i className="fas fa-th-large"/>
        </button>
      </div>
    );
  }
  toggleList() {
    this.props.setListType("list");
  }
  toggleGrid() {
    this.props.setListType("grid");
  }
}

export default ListTypeToggle;