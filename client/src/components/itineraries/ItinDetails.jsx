import React, { Component } from "react";

export default class Details extends Component {
  render() {
    return (
      <div className="row">
        <div className="collapse" id="moreInfo">

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          voluptates rem unde sunt, tempore reprehenderit pariatur aut nihil
          officia nesciunt commodi tenetur iure illum eveniet quidem eos harum
          delectus est!
        </div>
        <div>
          <h4>
            <a
              href="#moreInfo"
              className="btn    "
              role="button"
              data-toggle="collapse"
            >
              ver mas
            </a>
          </h4>
        </div>
      </div>
    );
  }
}
