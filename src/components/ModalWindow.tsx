import React from 'react';
import '../styles/Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalState {
  isModalOpen: boolean;
}

class ModalWindow extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      isModalOpen: this.props.isOpen,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ isModalOpen: false });
    this.props.onClose();
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      modal = <div></div>;
    }

    return <div>{modal}</div>;
  }
}

export default ModalWindow;
