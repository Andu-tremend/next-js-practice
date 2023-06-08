export class UrlBuilder {

  private baseUrl: string
 
  constructor(apiUrl: string) {
    this.baseUrl = apiUrl
  }

  private buildUrlPath(path: string, id?: number) {
    if (!path) {
      return this.baseUrl
    }
    if (!id) {
      return `${this.baseUrl}/${path}`
    }
      return `${this.baseUrl}/${path}/${id}`
  }

  private buildQueryParams( queryParams: {key: string, value: any}[] | undefined) {
    if (!queryParams) {
      return ""
    }

    const queryVal: string[] = queryParams.map(({key, value}) => {
      return `${key}=${value}`
      })
      return `?${queryVal.join("&")}`
  }

    get(urlPath: string, id?: number, urlQueryParams?:{key: string, value: any}[] | undefined) {
      const url = this.buildUrlPath(urlPath, id)
      const query = this.buildQueryParams(urlQueryParams)
      return url + query
    }

}