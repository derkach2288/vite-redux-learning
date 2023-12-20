export interface CatFactsGeneratorState {
  data: CatFactsData[]
  error: any
  isLoading: boolean
}

export interface CatFactsData {
  fact: string
  length: number
}
