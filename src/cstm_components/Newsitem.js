import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, urlToImage, url, author, date, source, mode } = this.props;
		return (
			<div>
				<div
					className="card my-3"
					style={{
						fontSize: "auto",
						maxWidth: "250px",
						margin: "auto",
						color: mode === "light" ? "black" : "white",
						backgroundColor:
							mode === "light" ? "rgb(249, 249, 249)" : "rgb(29, 29, 29)",
						boxShadow:
							mode === "dark"
								? "none"
								: "rgb(133, 133, 133) -2px -2px 40px",
						border: "none",
					}}
				>
					<div
						className="img"
						style={{
							height: "130px",
							width: "100%",
							background: `url(${urlToImage}) no-repeat center center/cover`,
						}}
					></div>
					<span
						className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
						style={{
							zIndex: "1",
							left: "80%",
						}}
					>
						{source}
						<span className="visually-hidden">unread messages</span>
					</span>
					<div className="card-body">
						<h5 className="card-title">{title}...</h5>
						<p className="card-text">{description}...</p>
						<p className="card-text">
							<small className="text-muted">
								By {author ? author : "Unknown"} on{" "}
								{new Date(date).toDateString()}
							</small>
						</p>
						<a
							rel="noreferrer"
							href={url}
							target="_blank"
							className="btn btn-primary"
						>
							Expand
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Newsitem;
