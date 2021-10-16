import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class Newsbox extends Component {
  // constructor
  constructor() {
    super();
    this.state = {
      totalResults: 0,
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // function to capitalise first letter of a word 
  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  update = async (pageNo) => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category
      }&apikey=${this.props.apiKey}&page=${this.state.page + pageNo
      }&pageSize=${this.props.pageSize}`;
    document.title = `Newstation | ${this.capitalize(this.props.category)}`
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
      page: this.state.page + pageNo,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.update(0);
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category
      }&apikey=${this.props.apiKey}&page=${this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
    });
  }

  // handlePrevclick = async () => {
  //   this.update(-1);
  // };

  // handleNextclick = async () => {
  //   this.update(1);
  // };

  render() {
    return (
			<div
				style={{
					top: "0",
					width: "100%",
					color: this.props.mode === "light" ? "black" : "white",
					backgroundColor: "transparent",
				}}
			>
				{/* <h2
					className="text-center my-3"
					style={{
						backgroundColor: "transparent",
						zIndex: "-1",
					}}
				>
					Top Headlines
				</h2>
				{this.state.loading && <Spinner />} */}

				<InfiniteScroll
					dataLength={this.state.articles === "undefined"? 0: this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={<Spinner />}
				>
					<h2
						className="text-center my-3"
						style={{
							backgroundColor: "transparent",
							zIndex: "-1",
						}}
					>
            Top Headlines - {this.capitalize(this.props.category)}
					</h2>
					{this.state.loading && <Spinner />}
					<div
						className="row text-center"
						style={{
							justifyContent: "center",
							width: "100%",
							maxWidth: "1000px",
							margin: "auto",
						}}
					>
						{!this.state.loading &&
							this.state.articles.map((element) => {
								return (
									<div key={element.url} className="col-md-3">
										<Newsitem
											mode={this.props.mode}
											title={element.title ? element.title.slice(0, 40) : ""}
											description={
												element.description
													? element.description.slice(0, 80)
													: ""
											}
											urlToImage={
												element.urlToImage
													? element.urlToImage
													: "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"
											}
											url={element.url}
											author={element.author ? element.author : ""}
											source={element.source.name}
											date={element.publishedAt}
										/>
									</div>
								);
							})}
						{/* <div className="conatainer d-flex justify-content-evenly my-3 mb-4"> */}
						{/* <button
								onClick={this.handlePrevclick}
								disabled={this.state.page <= 1}
								type="button mx-3"
								className="btn btn-danger"
							>
								&larr; Previous
							</button> */}
						{/* <button
								disabled={
									this.state.page >=
									Math.ceil(this.state.totalResults / this.props.pageSize)
								}
								onClick={this.handleNextclick}
								type="button mx-3"
								className="btn btn-danger"
							>
								Next &rarr;
							</button> */}
						{/* </div> */}
					</div>
				</InfiniteScroll>
			</div>
		);
  }
}

export default Newsbox;
