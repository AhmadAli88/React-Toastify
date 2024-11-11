import{ useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormValidationToast() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast.error("Invalid email address!");
    } else {
      toast.success("Form submitted successfully!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default FormValidationToast;
