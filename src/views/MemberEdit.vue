<template>
    <div>
        <page-header title="Clan kluba"/>
        <div class="row">
            <div class="col-md-7">
                <widget>
                    <form class="form-horizontal form-label-left" @submit.prevent="save">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="text-align-center">
                                    <img class="img-circle" :src="member.image || 'img/2.png'" @click="showImageEditor" style="height: 112px;">
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <h3 class="mt-sm mb-xs">{{member.firstName}} {{member.lastName}}</h3>
                                <!--<address>-->
                                    <!--<strong>Development manager</strong> at <strong><a href="#">Allexample Inc.</a></strong><br>-->
                                    <!--<abbr title="Work email">e-mail:</abbr> <a href="mailto:#">maryna.gils@example.com</a><br>-->
                                    <!--<abbr title="Work Phone">phone:</abbr> (123) 456-7890-->
                                <!--</address>-->
                            </div>
                        </div>
                        <fieldset class="mt-sm">
                            <legend>Podaci clana kluba </legend>
                        </fieldset>
                        <fieldset>
                            <legend class="section">Licni Podaci</legend>
                            <!--<div class="form-group">-->
                                <!--<label class="control-label col-sm-4" for="prefix">Prefix</label>-->
                                <!--<div class="col-sm-4"><input type="text" id="prefix" name="prefix" class="form-control input-transparent"></div>-->
                            <!--</div>-->
                            <div class="form-group">
                                <label class="control-label col-sm-4" for="first-name">Ime <span class="required">*</span></label>
                                <div class="col-sm-8"><input type="text" id="first-name" name="first-name" class="form-control input-transparent" v-model="member.firstName"></div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-4" for="last-name">Prezime <span class="required">*</span></label>
                                <div class="col-sm-8"><input type="text" id="last-name" name="last-name" class="form-control input-transparent" v-model="member.lastName"></div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-4">Pol</label>
                                <div class="col-sm-8">
                                    <div id="gender" class="btn-group" data-toggle="buttons">
                                        <label class="btn btn-default" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                            <input type="radio" name="gender" :value="Gender.Male" v-model="member.gender"> &nbsp; Decak &nbsp;
                                        </label>
                                        <label class="btn btn-primary active" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                                            <input type="radio" name="gender" :value="Gender.Female" v-model="member.gender"> Devojcica
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-4">Datum rodjenja <span class="required">*</span></label>
                                <div class="col-sm-8">
                                    <date-picker class="date-picker form-control input-transparent"
                                                 :config="dateConfig"
                                                 name="date-of-birth" v-model="member.dateOfBirth" /></div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-4">Clan od </label>
                                <div class="col-sm-8">
                                    <date-picker class="date-picker form-control input-transparent"
                                                 :config="dateConfig"
                                                 name="date-of-birth" v-model="member.memberFrom" /></div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend class="section">Kontakt</legend>
                            <div class="form-group">
                                <label for="address" class="control-label col-sm-4">Adresa </label>
                                <div class="col-sm-8">
                                    <input id="address" type="text"
                                           data-trigger="change"
                                           class="form-control input-transparent"
                                           name="address" v-model="member.address">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="phone" class="control-label col-sm-4">Telefon </label>
                                <div class="col-sm-8">
                                    <input id="phone" class="form-control input-transparent"
                                           type="text"
                                           name="phone" v-model="member.contactPhone">
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend class="section">Otac</legend>
                            <div class="form-group">
                                <label for="father-fname" class="control-label col-sm-4">Ime </label>
                                <div class="col-xs-12 col-sm-8">
                                    <input id="father-fname" class="form-control input-transparent  mask"
                                           type="text"
                                           name="fatherFirstName" v-model="member.fatherFirstName">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="father-lname" class="control-label col-sm-4">Prezime </label>
                                <div class="col-xs-12 col-sm-8">
                                    <input id="father-lname" class="form-control input-transparent  mask"
                                           type="text"
                                           name="fatherFirstName" v-model="member.fatherLastName">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="father-phone" class="control-label col-sm-4">Telefon </label>
                                <div class="col-xs-12 col-sm-8">
                                    <input id="father-phone" class="form-control input-transparent  mask"
                                           type="text"
                                           name="fatherContactPhone" v-model="member.fatherContactPhone">
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend class="section">Majka</legend>
                            <div class="form-group">
                                <label for="mother-fname" class="control-label col-sm-4">Ime </label>
                                <div class="col-xs-12 col-sm-8">
                                    <input id="mother-fname" class="form-control input-transparent  mask"
                                           type="text"
                                           name="motherFirstName" v-model="member.motherFirstName">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="mother-lname" class="control-label col-sm-4">Prezime </label>
                                <div class="col-xs-12 col-sm-8">
                                    <input id="mother-lname" class="form-control input-transparent  mask"
                                           type="text"
                                           name="motherFirstName" v-model="member.motherLastName">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="mother-phone" class="control-label col-sm-4">Telefon </label>
                                <div class="col-xs-12 col-sm-8">
                                    <input id="mother-phone" class="form-control input-transparent  mask"
                                           type="text"
                                           name="motherContactPhone" v-model="member.motherContactPhone">
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-actions">
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-4">
                                    <div class="btn-group">
                                        <button type="submit" class="btn btn-primary">Potvrdi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </widget>
            </div>
            <div class="col-md-5">
                <widget>
                </widget>
            </div>
        </div>
        <image-edit-modal ref="imageEditor" />
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import PageHeader from '@/components/common/PageHeader.vue';
    import Widget from '@/components/common/Widget.vue';
    import {Gender, Member} from "../types";
    import apiProxy from '@/services/ApiProxy';
    import notifications from '@/services/Notifications';
    import ImageEditModal from '@/components/ImageEditModal.vue';


    @Component({components: {PageHeader, Widget, ImageEditModal}})
    export default class MemberEdit extends Vue {
        member = new Member();
        Gender = Gender;

        dateConfig = {
            format: 'YYYY-MM-DD'
        };

        async created() {
            const memberId = +this.$route.params['id'];
            if (memberId) {
                const {data} = await apiProxy.getMember(memberId);
                this.member = data;
            }
        }

        async save() {
            try {
                if (!this.member.id) {
                    const {data} = await apiProxy.insertMember(this.member);
                    this.member = data;
                    notifications.info('Podaci su uspesno sacuvani');
                } else {
                    const {data} = await apiProxy.updateMember(this.member);
                    notifications.info('Podaci su uspesno sacuvani');
                }
            } catch(e) {
                notifications.error('Greska prilikom unosa podataka')
                console.log(e.response.statusText);
            }

        }

        showImageEditor() {
            (<ImageEditModal>this.$refs['imageEditor']).show();
        }
    }
</script>

<style scoped>

</style>