import axios from "axios"
import { DOMAIN_CYBERBUG, TOKEN } from "../util/settingSytem"

export const userLoginServices = {

    userLogin: (userLogin) => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/api/Users/signin`,
            method: 'POST',
            data: userLogin
        })
    },
    getAllCategory: () => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/api/ProjectCategory`,
            method: 'GET',
        })
    },


    projectAuthor: (newProject) => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/api/Project/createProjectAuthorize`,
            method: 'POST',
            data: newProject,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })

    },
    getListProject: ()=>{
        return axios({
            url: `${DOMAIN_CYBERBUG}/api/Project/getAllProject`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    },
    updateProject: (projectUpdate) =>{
        return axios({
            url: `${DOMAIN_CYBERBUG}/api/Project/updateProject?projectId=${projectUpdate.id}`,
            method:'PUT',
            data: projectUpdate,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}

        })

    }

}

