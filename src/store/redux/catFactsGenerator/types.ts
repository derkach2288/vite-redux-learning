export interface CatFactsGeneratorState {
  data: CatFactsData[]
  error: any
  isLoading: boolean
}

export interface CatFactsData {
  fact: string
  id: string
}

export interface CatFactsDataPayload {
  fact: string
  length: number
}
