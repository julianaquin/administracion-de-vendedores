import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';



export default function Topbar(){
    return(
        <div>
        
            <AppBar position="static"
            style={{ background: '#000' }}
            >
                <Toolbar background-color="#000">
                <h1 color="white">
                Vendedores
                </h1>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }} >
                    </IconButton>
                </Toolbar>
            </AppBar>

        </div>
    )
}