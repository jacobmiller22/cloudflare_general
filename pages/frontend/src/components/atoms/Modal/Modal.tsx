import BootstrapModal from "react-bootstrap/Modal";

interface IModalProps {
  title?: string;
  content?: any;
  open: boolean;
  setOpen: any;
}

const Modal = ({ title, content, open, setOpen }: IModalProps) => {
  return (
    <BootstrapModal show={open} onHide={() => setOpen(false)}>
      {title && <BootstrapModal.Title>{title}</BootstrapModal.Title>}
      <BootstrapModal.Body>{content()}</BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default Modal;
