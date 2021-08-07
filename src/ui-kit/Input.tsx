import React, { ChangeEventHandler } from 'react';
import cn from 'classnames';
import { makeStyles, TextField } from '@material-ui/core';

interface Props {
  value?: string;
  onChange?: ChangeEventHandler;
  placeholder?: string;
  className?: string;
}

const defaultProps = {
  value: '',
  onChange: () => {},
  placeholder: '',
  className: '',
};

const useStyles = makeStyles({
  textField: {
    padding: '10.7px 10px',
    border: '1px solid #666666',
    '& input': {
      padding: '0',
      fontSize: '14px',
      color: '#dedede',
      '&::placeholder': {
        fontSize: '14px',
        color: '#dedede',
        textTransform: 'uppercase',
      },
    },
  },
});

const Input: React.FC<Props> = (props: Props) => {
  const { value, onChange, placeholder, className } = props;
  const classes = useStyles();

  return (
    <TextField
      className={cn(classes.textField, className)}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      InputProps={{ disableUnderline: true }}
    />
  );
};

Input.defaultProps = defaultProps;

export default Input;
