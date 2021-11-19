export interface IFindInsight {
  id: string
  text: string
  tags: ITag[]
  created_at: Date
  updated_at: Date
}

interface ITag {
  id: string
  name: string
  created_at: Date
  updated_at: Date
}
