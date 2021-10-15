import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class Newsbox extends Component {
	// constructor
	constructor() {
		super();
    this.state = {
      totalResults:0,
			articles: [],
			loading: false,
			page: 1,
		};
	}

	async componentDidMount() {
		let url =
			"https://newsapi.org/v2/top-headlines?country=in&apiKey=69823bafa652459a8eefdf6b1230054a&page=1&pageSize=20";
		let data = await fetch(url);
		let parsedData = await data.json();
    this.setState({
      totalResults: parsedData.totalResults,
			articles: parsedData.articles,
			page: 1,
		});
	}

	handlePrevclick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=69823bafa652459a8eefdf6b1230054a&page=${
			this.state.page - 1
		}&pageSize=20`;
		let data = await fetch(url);
		let parsedData = await data.json();
    this.setState({
			totalResults: parsedData.totalResults,
			articles: parsedData.articles,
			page: this.state.page - 1,
		});
	};

	handleNextclick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=69823bafa652459a8eefdf6b1230054a&page=${
			this.state.page + 1
		}&pageSize=20`;
		let data = await fetch(url);
		let parsedData = await data.json();
    this.setState({
			totalResults: parsedData.totalResults,
			articles: parsedData.articles,
			page: this.state.page + 1,
		});
	};

	render() {
		return (
			<div
				style={{
					width: "100%",
				}}
			>
				<h2 className="text-center my-3">Newsatonian - Top Headlines</h2>

				<div
					className="row text-center"
					style={{
						justifyContent: "center",
						width: "100%",
						margin: "auto",
					}}
				>
					{this.state.articles.map((element) => {
						return (
							<div key={element.url} className="col-md-3">
								<Newsitem
									title={element.title ? element.title.slice(0, 40) : ""}
									description={
										element.description ? element.description.slice(0, 80) : ""
									}
									urlToImage={
										element.urlToImage
											? element.urlToImage
											: "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"
									}
									url={element.url}
								/>
							</div>
						);
					})}
					<div className="conatainer d-flex justify-content-evenly my-3 mb-4">
						<button
							onClick={this.handlePrevclick}
							disabled={this.state.page <= 1}
							type="button mx-3"
							className="btn btn-dark"
						>
							&larr; Previous
						</button>
						<button
							disabled={this.state.page >= Math.ceil(this.state.totalResults / 20)}
							onClick={this.handleNextclick}
							type="button mx-3"
							className="btn btn-dark"
						>
							Next &rarr;
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Newsbox;
