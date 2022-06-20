import Modal from './Modal';
import * as Button from '../Button';

const AreYouSureModal = ({ isOpen, setModal, title }) => {
    return (
        <Modal isOpen={isOpen} setModal={setModal} title={title}>
            <div></div>
        </Modal>
    );
};

export default AreYouSureModal;
