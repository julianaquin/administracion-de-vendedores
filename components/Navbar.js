import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/EmailOutlined';
import Home from '@mui/icons-material/CottageOutlined';
import ShoppingBag from '@mui/icons-material/ShoppingBagOutlined';
import Vendedor from '@mui/icons-material/PersonOutlineOutlined';
import Compradores from '@mui/icons-material/GroupsOutlined';
import Graph from '@mui/icons-material/TimelineOutlined';
import Settings from '@mui/icons-material/SettingsOutlined';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Topbar from './Topbar';
import Carts from './Carts';
import ImgAdmin from '/assets/img/admin.png'
import { Typography } from '@mui/material';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar variant="dense"/>

      <div>
      <Avatar alt="admin" src="/admin.png"
      sx={{ width: 100, height: 100,
        margin:'auto', 
        padding:'10px' }}
      />
      <Typography variant="p" component="h3" 
      sx={{ 
        fontWeight: 'bold',
        width: 100,
        height: 50,
        margin:'auto', 
        textAlign:'center',
        lineHeight:1
         }}
      >Nombre admin
      </Typography>
      </div>
      
      <Divider />
      <List>
        {['Inicio', 'Productos', 'Vendedores', 'Compradores', 'Mensajes', 'Estadisticas'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{
              marginLeft: 3 }}>
              <ListItemIcon>

                {index === 0 && <Home />}
                {index===1 && <ShoppingBag />}
                {index===2 && <Vendedor />}
                {index===3 && <Compradores />}
                {index===4 && <MailIcon />}
                {index===5 && <Graph />}
               
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
        <ListItemButton sx={{
              marginLeft: 3 }}>
              <ListItemIcon>
              <Settings />
               
              </ListItemIcon>
              <ListItemText>Configuracion</ListItemText>
              </ListItemButton>
        </ListItem>
       </List>
          
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <div><Topbar />
    <Box sx={{ display: 'flex' ,
    backgroundColor: '#F7FEFB'}}
    >
      <CssBaseline />
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor: '#B5FFE1'
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#B5FFE1' },
            backgroundColor: '#B5FFE1'
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Carts />

      </Box>
    </Box>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

