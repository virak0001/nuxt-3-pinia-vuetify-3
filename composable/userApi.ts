export function useApi (endpoint: string) {
  const runtimeConfig = useRuntimeConfig()

  const validationWrapper = async (cb: Function) => {
    try {
      const response = await cb()
      return response
    } catch (error: any) {
      const { data } = error?.response
      if (data?.statusCode === 422) {
        // $errors.fill(data.message)
      }
      throw new Error(error)
    }
  }

  const submit = (
    method: 'post' | 'get' | 'patch' | 'delete',
    route: string,
    payload: any,
    config?: {}
  ) => {
    const url = `${endpoint}${route ? '/' + route : ''}`
    if (method === 'get' || method === 'delete') { return validationWrapper(async () => await fetch(url, method, config, payload)) } else { return validationWrapper(async () => await fetch(url, method, config, payload)) }
  }

  const fetch = async (url: string, method: any, config: any, payload?: {}) => {
    return await $fetch.raw(url, {
      method,
      baseURL: runtimeConfig.public.baseUrl,
      config,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: payload
    })
  }

  return {
    post: (
      payload: Record<string, any> = {},
      route = '',
      config?: {}
    ) => submit('post', route, payload, config),

    get: (route = '', config?: {}) =>
      submit('get', route, config),

    getOne: (id: string, route = '', config?: {}) =>
      submit('get', route ? [route, id].join('/') : id, config),

    patch: (
      id: string,
      payload: Record<string, any> = {},
      route = '',
      config?: {}
    ) => submit('patch', route ? [route, id].join('/') : id, payload, config),

    delete: (id: string, route = '', config?: {}) =>
      submit('delete', route ? [route, id].join('/') : id, config)
  }
}
