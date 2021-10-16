import "./App.css";
import React, { Component } from "react";
import Navbar from "./cstm_components/Navbar";
import Newsbox from "./cstm_components/Newsbox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			mode: "light",
			progress: 0,
		};
	}

	toggleMode = () => {
		this.setState({
			mode: this.state.mode === "light" ? "dark" : "light",
		});
		document.body.style.backgroundColor =
			this.state.mode === "dark" ? "white" : "black";
	};

	setProgress = (progress) => {
		this.setState({
			progress: progress,
		});
	};

	pageSize = 8;
	apiKey = process.env.REACT_APP_NEWS_API;
	render() {
		return (
			<div>
				<Router>
					<Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
					<LoadingBar
						color={this.state.mode === "dark" ? "#FFFFFF" : "#000000"}
						progress={this.state.progress}
					/>
					<Switch>
						<Route exact path="/">
							<Newsbox
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="gen"
								pageSize={this.pageSize}
								category="general"
								mode={this.state.mode}
							/>
						</Route>
						<Route exact path="/business">
							<Newsbox
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="bus"
								pageSize={this.pageSize}
								category="business"
								mode={this.state.mode}
							/>
						</Route>
						<Route exact path="/entertainment">
							<Newsbox
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="ent"
								pageSize={this.pageSize}
								category="entertainment"
								mode={this.state.mode}
							/>
						</Route>
						<Route exact path="/health">
							<Newsbox
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="hlt"
								pageSize={this.pageSize}
								category="health"
								mode={this.state.mode}
							/>
						</Route>
						<Route exact path="/science">
							<Newsbox
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="sci"
								pageSize={this.pageSize}
								category="science"
								mode={this.state.mode}
							/>
						</Route>
						<Route exact path="/sports">
							<Newsbox
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="spr"
								pageSize={this.pageSize}
								category="sports"
								mode={this.state.mode}
							/>
						</Route>
						<Route exact path="/technology">
							<Newsbox
								setProgress={this.setProgress}
								apiKey={this.apiKey}
								key="tech"
								pageSize={this.pageSize}
								category="technology"
								mode={this.state.mode}
							/>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
