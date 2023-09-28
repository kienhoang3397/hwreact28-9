import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, Container } from '@mui/material';
import './CovidForm.css';

function CovidForm() {
  const [fields, setFields] = useState({
    id: "",
    name: "",
    phonenumber: "",
    email: "",
    gender: undefined
  });

  const [submitValues, setSubmitValues] = useState([]);

  const onChange = (e) => {
    const newName = e.target.name;
    const value = e.target.value;
    setFields((prev) => ({ ...prev, [newName]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const submitValue = { ...fields };
    setSubmitValues([submitValue, ...submitValues]);
    setFields({
      id: "",
      name: "",
      phonenumber: "",
      email: "",
      gender: undefined
    });
  };

  const onDelete = (id) => {
    const newSubmitValues = submitValues.filter((value) => value.id !== id);
    setSubmitValues(newSubmitValues);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="CCCD:"
          variant="outlined"
          size="small"
          type="number"
          name="id"
          value={fields.id}
          onChange={onChange}
          className="form-input" 
        />
        <TextField
          id="outlined-basic"
          label="Name:"
          variant="outlined"
          size="small"
          type="text"
          name="name"
          value={fields.name}
          onChange={onChange}
          className="form-input"
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          size="small"
          type="number"
          name="phonenumber"
          value={fields.phonenumber}
          onChange={onChange}
          className="form-input"
        />
        <TextField
          id="outlined-basic"
          label="Email:"
          variant="outlined"
          size="small"
          name="email"
          value={fields.email}
          onChange={onChange}
          className="form-input"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Hãy chọn giới tính của bạn"
          size="small"
          name="gender"
          value={fields.gender || ''}
          onChange={onChange}
          className="form-input"
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nu">Nữ</MenuItem>
        </TextField>

        <Button key={fields.id} variant="outlined" type='submit' className="form-button">Nhập</Button>
      </form>

      <div>
        {submitValues.map((value) => (
          <div key={value.id} className="submitted-value">
            <p>Name: {value.name}</p>
            <p>Phone Number: {value.phonenumber}</p>
            <p>Email: {value.email}</p>
            <p>Gender: {value.gender}</p>
            <Button onClick={() => onDelete(value.id)}>Xóa</Button>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default CovidForm;
