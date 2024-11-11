import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DelayedToast() {
  useEffect(() => {
    setTimeout(() => {
      toast("This toast shows after 3 seconds!");
    }, 3000);
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default DelayedToast;
