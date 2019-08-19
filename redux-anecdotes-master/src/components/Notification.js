import React from 'react';
import {connect} from 'react-redux';

const Notification = ({notification}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };
  return (
    notification && <div style={style}>
      {notification}
    </div>
  )
};

const mapStateToProps = ({notification}) => ({
  notification: notification.message
});

export default connect(mapStateToProps)(Notification);