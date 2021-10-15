import "./App.css";
import React, { Component } from "react";
import Navbar from "./cstm_components/Navbar";
import Newsbox from "./cstm_components/Newsbox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode:"light"
    }
  }

  toggleMode = () => {
    this.setState({
      mode:this.state.mode === "light" ? "dark":"light"
    })
    document.body.style.backgroundColor =
			this.state.mode === "dark" ? "white" : "black";
  }

  pageSize = 8;
	render() {
		return (
			<div>
				<Router>
				<Navbar mode = {this.state.mode} toggleMode = {this.toggleMode}/>
					<Switch>
						<Route exact path="/">
							<Newsbox key="gen" pageSize={this.pageSize} category="general" mode={this.state.mode}/>
						</Route>
						<Route exact path="/business">
							<Newsbox key="bus" pageSize={this.pageSize} category="business" mode={this.state.mode}/>
						</Route>
						<Route exact path="/entertainment">
							<Newsbox key="ent" pageSize={this.pageSize} category="entertainment" mode={this.state.mode}/>
						</Route>
						<Route exact path="/health">
							<Newsbox key="hlt" pageSize={this.pageSize} category="health" mode={this.state.mode}/>
						</Route>
						<Route exact path="/science">
							<Newsbox key="sci" pageSize={this.pageSize} category="science" mode={this.state.mode}/>
						</Route>
						<Route exact path="/sports">
							<Newsbox key="spr" pageSize={this.pageSize} category="sports" mode={this.state.mode}/>
						</Route>
						<Route exact path="/technology">
							<Newsbox key="tech" pageSize={this.pageSize} category="technology" mode={this.state.mode}/>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
