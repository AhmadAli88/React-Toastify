
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomToast() {
  const notify = () => toast(
    <div>
      <span role="img" aria-label="check">✅</span> Custom Toast Message
    </div>
  );

  return (
    <div>
      <button onClick={notify}>Show Custom Toast</button>
      <ToastContainer />
    </div>
  );
}

export default CustomToast;
