<template>
    <section :class="{selected: car.isSelected}">
        {{car.name}} ({{car.price}}$)
        <img :src="`src/assets/car/${car.id}.png`" alt="">
        <button @click.stop="deleteCar">Delete</button>
       <router-link :to="`/car/${car.id}/edit`">Edit</router-link>
    </section>
</template>

<script>
    export default {
        props: {
            car: {
                required: true,
                type: Object
            },
            coupon: {
                default: 'No Coupon today'
            }
        },
        data(){
            return {
              isSelected: false
            }
        },
        methods: {
            deleteCar() {
                this.$emit('doDelete', {carId: this.car.id, timestamp: Date.now()});

            },
            editCar() {
                this.$emit('doEdit', this.car);
            },
           
        }

    }

</script>

<style scoped>
    img {
        max-width: 200px;
    }
    .selected {
        border: 1px solid darkorchid;
    }
     
</style>