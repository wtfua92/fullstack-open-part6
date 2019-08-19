import React from 'react'

const Notification = ({store}) => {
  const notification = store.getState().notification.message;
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

export default Notification