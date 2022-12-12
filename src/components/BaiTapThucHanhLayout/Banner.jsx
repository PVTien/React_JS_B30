import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <section className="banner py-5">
        <div className="container px-5">
          <div className="banner__content bg-light p-5">
            <h1 className="font-weight-bold">A warm welcome!</h1>
            <p>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <button className="btn btn-primary">Call to action</button>
          </div>
        </div>
      </section>
    );
  }
}
