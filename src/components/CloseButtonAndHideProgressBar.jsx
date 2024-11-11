import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CloseButtonToast() {
  const notify = () =>
    toast('Toast with close button', { closeButton: true, progressBar: false });

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  );
}

export default CloseButtonToast;
