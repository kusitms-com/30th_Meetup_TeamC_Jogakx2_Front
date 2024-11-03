import axios, {
  type AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
  Method,
  AxiosRequestConfig,
} from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN, HTTP_METHODS } from '@/constants'
import { BaseResponse, ErrorResponse } from './types'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 100000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = Cookies.get(ACCESS_TOKEN) as string

    if (!accessToken) {
      return config
    }
    config.headers.set('Authorization', `Bearer ${accessToken}`)
    return config
  },
  (error: AxiosError) => {
    throw error
  },
)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: AxiosError): Promise<ErrorResponse> => {
    if (!error.response) {
      throw {
        success: false,
        timestamp: new Date(),
        statusCode: 0,
        code: 'NETWORK_ERROR',
        message: 'Network Error',
      } as ErrorResponse
    }

    const { status: statusCode } = error.response
    const message =
      (error.response.data as { message?: string })?.message ||
      'An error occurred'
    const code =
      (error.response.data as { code?: string })?.code || 'UNKNOWN_ERROR'

    throw {
      success: false,
      timestamp: new Date(),
      statusCode,
      code,
      message,
    } as ErrorResponse
  },
)

const createApiMethod =
  (instance: AxiosInstance, method: Method) =>
  <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> =>
    instance({ ...config, method })

const http = {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
}

export default http
