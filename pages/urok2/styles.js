import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
export const MyButton = styled(Button)({
    background: '#7c4dff',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});


export const itemStyles = makeStyles({
    root: {
        marginTop: 10
    },
});