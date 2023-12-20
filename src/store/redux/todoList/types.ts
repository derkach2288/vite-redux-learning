export interface AddNotePayload {
  note: string
}

export interface Note {
  note: string
  id: string
}

export interface TodoListState {
  notes: Note[]
}

