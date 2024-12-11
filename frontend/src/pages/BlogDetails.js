import React from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
	const { id } = useParams();

	return (
		<div className="container mx-auto p-4">
			<h2 className="text-3xl font-bold">ブログ記事詳細</h2>
			<p>この記事のID: {id}</p>
		</div>
	);
}

export default BlogDetails;
