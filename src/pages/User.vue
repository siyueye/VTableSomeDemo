<template>
	<div>id : {{uid}} name : {{uname}}</div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute }       from "vue-router";
const uid   = ref(0);
const uname = ref('lesscode');
const route = useRoute();
onMounted(()=>{
	let queryData = route.query;
	console.log(queryData);
	if(queryData.id){
		uid.value     = queryData.id;
		uname.value   = queryData.name;
	}
});
</script>
<style>
</style>
