import styled from "styled-components"
import Modal from "react-bootstrap/Modal"


export const Container = styled(Modal.Body)`
    display: flex;
    gap: 5px;
    align-items: center;
    color: rgba(43, 41, 41, 0.5);
    overflow-x: scroll;

  

    ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
} 
`

