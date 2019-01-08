<template>
    <div>
        <!--<page-header title="Home"></page-header>-->
        <div class="row">
            <div class="col-md-6">
                <due-list />
            </div>
            <div class="col-md-6">
                <notifications />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import widget from '@/components/common/Widget.vue';
import PageHeader from "../components/common/PageHeader.vue";
import dueList from '@/components/home/due-list.vue'
import notifications from '@/components/home/notifications.vue'

@Component({
    components: {notifications, PageHeader, widget, dueList}
})
export default class Home extends Vue {}
</script>
