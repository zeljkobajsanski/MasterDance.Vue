<template>
    <widget>
        <p class="text-right balance" :class="{'text-danger': balance < 0}">Stanje: {{balance}}</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Zaduzenje</th>
                    <th>Placeno</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="membership in data">
                    <td>{{membership.date}}</td>
                    <td>{{membership.amount}}</td>
                    <td>{{membership.paidAmount}}</td>
                    <div class="btn-group">
                        <button class="btn btn-xs btn-inverse" title="Evidentiraj uplatu" @click="addPayment(membership)"><i class="fa fa-pencil"></i> </button>
                        <button class="btn btn-xs btn-inverse" title="Obrisi uplate" @click="removePayments(membership)"><i class="fa fa-trash"></i> </button>
                    </div>
                </tr>
            </tbody>
        </table>

        <modal-dialog title="Evidentiranje uplate" ref="dialog" @accepted="savePayment">
            <form>
                <div class="form-group row">
                    <label class="control-label col-sm-3">Datum uplate</label>
                    <div class="col-sm-9">
                        <date-picker :config="dateConfig" v-model="payment.date"></date-picker>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="control-label col-sm-3">Iznos</label>
                    <div class="col-sm-9">
                        <input type="number" class="form-control" v-model="payment.amount">
                    </div>
                </div>
            </form>
        </modal-dialog>
    </widget>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop, Watch} from "vue-property-decorator";
    import api from '@/services/ApiProxy'
    import ModalDialog from "@/components/common/ModalDialog.vue";
    import DatePicker from "vue-bootstrap-datetimepicker/src/component.vue";
    import notifications from '@/services/Notifications'

    @Component({
        components: {DatePicker, ModalDialog}
    })
    export default class Memberships extends Vue {
        data = [];
        @Prop() memberId: number;
        dateConfig = {
            format: 'DD.MM.YYYY'
        };
        payment = {};

        @Watch('memberId')
        async onMemberIdChanged(id) {
            const {data} = await api.getMemberships(id);
            this.data = data;
        }

        get balance() {
            let balance = 0;
            for (let i = 0; i < this.data.length; i++) {
                balance +=  this.data[i].paidAmount - this.data[i].amount;
            }
            return balance;
        }

        addPayment(membership) {
            this.payment = {membershipId: membership.id, date: new Date(), amount: membership.amount};
            (<ModalDialog>this.$refs.dialog).open();
        }

        async removePayments(membership) {
            try {
                const {data} = await api.removePayments(membership.id);
                this.data = data;
            } catch(err) {
                notifications.error('Neuspesno brisanje uplata');
            }

        }

        async savePayment() {
            try {
                const {data} = await api.savePayment(this.payment);
                notifications.info('Uplata je usepsno evidentirana');
                this.data = data;
                (<ModalDialog>this.$refs.dialog).close();
            } catch(err) {
                notifications.info('Greska prilikom evidentiranja uplate');
            }
        }
    }
</script>

<style scoped>
    .balance {
        font-size: 16px;
    }
</style>