import { useContext } from 'react';

import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete, NoteAdd } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';
import Note from '../notes/Note';

const StyledCard = styled(Card)`
    border: 2px solid #ffd480;
    border-radius: 8px;
    background-color: #ffad99;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const DeleteNote = ({ note }) => {

    const { notes , deletedNotes, setNotes, setArchiveNotes, setDeletedNotes } = useContext(DataContext);

    const restoreNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
    }

    return (
        <StyledCard>
                <CardContent>
                    <Typography>{note.heading}</Typography>
                    <Typography>{note.text}</Typography>
                </CardContent>
                <CardActions>
                    <Delete 
                        fontSize="medium" 
                        style={{ marginLeft: 'auto' }} 
                        onClick={() => deleteNote(note)}
                    />
                    <Restore 
                        fontSize="medium"
                        onClick={() => restoreNote(note)}
                    />
                </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;