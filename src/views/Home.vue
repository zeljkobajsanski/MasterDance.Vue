<template>
    <div>
        <page-header title="Home"></page-header>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import widget from '@/components/common/Widget.vue';
import PageHeader from "../components/common/PageHeader.vue";

@Component({
    components: {PageHeader, widget}
})
export default class Home extends Vue {}
</script>
