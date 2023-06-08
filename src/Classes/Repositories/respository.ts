import { UrlBuilder } from "../Factories/query.builder"
import { RequestActions } from "../Enums/request.enums";
import AxiosClient from "./axios.client";

export default abstract class Repository < userInput > {
    protected client!: AxiosClient
    protected baseUrl!: string 

    generateRequestUrl = (path: string, id?:number, urlQueryParam?: {key: string, value: any}[]) => {
        const url = new UrlBuilder(this.baseUrl)
        return  url.get(path, id, urlQueryParam)
    }

    get(path: string, urlQueryParam?: {key: string, value: any}[], id?: number) {
        if (id) return this.client.request(RequestActions.GET, this.generateRequestUrl(path, id, urlQueryParam))
        return this.client.request(RequestActions.GET, this.generateRequestUrl(path, NaN, urlQueryParam))
    }

    post(path: string, content:userInput ) {
        return this.client.request(RequestActions.CREATE, this.generateRequestUrl(path), content)
    }

    put( path: string, id: number, content: userInput) {
        return this.client.request(RequestActions.UPDATE, this.generateRequestUrl(path, id), content)
    }

    delete(path: string, id: number) {
        return this.client.request(RequestActions.DELETE, this.generateRequestUrl(path, id), null)
    }
}


  