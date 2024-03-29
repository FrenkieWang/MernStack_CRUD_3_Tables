import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 80%; 
  max-width: 400px; 
  position: relative; 
`;

const CloseButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px; 
  font-size: 1.5em;
  line-height: 1; 
`;

const StyledTextArea = styled.textarea`
  width: 100%; 
  height: 100px; 
  max-height: 300px; 
  overflow-y: auto; // Vertical scroll bar when content is exceeded
  color: blue;
  font-weight: bold;
`;

function SessionNote(props){
    return(
      <Modal onClose={props.closeModal}>
        <h4>{`Note of ${props.selectedSession.therapist.firstName} ${props.selectedSession.therapist.surName}`}</h4>
        Note: 
        <StyledTextArea 
            defaultValue={props.selectedSession.sessionNotes}>
        </StyledTextArea>         
      </Modal>
    )
}

function Modal({ onClose, children }) {
    return (
      <StyledModal>
        <ModalContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          {children}
        </ModalContent>
      </StyledModal>
    );
  }

export default SessionNote;