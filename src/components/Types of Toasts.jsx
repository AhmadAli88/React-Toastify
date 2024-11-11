import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastTypes() {
  const notifySuccess = () => toast.success('Success! Operation completed.');
  const notifyError = () => toast.error('Error! Something went wrong.');
  const notifyInfo = () =>
    toast.info('Info: This is an informational message.');
  const notifyWarning = () => toast.warning('Warning! Be cautious.');

  return (
    <div>
      <button onClick={notifySuccess}>Show Success Toast</button>
      <button onClick={notifyError}>Show Error Toast</button>
      <button onClick={notifyInfo}>Show Info Toast</button>
      <button onClick={notifyWarning}>Show Warning Toast</button>

      <ToastContainer />
    </div>
  );
}

export default ToastTypes;
