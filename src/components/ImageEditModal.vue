<template>
    <b-modal title="" ref="modal">

    </b-modal>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator'

    @Component({components: {}})
    export default class ImageEditModal extends Vue {

        show()  {
            (<any>this.$refs['modal']).show();
        }
    }
</script>

<style scoped>

</style>