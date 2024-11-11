import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StyledToast() {
  const notify = () =>
    toast('Custom styled toast!', { className: 'custom-toast' });

  return (
    <div>
      <button onClick={notify}>Show Styled Toast</button>
      <ToastContainer />

      <style>
        {`
          .custom-toast {
            background-color: #5cb85c;
            color: white;
            font-size: 18px;
            padding: 15px;
          }
        `}
      </style>
    </div>
  );
}

export default StyledToast;
