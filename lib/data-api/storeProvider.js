import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => (Component) => {
  return class extends React.PureComponent {
    static contextTypes = {
      store: PropTypes.object,
    };
    static displayName = `${Component.name}Container`;
    render() {
      return (
        <Component
          {...this.props}
          {...extraProps(this.context.store, this.props)}
        />
      );
    }
  };
};

export default storeProvider;
