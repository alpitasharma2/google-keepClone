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
const Emptydelete = () => {
    return (
        <Container>
            <img src = {'data:image/png;base64,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'} />

            <Text>
            Deleted Notes</Text>
        </Container>
    )
}

export default Emptydelete;