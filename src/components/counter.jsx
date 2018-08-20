// import React, { Component } from "react";
// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: []
//   };

//   renderTags() {
//     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
//     return (
//       <ul>
//         {this.state.tags.map(tag => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return (
//       <div>
//         {this.state.tags.length === 0 && "Please crete a new tag!"}
//         {this.renderTags()}
//       </div>
//     );
//   }
// }

// export default Counter;

////////////////////////////////////////////////////////////

import React, { Component } from "react";
class Counter extends Component {
  //   state = {
  //     count: this.props.counter.value
  //   };
  //   handleIncrement = product => {
  //     // instead of having constructor use arrow function to make cleaner
  //     //console.log(product);
  //     this.setState({ count: this.state.count + 1 }); //update the state and DOM
  //   };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    //console.log("props", this.props);
    //console.log(this.props);
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={"btn btn-secondary btn-sm"}
        >
          {" "}
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    // bootstap color condition
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    // print value
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}
export default Counter;
//   constructor() {
//     // method
//     super(); // to enable this in handleIncrement
//     this.handleIncrement = this.handleIncrement.bind(this);
//   }
//   doHandleIncrement = () => {
//     this.handleIncrement({ id: 1 });
//   };
