<template>
    <section>
        <form>
            Name: <input type="text" v-model="carToEdit.name">
            Price: <input type="number" v-model="carToEdit.price">

            <button @click.prevent="save">Save</button>
        </form>
       
    </section>
</template>

<script>
    export default {
        data() {
            return {
                car: {name: '', price: 0},
                dataSaved: false,
            }
        },
        computed:{
            carToEdit() {
                let obj = Object.assign({}, this.car);
                return obj;
            }
        },
       
        methods: {
            save() {
                let that = this;
                function handleResult(res) {
                    res.json()
                   .then(res => {
                           console.log("Result from server", res);
                        //    that.$emit('done')
                        this.dataSaved = true;
                        this.$router.push('/car');
                       }) 
                }

                console.log('Saving', this.carToEdit);
                if (this.car.id)  this.$http.put(`item`, this.carToEdit).then(handleResult);
                else this.$http.post('item', this.carToEdit).then(handleResult);
            },
             loadCar(carId) {
                this.$http.get(`item/${carId}`)
                    .then(res => res.json())
                    .then(car => this.car = car);
            }
        },
       
        created() {
             const carId = this.$route.params.id
             if (carId)    this.loadCar(carId);
        },
        beforeRouteLeave(to, from, next) {
            if (this.dataSaved) return next();
            if (this.car.name  === this.carToEdit.name && 
                this.car.price === this.carToEdit.price) return next();

            const ans = confirm('Change will not save!');
            if (ans)        next();
            else            next(false)
            
        }
       
    
    }
</script>

<style scoped>
    
</style>