import React from 'react';
import Modal from 'react-modal';

const DecisionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.closeDecisionModal}
    contentLabel='Selected Option'
  >
    <h3>Selected Option: </h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.closeDecisionModal}>Okay</button>
  </Modal>

);

export default DecisionModal;