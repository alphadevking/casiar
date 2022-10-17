import { Link } from "react-router-dom";
import Button from '../Components/Button/Button'
import { Box, Stack } from '@chakra-ui/react';

const styles: string | number | any = []

    styles.headerStyle = {
        marginTop: '30px',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#004266',
    }

    styles.linkStyle = {
    }
    
export const NoPage = () => {

    return (
        <>
            <Stack gap={2} align='center'>
                <Box  style={styles.headerStyle}>Oops! You seem to be lost.</Box>
                <Box>There's no content here.</Box>
                <Link to='/' style={styles.linkStyle}><Button title="Go Home"/></Link>
            </Stack>
        </>
    )
}
