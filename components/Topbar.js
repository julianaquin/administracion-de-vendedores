import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react'
import { truncate } from 'prelude-ls';

//Diseño de la barra de busqueda
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.95),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.85),
    },
    marginLeft: 20,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      align: 'right',
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#00241B',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function Topbar(){

    //Funcion para cambiar la posicion de los textos en la topbar dependiendo del tamaño de pantalla
    const [screen, setScreen] = useState(null);

    const size = () => typeof window !== "undefined" && window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 600px)").matches) {
        console.log("Screen width is at least 600px" + screen)
         setScreen(true);
      } else {
        console.log("Screen less than 600px" + screen)
        setScreen(false);
      }
    })

    size();
    

    return(
        
    
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
            style={{ background: '#000' }}
            >
                
                <Toolbar background-color="#000"
                sx={{alignItems: 'flex-start',
                paddingTop: 'spacing(1)',
                paddingBottom: 'spacing(2)',
                // Override media queries injected by theme.mixins.toolbar
                '@media all': {
                  minHeight: 128,
                },}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    {screen ?
                        <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: 'flex-end',
                        marginLeft:23,
                        marginBottom:2 }}
                        >
                            Vendedores
                        </Typography>
                    :
                    <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{  flexGrow: 1,
                        alignSelf: 'flex-end',
                        width: 500,
                        marginLeft:0,
                        marginBottom:2,
                        textAlign: 'left' }}
                    >
                        Vendedores
                    </Typography>}

                    {screen ?
                    <Search sx={{  alignSelf: 'flex-end',
                    marginBottom:2,
                    ml:20 }}>
                        <SearchIconWrapper>
                        <SearchIcon sx={{
                            color: '#00241B'
                        }}/>
                        </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                    </Search>
                    :
                    <Search sx={{  alignSelf: 'flex-end',
                    marginBottom:2,
                    ml:0 }}>
                        <SearchIconWrapper>
                        <SearchIcon sx={{
                            color: '#00241B'
                        }}/>
                        </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                    </Search>
                    }

                    <Box sx={{ mt: 2 }}>
                    <img alt="admin" src="/LOGO.svg"/>
                    </Box>

                </Toolbar>
            </AppBar>
            </Box>

    )
}