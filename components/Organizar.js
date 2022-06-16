import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/*Aqui irian los props a ser enviados a carts para filtrar cuando se haga 
click en una de las opciones de los select*/

export default function OrganizarSelect() {
  const [organizar, setOrganizar] = React.useState('');

  const handleChange = (event) => {
    setOrganizar(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 170, backgroundColor:'#B5FFE1'}} size="small">
    <InputLabel id="demo-select-small">Organizar por</InputLabel>
    <Select sx={{
        backgroundColor:'#B5FFE1'
      }}
      labelId="demo-select-small"
      id="demo-select-small"
      value={organizar}
      label="Organizar"
      onChange={handleChange}
    >
         <MenuItem sx={{
            backgroundColor:'#B5FFE1'
             }} value="zonaCentro">nombres: A - Z</MenuItem>
          <MenuItem sx={{
            backgroundColor:'#B5FFE1'
            }} value="zonaEste">Cantidad de ventas</MenuItem>
          
        </Select>
      </FormControl>
  );
}
