import styled from 'styled-components';

const Buttons = styled.div`
  .feedback_btn {
    padding: 10px 20px;
    background-color: rgb(214, 230, 216);
    border: 1px solid #486b6f;
    border-radius: 6px;
    box-shadow: 0px 5px 10px 2px rgba(9, 1, 9, 0.2);
  }
  .feedback_btn:hover,
  .feedback_btn:focus {
    transform: scale(1.08);
    border: 1px solid #008900;
    outline: none;
    box-shadow: 0px 5px 10px 2px rgba(97, 27, 92, 0.2);
  }
  .feedback_btn:not(:last-child) {
    margin-right: 10px;
  }
`;
export default Buttons;