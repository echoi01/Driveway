import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Logout = (props) => {
  return (
    <div onClick={props.onClick}>
      <Button>Logout</Button>
    </div>
  )
}

Logout.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Logout;