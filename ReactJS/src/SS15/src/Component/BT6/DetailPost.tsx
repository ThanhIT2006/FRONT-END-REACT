import React, { Component } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface Props {
  posts: Post[];
}

export default class DetailPost extends Component<Props> {
  render() {
    return (
      <div>
        <h2>Danh Sách Bài Viết</h2>
        {this.props.posts.map((post) => (
          <p key={post.id}>
            <br />
            <span>ID: {post.id}</span>
            <br />
            <span>Title: {post.title}</span>
            <br />
            <span>Content: {post.content}</span>
            <br />
            <span>Author: {post.author}</span>
            <hr />
          </p>
        ))}
      </div>
    );
  }
}
