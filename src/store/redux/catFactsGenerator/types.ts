export interface CatFactsGeneratorState {
  data: CatFactsData[]
  error: any
  isLoading: boolean
}

export interface CatFactsDataPayload {
  fact: string
  length: number
}

export interface CatFactsData {
  fact: string
  length: number
  id: string
}