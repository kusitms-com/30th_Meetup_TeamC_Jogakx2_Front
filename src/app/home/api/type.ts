export interface QuickStart {
  id?: number
  name: string
  hour: number
  minute: number
  meridiem: '오전' | '오후'
  spareTime: number
  type: 'ONLINE' | 'OFFLINE' | 'ONLINE_AND_OFFLINE'
}

export interface QuickStartResponse {
  quickStartResponse: QuickStart[]
}

export interface QuickStartRequest {
  name: string
  hour: number
  minute: number
  meridiem: '오전' | '오후'
  spareTime: number
  type: 'ONLINE' | 'OFFLINE' | 'ONLINE_AND_OFFLINE'
}
