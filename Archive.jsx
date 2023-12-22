import { useContext } from 'react';

import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    background-color: #ffd480;
    border: 2px solid grey;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none
`

const Archive = ({ note }) => {

    const { notes, archiveNotes, setNotes, setArchiveNotes, setDeletedNotes } = useContext(DataContext);

    const unArchiveNote = (note) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setArchiveNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setArchiveNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }

    return (
        
        <container>
        <StyledCard>
                <CardContent>
                    <Typography>{note.heading}</Typography>
                    <Typography>{note.text}</Typography>
                </CardContent>
                <CardActions>
                    <Unarchive 
                        fontSize="medium" 
                        style={{ marginLeft: 'auto', color: 'black'}} 
                        onClick={() => unArchiveNote(note)}
                    />
                    <Delete 
                        fontSize="medium"
                        onClick={() => deleteNote(note)}
                    />
                </CardActions>
        </StyledCard>
        </container>
    )
}

export default Archive;