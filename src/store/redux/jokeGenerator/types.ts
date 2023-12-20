export interface JokeGeneratorState {
  data: null | JokeData
  error: any
  isLoading: boolean
}

export interface JokeData {
  type: string
  setup: string
  punchline: string
  id: number
}
