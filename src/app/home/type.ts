export interface IFast {
  title: string
  hour: number
  minute: number
  spareTime: number
  meridiem: string | '오전' | '오후'
  type: string | 'ONLINE' | 'OFFLINE' | 'ONLINE_AND_OFFLINE'
}
