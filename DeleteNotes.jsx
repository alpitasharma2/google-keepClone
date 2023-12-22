import { useContext } from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../context/DataProvider';

//components
import DeleteNote from './DeleteNote';
import Emptydelete from './Emptydelete';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {

    const { deletedNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        deletedNotes.map(note => (
                            <Grid item>
                                <DeleteNote note={note} />
                            </Grid>
                        ))
                    }
                </Grid>
                <Emptydelete />
            </Box>
        </Box>
    )
}

export default DeleteNotes;