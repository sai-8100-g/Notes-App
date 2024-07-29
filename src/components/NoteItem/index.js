import {CommentContainer, Heading, Para} from './styledComponents'

const NoteItem = props => {
  const {data} = props
  const {title, comment} = data
  return (
    <CommentContainer>
      <Heading>{title}</Heading>
      <Para>{comment}</Para>
    </CommentContainer>
  )
}

export default NoteItem
