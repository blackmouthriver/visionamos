import "./Modal.css";

const Modal = ({children, isOpen, closeModal}) => {
    return (
        <article className={`Modal ${isOpen && "is-open"}`}>

        <div className="modal-container">
        {children}
        <button class="modal-close" onClick={closeModal}>Cancelar</button>
        <button class="modal-accept">Aceptar</button>
        </div>
            
        </article>
    )
}

export default Modal;

