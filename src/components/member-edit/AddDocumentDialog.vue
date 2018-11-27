<template>
    <modal-dialog title="Dodaj dokument" ref="dialog" @accepted="saveDocument()">
        <form class="form-horizontal">
            <div class="form-group">
                <label class="control-label col-sm-3">Tip dokumenta</label>
                <div class="col-sm-9">
                    <select class="form-control" v-model="documentTypeId">
                        <option v-for="dt in documentTypes" :value="dt.id" :key="dt.id">{{dt.name}}</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-3">Datum vazenja</label>
                <div class="col-sm-9">
                    <date-picker :config="dateConfig" v-model="date"></date-picker>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-3">Dokument</label>
                <div class="col-sm-9">
                    <input type="file" class="form-control" @change="onFileSelected($event.target.files)"/>
                </div>
            </div>
        </form>
    </modal-dialog>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Emit} from 'vue-property-decorator';
    import ModalDialog from '@/components/common/ModalDialog.vue';
    import apiProxy from '@/services/ApiProxy';

    import moment from "moment";

    @Component({components: {ModalDialog}})
    export default class AddDocumentDialog extends Vue {
        @Prop() member: any;
        documentTypes = [];
        documentTypeId: string = "1";
        date: Date = null;
        file: File = null;

        dateConfig = {
            format: 'DD.MM.YYYY'
        };

        async created() {
            const {data} = await apiProxy.getDocumentTypes();
            this.documentTypes = data;
        }

        show() {
            (<ModalDialog>this.$refs['dialog']).open();
        }

        onFileSelected(files: FileList) {
            if (files.length > 0) {
                this.file = files[0];
            }
        }

        @Emit('saved') onSaved() {

        }

        async saveDocument() {
            const fd = new FormData();
            fd.append('memberId', this.member.id);
            fd.append('documentTypeId', this.documentTypeId);
            if (this.date) {
                fd.append('date', moment(this.date, this.dateConfig.format).format('YYYY-MM-DD'));
            }
            fd.append('file', this.file);

            const {data} = await apiProxy.saveDocument(this.member.id, fd);
            this.onSaved();
            (<ModalDialog>this.$refs['dialog']).close();
        }
    }
</script>

<style scoped>

</style>