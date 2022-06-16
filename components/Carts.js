
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



export default function Carts(){

    const vendedores = [
        {
            nombre:"Daniel Bueno",
            ciudad:"Cali",
            ventas:230,
            puntaje:4
        },
        {
            nombre:"Pepito Perez",
            ciudad:"Medellín",
            ventas:402,
            puntaje:4
        },
        {
            nombre:"Camila Gomez",
            ciudad:"Bogotá",
            ventas:135,
            puntaje:5
        },
        {
            nombre:"Jenny Osorio",
            ciudad:"Pereira",
            ventas:47,
            puntaje:4
        },
        {
            nombre:"Pedro Piedra",
            ciudad:"Pasto",
            ventas:564,
            puntaje:5
        },
        {
            nombre:"Mauricio Hernandez",
            ciudad:"Tulua",
            ventas:60,
            puntaje:4
        },
        {
            nombre:"Oscar Lopez",
            ciudad:"Cali",
            ventas:118,
            puntaje:3
        },
        {
            nombre:"Luis Muñoz",
            ciudad:"Cali",
            ventas:1489,
            puntaje:4
        },
        {
            nombre:"Laura Valencia",
            ciudad:"Medellín",
            ventas:1743,
            puntaje:4
        },
        {
            nombre:"Ricardo Quintero",
            ciudad:"Bogotá",
            ventas:101,
            puntaje:4
        },
        {
            nombre:"Maria José Zuluaga",
            ciudad:"Bogotá",
            ventas:15,
            puntaje:4
        },
        {
            nombre:"Andrés Pinzon",
            ciudad:"Medellín",
            ventas:32,
            puntaje:4
        }

    ]

    return(
        <div>
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
                onClick={() => console.log("clicando el tipo de gasolina")}
                >
                    <Box
                           w="100%"
                            alignItems="center"
                            marginTop={4}
                            marginBottom={3}
                        >
                        <Box>

                        </Box>

                        <Box>
                            <h3 fontWeight="bold">
                                {vendedor.nombre}
                            </h3>
    
                            <p fontWeight="extrabold">
                                {vendedor.ciudad}, Colombia
                            </p>
                            <h4>
                                {vendedor.ventas} ventas
                            </h4>
                        </Box>
                    </Box>

                    
                </Grid>
            ))}

        </Grid>

        </div>
    )
}