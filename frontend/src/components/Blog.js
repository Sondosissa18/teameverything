//inspiration: https://scotch.io/tutorials/build-a-blog-using-expressjs-and-react-in-30-minutes

import React, { Component } from "react";
import ReactDom from "react-dom";

("use strict");
const e = React.createElement;

const AppNav = () => (
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      My Sports Blog
    </a>
  </nav>
);

const Card = ({ item, handleSubmit, handleEdit, handleDelete, handleCancel }) => {
  const { title, content, editMode } = item;

  if (editMode) {
    return (
      <div class="card mt-4" Style="width: 100%;">
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={item.id} />
            <div class="input-group input-group-sm mb-3">
              <input type="text" name="title" class="form-control" placeholder="Title" defaultValue={title} />
            </div>
            <div class="input-group input-group-sm mb-3">
              <textarea name="content" class="form-control" placeholder="Content" defaultValue={content}></textarea>
            </div>
            <button type="button" class="btn btn-outline-secondary btn-sm" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" class="btn btn-info btn-sm ml-2">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div class="card mt-4" Style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">{title || "No Title"}</h5>
          <p class="card-text">{content || "No Content"}</p>
          <button type="button" class="btn btn-outline-danger btn-sm" onClick={handleDelete}>
            Delete
          </button>
          <button type="submit" class="btn btn-info btn-sm ml-2" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    );
  }
};

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const response = await fetch("/posts");
    const data = await response.json();
    data.forEach((item) => (item.editMode = false));
    this.setState({ data });
  };

  addNewPost = () => {
    const data = this.state.data;
    data.unshift({
      editMode: true,
      title: "",
      content: "",
    });
    this.setState({ data });
  };

  handleCancel = async () => {
    await this.getPosts();
  };

  handleEdit = (postId) => {
    const data = this.state.data.map((item) => {
      if (item.id === postId) {
        item.editMode = true;
      }
      return item;
    });
    this.setState({ data });
  };

  handleDelete = async (postId) => {
    await fetch(`/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    await this.getPosts();
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const body = JSON.stringify({
      title: data.get("title"),
      content: data.get("content"),
    });

    const headers = {
      "content-type": "application/json",
      accept: "application/json",
    };

    if (data.get("id")) {
      await fetch(`/posts/${data.get("id")}`, {
        method: "PUT",
        headers,
        body,
      });
    } else {
      await fetch("/posts", {
        method: "POST",
        headers,
        body,
      });
    }
    await this.getPosts();
  };

  render() {
    return (
      <div>
        <AppNav />
        <button type="button" class="mt-4 mb-2 btn btn-primary btn-sm float-right" onClick={this.addNewPost}>
          Add New Post
        </button>
        {this.state.data.length > 0 ? (
          this.state.data.map((item) => (
            <Card
              item={item}
              handleSubmit={this.handleSubmit}
              handleEdit={this.handleEdit.bind(this, item.id)}
              handleDelete={this.handleDelete.bind(this, item.id)}
              handleCancel={this.handleCancel}
            />
          ))
        ) : (
          <div class="card mt-5 col-sm">
            <div class="card-body">You don't have any post. Use the "Add New Post" button to add some new posts!</div>
          </div>
        )}
      </div>
    );
  }
}

//const domContainer = document.querySelector("#root");
export default Blog;

// class Blog extends Component {
//   render() {
//     return (
//       <div>
//         <h2>EverythingSports </h2>
//         <p>The Facebook of Sports.</p>
//         <h3>A Blog Post</h3>
//         <p>
//           Lorem ipsum dolor sit amet, duo vidit ullamcorper eu, mollis utroque vis ne, fugit nominavi scripserit ex vim.
//           Assum quaerendum delicatissimi vix id, nobis iisque vim ad, commodo consetetur incorrupte et quo. No per magna
//           inermis neglegentur, ius elit accusata maluisset an, quo posse viris an. Sed ad fabulas utroque repudiandae,
//           eu sit pertinax delicata, postulant efficiantur vis cu. Id cum commodo definitiones.
//         </p>
//         <p>
//           Civibus ponderum cu eum, ut mel errem tamquam intellegam, ea eos dico enim. Ne stet conclusionemque cum. Per
//           solum essent recteque eu. Nulla blandit ei eos, adhuc fabulas cu vim.
//         </p>
//         <p>
//           Id dicunt phaedrum sententiae pri. Per modo dico modus an, ex noster singulis eos, pro cu saepe elaboraret
//           vituperatoribus. Te sumo fuisset verterem sit, utinam volutpat te sit, ne ius euripidis percipitur. Albucius
//           repudiare nec an, an sanctus scaevola ullamcorper duo, et inimicus ocurreret vel. Ne iriure timeam mel. Vim cu
//           dico feugait.
//         </p>
//         <p>
//           Nam inani percipitur no, ne vix omnesque repudiandae. Ius cu elit mediocritatem. Te eum argumentum inciderint,
//           omnis tempor intellegat vel in. Rebum elaboraret eum ex.
//         </p>
//         <p>
//           Cum ea quidam senserit splendide. Purto labore nec cu, nullam graeci te pro. Ne sale soluta nec, magna rebum
//           prompta ea eam. Quodsi impetus philosophia eos ad. Cum diam iuvaret ea, per ne blandit pericula. Consul
//           molestie vis cu, no soleat recteque sea. Hinc vitae referrentur cum an, vel debet phaedrum ei.
//         </p>
//       </div>
//     );
//   }
// }

// export default Blog;
