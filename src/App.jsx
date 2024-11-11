import './App.css';
import AutoCloseToast from './components/AutoClose and Duration';
import BasicToast from './components/BasicToast';
import CloseButtonToast from './components/CloseButtonAndHideProgressBar';
import CustomToast from './components/CustomToastContent';
import FormValidationToast from './components/FormValidationToast';
import MultipleToasts from './components/Multiple Toast Notifications';
import PositionedToast from './components/Positioning ';
import ActionButtonToast from './components/Toast with Action Button';
import StyledToast from './components/Toast with Custom Styling';
import DelayedToast from './components/Toast with Delay';
import ToastTypes from './components/Types of Toasts';

function App() {
  return (
    <div>
      <BasicToast />
      <ToastTypes/>
      <CustomToast/>
      <PositionedToast/>
      <AutoCloseToast/>
      <CloseButtonToast/>
      <ActionButtonToast/>
      <StyledToast/>
      <FormValidationToast/>
      <MultipleToasts/>
      <DelayedToast/>
    </div>
  );
}

export default App;
