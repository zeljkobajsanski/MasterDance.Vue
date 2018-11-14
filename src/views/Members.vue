<template>
    <div>
        <page-header title="Clanovi"></page-header>
        <widget>
            <template slot="actions">
                <router-link class="btn btn-inverse btn-xs" :to="{name: 'member-edit'}">Kreiraj</router-link>
            </template>
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-10">
                            <ul class="row thumbnails">
                                <li class="col-sm-4" v-for="member in members" :key="member.id">
                                    <div class="thumbnail">
                                        <img :src="member.image || 'img/2.png'" alt="">
                                        <div class="caption">
                                            <h4>{{member.firstName}} {{member.lastName}}</h4>
                                            <!--<p><strong>{{member.dateOfBirth}}</strong> You can think three hundred times and still have no precise result... </p>-->
                                            <p>
                                                <!--<a href="#" class="btn btn-danger">Favorite</a> -->
                                                <router-link :to="{name: 'member-edit', params: {id: member.id}}" class="btn btn-inverse">Detalji...</router-link>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </widget>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'
    import PageHeader from "../components/common/PageHeader.vue";
    import Widget from "../components/common/Widget.vue";
    import apiProxy from '@/services/ApiProxy';
    import {Member} from "../types";


    @Component({components: {PageHeader, Widget}})
    export default class Members extends Vue {

        members: Member[] = [];

        async created() {
            const {data} = await apiProxy.getMembers();
            this.members = data;
        }
    }
</script>

<style scoped>

</style>