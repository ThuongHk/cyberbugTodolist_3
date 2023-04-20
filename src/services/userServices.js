import {BasicServices } from './basicServices'

export class UserServices extends BasicServices {
    constructor(){
        super()
    }

    getUser = ()=>{
        return this.get('api/Users/getUser')
    }
    register = (formData) =>{
        return this.post(`api/Users/signup`, formData)
    }

}

export const userServices = new UserServices()