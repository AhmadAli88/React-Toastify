import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ActionButtonToast() {
  const notify = () =>
    toast('Item deleted!', {
      autoClose: false,
      closeButton: false,
      onClick: () => console.log('Undo clicked'),
      render: ({ closeToast }) => (
        <div>
          Item deleted!
          <button onClick={closeToast}>Undo</button>
        </div>
      ),
    });

  return (
    <div>
      <button onClick={notify}>Delete Item</button>
      <ToastContainer />
    </div>
  );
}

export default ActionButtonToast;
