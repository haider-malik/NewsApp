import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class Newsbox extends Component {

	// constructor
	constructor() {
		super();
		this.state = {
			articles: [],
			loading: false,
		};
  }
  
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=69823bafa652459a8eefdf6b1230054a";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles
    })
  }

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
									title={element.title? element.title.slice(0, 40): ""}
									description={element.description? element.description.slice(0, 80):""}
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
        </div>
				</div>
		);
	}
}

export default Newsbox;
