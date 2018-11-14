import axios from 'axios';
import {Member} from "@/types";

class ApiProxy {
    insertMember(member: Member) {
        return axios.post('/api/members', member);
    }

    updateMember(member: Member) {
        return axios.put(`/api/members/${member.id}`, member);
    }

    getMembers() {
        return axios.get('/api/members');
    }

    getMember(id: number) {
        return axios.get(`/api/members/${id}`);
    }
}

const instance = new ApiProxy();

export default instance;