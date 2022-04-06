

const Note = props => {
    return <div className="note">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <button
            onClick={() => props.deleteNote(props.id)}>
            DELETE
            </button>
    </div>
}

export default Note;