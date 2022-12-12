import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <section className="List">
        <div className="container">
          <div className="row">
            <div className="col-4 mb-5">
              <div className="card bg-light border-0">
                <div className="card-body p-5">
                  <div className="icon bg-primary text-white mb-4 mt-n4">
                    <i class="fa-solid fa-layer-group"></i>
                  </div>
                  <h2 className="card-title font-weight-bold">
                    Fresh new layout
                  </h2>
                  <p className="card-text mb-0">
                    With Bootstrap 5, we've created a fresh new layout for this
                    template!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0">
                <div className="card-body p-5">
                  <div className="icon bg-primary text-white mb-4 mt-n4">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                  </div>
                  <h2 className="card-title font-weight-bold">
                    Free to download
                  </h2>
                  <p className="card-text mb-0">
                    As always, Start Bootstrap has a powerful collectin of free
                    templates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0">
                <div className="card-body p-5">
                  <div className="icon bg-primary text-white mb-4 mt-n4">
                    <i class="fa-solid fa-table-list"></i>
                  </div>
                  <h2 className="card-title font-weight-bold">
                    Jumbotron hero header
                  </h2>
                  <p className="card-text mb-0">
                    The heroic part of this template is the jumbotron hero
                    header!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0">
                <div className="card-body p-5">
                  <div className="icon bg-primary text-white mb-4 mt-n4">
                    <i class="fa-solid fa-box-open"></i>
                  </div>
                  <h2 className="card-title font-weight-bold">Feature boxes</h2>
                  <p className="card-text mb-0">
                    We've created some custom feature boxes using Bootstrap
                    icons!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0">
                <div className="card-body p-5">
                  <div className="icon bg-primary text-white mb-4 mt-n4">
                    <i class="fa-solid fa-code"></i>
                  </div>
                  <h2 className="card-title font-weight-bold">
                    Simple clean code
                  </h2>
                  <p className="card-text mb-0">
                    We keep our dependencies up to date and squash bugs as they
                    come!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mb-5">
              <div className="card bg-light border-0">
                <div className="card-body p-5">
                  <div className="icon bg-primary text-white mb-4 mt-n4">
                    <i class="fa-solid fa-circle-check"></i>
                  </div>
                  <h2 className="card-title font-weight-bold">
                    A name you trust
                  </h2>
                  <p className="card-text mb-0">
                    Start Bootstrap has been the leader in free Bootstrap
                    templates since 2013!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
