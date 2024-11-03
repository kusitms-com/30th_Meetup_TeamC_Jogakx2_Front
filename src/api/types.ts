export interface BaseResponse<T> {
  success: boolean
  timestamp: Date
  data: T
}
export interface ErrorResponse {
  success: boolean
  timestamp: Date
  statusCode: number
  code: string
  message: string
}
