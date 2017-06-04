import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => (Component) => {
  const ContainerComponent = (props, context) => {
    return (
      <Component
        {...props}
        {...extraProps(context.store, props)}
      />
    );
  };

  ContainerComponent.contextTypes = {
    store: PropTypes.object,
  };

  ContainerComponent.displayName = `${Component.name}Container`;

  return ContainerComponent;
};

export default storeProvider;
