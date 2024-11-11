import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MultipleToasts() {
  const showToasts = () => {
    toast('Toast 1: This is the first toast!');
    toast('Toast 2: This is the second toast!');
    toast('Toast 3: This is the third toast!');
  };

  return (
    <div>
      <button onClick={showToasts}>Show Multiple Toasts</button>
      <ToastContainer />
    </div>
  );
}

export default MultipleToasts;
