import "./App.css";
import React, { useState } from "react";
import Navbar from "./cstm_components/Navbar";
import Newsbox from "./cstm_components/Newsbox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
	const [mode, setMode] = useState("light");
	const [progress, setProg] = useState(0);

	const toggleMode = () => {
		setMode(mode === "light" ? "dark" : "light");
		document.body.style.backgroundColor = mode === "dark" ? "white" : "black";
	};

	const pageSize = 8;
	const apiKey = process.env.REACT_APP_NEWS_API;
	return (
		<div>
			<Router>
				<Navbar mode={mode} toggleMode={toggleMode} />
				<LoadingBar
					color={mode === "dark" ? "#FFFFFF" : "#000000"}
					progress={progress}
				/>
				<Switch>
					<Route exact path="/">
						<Newsbox
							setProgress={setProg}
							apiKey={apiKey}
							key="gen"
							pageSize={pageSize}
							category="general"
							mode={mode}
						/>
					</Route>
					<Route exact path="/business">
						<Newsbox
							setProgress={setProg}
							apiKey={apiKey}
							key="bus"
							pageSize={pageSize}
							category="business"
							mode={mode}
						/>
					</Route>
					<Route exact path="/entertainment">
						<Newsbox
							setProgress={setProg}
							apiKey={apiKey}
							key="ent"
							pageSize={pageSize}
							category="entertainment"
							mode={mode}
						/>
					</Route>
					<Route exact path="/health">
						<Newsbox
							setProgress={setProg}
							apiKey={apiKey}
							key="hlt"
							pageSize={pageSize}
							category="health"
							mode={mode}
						/>
					</Route>
					<Route exact path="/science">
						<Newsbox
							setProgress={setProg}
							apiKey={apiKey}
							key="sci"
							pageSize={pageSize}
							category="science"
							mode={mode}
						/>
					</Route>
					<Route exact path="/sports">
						<Newsbox
							setProgress={setProg}
							apiKey={apiKey}
							key="spr"
							pageSize={pageSize}
							category="sports"
							mode={mode}
						/>
					</Route>
					<Route exact path="/technology">
						<Newsbox
							setProgress={setProg}
							apiKey={apiKey}
							key="tech"
							pageSize={pageSize}
							category="technology"
							mode={mode}
						/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
};
export default App;
