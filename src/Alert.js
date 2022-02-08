import { useEffect } from 'react';

const Alert = ({ message, alert, removeAlert, notes }) => {
  useEffect(() => {
    setTimeout(() => {
      removeAlert();
    }, 2000);
  }, [removeAlert, notes]);

  return <span className={`alert alert-${alert}`}>{message}</span>;
};

export default Alert;
