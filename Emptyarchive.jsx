import { Typography, Box, styled } from '@mui/material';
const Text = styled(Typography)`
    color: #80868b;
    font-size: 22px
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh
`
const Emptyarchive = () => {
    return (
        <Container>
            <img src = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0e1K89Aniz-fD06LIpxT-x2Mj7AT_BYVJQ&usqp=CAU'} />

            <Text>
            Archives you add appear here</Text>
        </Container>
    )
}

export default Emptyarchive;