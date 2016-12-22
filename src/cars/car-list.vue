<template>
    <section>
        <h1>Car List</h1>
        <ul>
            <li v-for="(currCar, idx) in cars">
                <car-preview :car="currCar"
                             :coupon="'special sell!'"
                             @click.stop.native="$emit('selectCar',currCar.id)"
                             @doDelete="propegateDeleteReq"
                             @doEdit="$emit('doEdit', $event)"
                             >
                </car-preview>
            </li>
            
        </ul>
    </section>
</template>

<script>
    import CarPreview from './car-preview.vue'
    export default {
        props: {
            cars: {
                required: true,
                type: Array
            }
        },
        data(){
            return {
               
            }
        },
        methods: {
           propegateDeleteReq(deleteReq) {
               this.$emit('doDelete', deleteReq)
           }
        },
        components: {
            'car-preview' : CarPreview
        }
    

    }

</script>

<style scoped>

</style>