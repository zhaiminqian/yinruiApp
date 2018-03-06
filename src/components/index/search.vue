<template>
    <div class="search">
        <div class="search">
            <input type="text" placeholder="极品飞车" id="search" :class="{active:isActive}" v-model="searchText">
            {{searchText}}
        </div>
    </div>
</template>
<script>
export default {
    name:'search',
    data(){
        return {
            searchText:'',
        }
    }
}
</script>
<style scoped>

</style>
