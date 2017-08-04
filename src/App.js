import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import load from './utils/load';
import Searchbar from './components/SearchBar';
import ActiveUser from './components/ActiveUser';
import Toolbar from './components/Toolbar';


function logChange(val) {
  console.log(val);
}
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      ranks: null,
      active: 0,
      term: ''
    };

    this.loadUser();
    this.loadRank();
  }

  loadUser() {
    load(this.props.data).then(users => {
      this.initialData = JSON.parse(users);
      this.setState({
        data: this.initialData
      });
    });
  }
  loadRank() {
    load(this.props.ranks).then(ranks => {
      this.initialData = JSON.parse(ranks);
      this.setState({
        ranks: this.initialData
      });

    });
  }

  updateData(config) {
    console.log(this.state);
    this.setState(config);
  };

  render() {
    logChange();
    return (
      <div className="app">
        <header className="navbar navbar-static-top bs-docs-nav" id="header">
        </header>
        <div className=" container-fluid">
          <div className="row" >
              <div className="col-md-offset-2 col-md-8" id="editUser">
                <h3>Редактирование</h3>
                <hr />
                <div className="">
                  <ActiveUser data={this.state.data} active={this.state.active} rank={this.state.ranks}/>
                </div>
              </div>
          </div>
          <br />

          <div className="row">
            <div className="col-md-offset-2 col-md-8" id="editUser">
              <Searchbar
                term={this.state.term}
                data={this.initialData}
                update={this.updateData.bind(this)}
              />
              <Toolbar initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)} />
              <UserList data={this.state.data} update={this.updateData.bind(this)} />
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
