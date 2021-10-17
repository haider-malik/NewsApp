import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Newsbox = (props) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalResults, settotalResults] = useState(0);

	// function to capitalise first letter of a word
	const capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const update = async (pageNo) => {
		props.setProgress(10);
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
			props.category
		}&apikey=${props.apiKey}&page=${page + pageNo}&pageSize=${props.pageSize}`;
		document.title = `Newstation | ${capitalize(props.category)}`;

		let data = await fetch(url);
		props.setProgress(30);
		let parsedData = await data.json();
		props.setProgress(70);

		// setting the state of the component
		setArticles(parsedData.articles);
		setPage(page + pageNo);
		setLoading(false);
		settotalResults(parsedData.totalResults);

		props.setProgress(100);
	};

	useEffect(() => {
		update(0);
	});

	const fetchMoreData = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
			props.category
		}&apikey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();

		setArticles(articles.concat(parsedData.articles));
		setPage(page + 1);
		settotalResults(parsedData.totalResults);
	};

	// handlePrevclick = async () => {
	//   update(-1);
	// };

	// handleNextclick = async () => {
	//   update(1);
	// };

	return (
		<div
			style={{
				top: "0",
				width: "100%",
				color: props.mode === "light" ? "black" : "white",
				backgroundColor: "transparent",
			}}
		>
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={<Spinner />}
			>
				<h2
					className="text-center my-3"
					style={{
						backgroundColor: "transparent",
						zIndex: "-1",
						margin: "90px 0px",
					}}
				>
					Top Headlines - {capitalize(props.category)}
				</h2>
				{loading && <Spinner />}
				<div
					className="row text-center"
					style={{
						justifyContent: "center",
						width: "100%",
						maxWidth: "1000px",
						margin: "auto",
					}}
				>
					{!loading &&
						articles.map((element) => {
							return (
								<div key={element.url} className="col-md-3">
									<Newsitem
										mode={props.mode}
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
								onClick={handlePrevclick}
								disabled={page <= 1}
								type="button mx-3"
								className="btn btn-danger"
							>
								&larr; Previous
							</button> */}
					{/* <button
								disabled={
									page >=
									Math.ceil(totalResults / props.pageSize)
								}
								onClick={handleNextclick}
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
};

export default Newsbox;
