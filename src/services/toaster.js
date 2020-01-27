import { notification } from 'antd';

const toaster = (message, description = null) => type => {
  notification[type]({ message, description });
  console.tron.display({ name: type, preview: message, value: description });
};

export default toaster;
