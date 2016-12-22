<template>
    <section>
        <h1>Car Center</h1>
        <router-link to="/car/edit">New Car</router-link>
        <cars-filter @filterChanged="carsFilter = $event"></cars-filter>
        <car-list :cars="carsToDisplay" 
            @selectCar="selectCar"
            @doDelete="deleteCar"
            @doEdit="carToEdit = $event"
            >
    </car-list>
    <cars-status :carsCount="carsToDisplay.length"></cars-status>
    
    </section>
</template>

<script>
    import CarList from './car-list.vue'
    import CarsStatus from './cars-status.vue'
    import CarsFilter from './cars-filter.vue'
    import CarEdit from './car-edit.vue'

    export default {
        data() {
            return {
                cars: [],
                carToEdit: undefined,
                carsFilter: {name: ''},
                showCarEdit: false
            }
        },
        methods: {
            selectCar(carId){
                // console.log('Selecting ', carId);
                // this.cars.forEach(car => {
                //     if (car.id === carId)   car.isSelected = !car.isSelected;
                //     else                    car.isSelected = false;
                // });
                this.$router.push(`/car/${carId}`);
            },
            deleteCar(deleteReq) {
                    console.log('Deleting Car: ', deleteReq.carId, ' requested at: ', deleteReq.timestamp);
                    this.cars = this.cars.filter(car => car.id !== deleteReq.carId);
                    this.$http.delete(`item/${deleteReq.carId}`);
            },
            
            reloadCars() {
                // fetch('http://localhost:3003/item')
                 this.$http.get('item')
                    .then(res => res.json())
                    .then(cars => this.cars = cars);
                 this.carToEdit = undefined;   
                 this.showCarEdit = false;

            }
        },
        computed:{
            carsToDisplay() {
                return this.cars.filter(car => {
                    return car.name.includes(this.carsFilter.name);
                })
            }
        },
       created() {
           this.reloadCars();
            
       }, 
       components:{
           CarList, CarsFilter, CarsStatus, CarEdit
       }

    }

</script>

<style scoped>

</style>