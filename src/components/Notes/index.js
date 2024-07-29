import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Heading,
  NotesContainer,
  Input,
  TextArea,
  Button,
  MainContainer,
  NotesUl,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [notes, setNotes] = useState([])
  const userTitle = event => {
    setTitle(event.target.value)
  }
  const userComment = event => {
    setComment(event.target.value)
  }
  const onSubmitUserNotesDetails = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      comment,
    }

    setNotes(prevState => [...prevState, newNote])
    setComment('')
    setTitle('')
  }
  console.log(notes)
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <NotesContainer as="form" onSubmit={onSubmitUserNotesDetails}>
        <Input
          placeholder="Title"
          value={title}
          type="text"
          onChange={userTitle}
        />
        <TextArea
          placeholder="Take a Note..."
          value={comment}
          onChange={userComment}
        />
        <div
          style={{
            textAlign: 'right',
            margin: '2% 0%',
          }}
        >
          <Button type="submit">Add</Button>
        </div>
      </NotesContainer>
      {notes.length === 0 ? (
        <div
          style={{
            marginTop: '4%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png "
            alt="notes empty"
            style={{
              width: '200px',
              height: '200px',
            }}
          />
          <h1
            style={{
              color: ' #1e293b',
            }}
          >
            No Notes Yet
          </h1>
          <p
            style={{
              color: '#475569',
            }}
          >
            Notes you add will appear here
          </p>
        </div>
      ) : (
        <NotesUl>
          {notes.map(eachObj => (
            <NoteItem data={eachObj} key={eachObj.id} />
          ))}
        </NotesUl>
      )}
    </MainContainer>
  )
}

export default Notes
