<template>
    <section>

        {{carsCount}}
        <br>
       
    </section>
</template>

<script>
    export default {
        props: ['carsCount'],
        data(){
            return {
                
            }
        }
       
    
    }
</script>

<style scoped>
    section {
        padding: 4px;
        background-color: black;
        color:white;
        text-align: center
    }
</style>