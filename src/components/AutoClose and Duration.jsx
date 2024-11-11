import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AutoCloseToast() {
  const notify = () =>
    toast('This toast will close in 3 seconds!', { autoClose: 3000 });

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  );
}

export default AutoCloseToast;
