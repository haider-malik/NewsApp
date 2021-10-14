import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, urlToImage, url } = this.props;
		return (
			<div>
        <div className="card my-3" style={{
          maxWidth:"250px",
          margin: "auto"
        }}>
					<img src={urlToImage} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}...</h5>
						<p className="card-text">
							{description}...
						</p>
						<a href={url} target="_blank" className="btn btn-primary">
              Expand
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Newsitem;