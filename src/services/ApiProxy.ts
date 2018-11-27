import axios from 'axios';
import {Member} from "@/types";

class ApiProxy {
    saveMember(member: Member) {
        return axios.post('/api/members', member);
    }

    getMembers() {
        return axios.get('/api/members');
    }

    getMember(id: number) {
        return axios.get(`/api/members/${id}`);
    }

    getDocumentTypes() {
        return axios.get('/api/documents/GetDocumentTypes');
    }

    saveDocument(memberId: string, data: FormData) {
        return axios({
            url: `/api/members/${memberId}/documents`,
            method: 'POST',
            data: data
        });
    }

    getDocuments(memberId) {
        return axios.get(`/api/members/${memberId}/documents`);
    }

    getDocument(id) {
        return axios.get(`/api/documents/${id}`);
    }
}

const instance = new ApiProxy();

export default instance;