import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
export const Title = styled.h1`
  color: red;
`;

export const Button = styled.button`
/* Adapt the colors based on primary prop */
background: '#388e3c';
color: 'white';
font-size: ${props => props.sel ? "1em" : "1.5em"};
margin: 2% auto;
padding: 2%;
width:60%,
box-shadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
border-radius: 4px;
`
export const NavDrawer = styled.div`
 height: 100%;
  width:  ${props => props.opened ? "100%" : "0"};;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background: #7c4dff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  color:white;
`
export const CloseIcon = styled.div`
position:absolute;
right:10px;
top:0;
color:white;
`