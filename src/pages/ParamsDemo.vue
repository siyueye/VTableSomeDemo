<template>
	<div>
		params : {{	paramsData}}
	</div>
</template>
<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
const paramsData = reactive({id:0});
onMounted(()=>{
	const route = useRoute();
	console.log(route.params);
});
</script>
<style>
</style>
