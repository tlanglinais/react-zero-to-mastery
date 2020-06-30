import React from "react";

const withData = (WrappedComponent) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      setTimeout(() => {
        fetch(this.props.dataSource)
          .then((_response) => _response.json())
          .then((_data) => this.setState({ data: _data.slice(0, 3) }));
      }, 1500);
    }

    render() {
      return this.state.data.length < 1 ? (
        <h1>LOADING</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }

  return WithData;
};

export default withData;
