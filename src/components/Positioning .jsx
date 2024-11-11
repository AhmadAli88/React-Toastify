import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PositionedToast() {
  const notify = () => toast('This is a toast in the top-center!');

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer position='top-center' />
    </div>
  );
}

export default PositionedToast;
