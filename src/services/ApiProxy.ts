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

    deleteDocument(memberId, documentId) {
        return axios.delete(`/api/members/${memberId}/documents/${documentId}`);
    }

    getDocuments(memberId) {
        return axios.get(`/api/members/${memberId}/documents`);
    }

    getDocument(id) {
        return axios.get(`/api/documents/${id}`);
    }

    getCompetitions() {
        return axios.get('/api/competitions');
    }

    saveCompetition(competition) {
        return axios.post('/api/competitions', competition);
    }

    removeCompetition(id) {
        return axios.delete(`/api/competitions/${id}`);
    }

    getMemberPrizes(memberId) {
        return axios.get(`/api/members/${memberId}/prizes`);
    }

    savePrize(prize) {
        return axios.post(`/api/members/${prize.memberId}/prizes`, prize);
    }

    removePrize(prize) {
        return axios.delete(`/api/members/${prize.memberId}/prizes/${prize.id}`);
    }

    getMemberships(memberId) {
        return axios.get(`api/members/${memberId}/membership`);
    }

    savePayment(payment) {
        return axios.post(`api/memberships/${payment.membershipId}/payments`, payment);
    }

    removePayments(membershipId) {
        return axios.delete(`api/memberships/${membershipId}/payments`);
    }

    getBalanceSheet() {
        return axios.get('/api/memberships/GetBalanceSheet');
    }

    getNotifications() {
        return axios.get('/api/members/GetExpiringDocuments');
    }

    getStats() {
        return axios.get('/api/dashboard');
    }
}

const instance = new ApiProxy();

export default instance;