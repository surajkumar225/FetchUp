import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
color: white;
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
    & > h4{
        color: blue;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
`;


const FetchUp = () => {

    return (
        <Header>
            <Typography variant="h4">FetchUp</Typography>
            <Box >
                <h2>1. Click the 'Add user' button to add</h2>
                <h2>2. Guest can view all the users</h2>
                <h2>3. Can perform Edit and Delete functionality</h2>
            </Box>
        </Header>
    )
}

export default FetchUp;