export interface Event {
    date: string
    title: string
    description: string
    media?: {
      type: 'image' | 'video'
      url: string
    }
  sources?: string[]
}
