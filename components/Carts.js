import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import fstars from '../assets/img/Rating4.png';
import fistars from '../assets/img/Rating5.png';
import tstars from '../assets/img/Rating3.png';
import { Container } from '@mui/material';
import Filtros from './Filtros';
import Organizar from './Organizar';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


//Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };



export default function Carts(){

    //Arreglo de vendedores
    //solo para visualizar, el final deberia tener el telefono, correo, fecha de inicio, ventas
    const vendedores = [
        {   id:1,
            nombre:"Daniel Bueno",
            ciudad:"Cali",
            ventas:230,
            puntaje:4,
            imagen: '/Daniel.png'
        },
        {
            id:2,
            nombre:"Pepito Perez",
            ciudad:"Medellín",
            ventas:402,
            puntaje:4,
            imagen: '/Pepito.png'
        },
        {   id:3,
            nombre:"Camila Gomez",
            ciudad:"Bogotá",
            ventas:135,
            puntaje:5,
            imagen: '/Camila.png'
        },
        {
            id:4,
            nombre:"Jenny Osorio",
            ciudad:"Pereira",
            ventas:47,
            puntaje:4,
            imagen: '/Jenny.png'
        },
        {   id:5,
            nombre:"Pedro Piedra",
            ciudad:"Pasto",
            ventas:564,
            puntaje:5,
            imagen: '/Pedro.png'
        },
        {   id:6,
            nombre:"Mauricio Hernandez",
            ciudad:"Tulua",
            ventas:60,
            puntaje:4,
            imagen: '/Mauricio.png'
        },
        {   id:7,
            nombre:"Oscar Lopez",
            ciudad:"Cali",
            ventas:118,
            puntaje:3,
            imagen: '/Oscar.png'
        },
        {   id:8,
            nombre:"Luis Muñoz",
            ciudad:"Cali",
            ventas:1489,
            puntaje:4,
            imagen: '/Luis.png'
        },
        {   id:9,
            nombre:"Laura Valencia",
            ciudad:"Medellín",
            ventas:1743,
            puntaje:4,
            imagen: '/Laura.png'
        },
        {   id:10,
            nombre:"Ricardo Quintero",
            ciudad:"Bogotá",
            ventas:101,
            puntaje:4,
            imagen: '/Ricardo.png' 
        },
        {   id:11,
            nombre:"Maria José Zuluaga",
            ciudad:"Bogotá",
            ventas:15,
            puntaje:4,
            imagen: '/MariaJose.png'
        },
        {   id:12,
            nombre:"Andrés Pinzon",
            ciudad:"Medellín",
            ventas:32,
            puntaje:4,
            imagen: '/Andres.png'
        }

    ]

    //Modal
    const [open, setOpen] = React.useState(false);

    //Id del vendedor
    const [vendedorId, setVendedorId] = React.useState(null);

    //Llena local storage
    const [locals, setLocalS] = React.useState(false);
  
    //Cuando doy click guardo el id en el localStorage y abro el modal
    const handleClickOpen= (id) => {
        setLocalS(true);
        setOpen(true);
        setVendedorId(id);
        localStorage.setItem("id", vendedorId);

        };

    const handleClose = () => {
      setOpen(false);
    };

    
    return(
        <div>
            <Container>
                <Filtros />
                <Organizar />

            </Container>
            <Grid container 
            rowSpacing={1} 
            justifyContent="center"
            >
            {vendedores.map((vendedor, index) => (
                <Grid item
                xs={12} 
                sm={6}
                md={3}
                lg={2.5}
                key={index}
                marginLeft={2}
                marginRight={2}
                marginTop={4}
                marginBottom={3}
                border="1px solid"
                textAlign="center"
                borderColor="#000"
                sx={{
                    backgroundColor: '#FFF',
                    '&:hover': {
                    backgroundColor: '#F5F5F5',
                    opacity: [0.9, 0.9, 0.9]},
                    borderRadius: 3,
                    borderColor: '#F5F5F5'
                }}
                onClick={() => handleClickOpen(vendedor.id)}
                >
                    <Grid container
                    >
                    <Grid item xs={3} marginLeft={1}>
                    <Image src={vendedor.imagen}
                            alt="vendedor picture"
                            width="60"
                            height="60"
                            /> 

                    </Grid>

                    <Grid item xs={7}
                    marginLeft={1}
                    >

                        <Box sx={{textAlign:'left'}}>
                        
                        <Typography variant="p" fontSize="medium">
                            {vendedor.nombre}
                            </Typography>
                        
                        
                            <Typography variant="p" component="h5" color="#65B891">
                                {vendedor.ciudad}, Colombia
                            </Typography>
                        
                            <Typography variant="p" component="h4" fontWeight="bold" >
                            {vendedor.ventas} ventas
                            </Typography>
                        
                        {vendedor.puntaje === 3 && <div>
                            <Image src={tstars}
                            alt="Landscape picture"
                            layout="fixed"
                            /> </div>
                            }
                        {vendedor.puntaje === 4 && <div>
                            <Image src={fstars}
                            alt="Landscape picture"
                            layout="fixed"
                            /> </div>
                            }
                        {vendedor.puntaje === 5 && <div>
                            <Image src={fistars}
                            alt="Landscape picture"
                            layout="fixed"
                            /> </div>
                            }
                         </Box>
                        
                    </Grid>
                </Grid>
                    
                </Grid>
            ))}

        </Grid>

        {vendedores.forEach(function(e){
                
                if(e.id === vendedorId){
                    console.log(e.id + '' + vendedorId + 'son iguales');
                    localStorage.setItem("nombre", e.nombre);
                    localStorage.setItem("ciudad", e.ciudad);
                    localStorage.setItem("ventas", e.ventas);
                    localStorage.setItem("puntaje", e.puntaje);
                    localStorage.setItem("imagen", e.imagen)
                }
                 })
        }
        
                {locals === true && 
                <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                                >
                                    
                                <BootstrapDialogTitle 
                                id="customized-dialog-title" 
                                onClose={handleClose}>
                                    Vendedor
                                </BootstrapDialogTitle>
                                <DialogContent dividers>
                                <Grid container sx={{ flexGrow: 1 }}>
                                    <Grid item xs={4} sx={{  
                                    marginLeft: 2,
                                    p:3
                                    }}>

                                        <Image src={localStorage.getItem("imagen")}
                                        alt="vendedor picture"
                                        width="60"
                                        height="60"
                                        /> 
                                        <Typography sx={{fontSize:'small'}}>
                                        Fecha de inicio:
                                        <span>02/02/2022</span>
                                        </Typography>
                                        <Typography sx={{fontSize:'small'}}>
                                        Categorias:
                                        <span>Tecnología, salud, belleza</span>
                                        </Typography>

                                     </Grid>
                                        <Grid item xs={7} >
                                        <Typography gutterBottom>
                                            {localStorage.getItem("nombre")}
                                       
                                        </Typography>

                                        <Typography>
                                        {localStorage.getItem("ciudad")}, Colombia
                                        </Typography>

                                        <Typography>
                                        3165244532,
                                        {localStorage.getItem("nombre")}@correo.com
                                        </Typography>

                                        <Typography>
                                        Ventas totales: {localStorage.getItem("ventas")}
                                        <span> 20 Ventas semanales, 2 ventas diarias</span>
                                        </Typography>
                                        
                                        {localStorage.getItem("puntaje")}
                                        </Grid>
                                    </Grid>
                            
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleClose}>
                                    Editar usuario
                                    </Button>
                                </DialogActions>
                                </BootstrapDialog>
                                }



        </div>
    )
}