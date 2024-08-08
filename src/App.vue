<template>
	<div>
		<router-link to="/">首页</router-link>
		&nbsp;&nbsp;
		<router-link to="/About">跳转-path模式</router-link>
		&nbsp;&nbsp;
		<router-link to="/ListTable">跳转-ListTable</router-link>
		&nbsp;&nbsp;
		<router-link to="/PivotTable">跳转-PivotTable</router-link>
		<router-link to="/PivotTable_page">跳转-PivotTable（分页）</router-link>
		&nbsp;&nbsp;
		<router-link to="/PivotChart">跳转-PivotChart</router-link>
		&nbsp;&nbsp;
		<router-link to="/ListTableTree">跳转-ListTable树</router-link>
		&nbsp;&nbsp;
		<router-link to="/PivotTableTree">跳转-PivotTable树</router-link>
		&nbsp;&nbsp;
		<router-link to="/exportTable">跳转-exportTable</router-link>
		&nbsp;&nbsp;
		<router-link to="/Rendering">跳转-100万秒级渲染（VTable）</router-link>
		&nbsp;&nbsp;
		<router-link to="/Rendering_page">跳转-100万秒级渲染（VTable带分页）</router-link>
		&nbsp;&nbsp;
		<router-link to="/Rendering_arco_page">跳转-100万秒级渲染（arco带分页）</router-link>
		&nbsp;&nbsp;
		<router-link to="/RenderingEltable">跳转-100万渲染（El-Table）</router-link>
		&nbsp;&nbsp;
		<router-link to="/RenderingEltable2">跳转-100万渲染（El-Table虚拟表）</router-link>
		&nbsp;&nbsp;
		<router-link to="/sumEltable">el-table的合计与排序等</router-link>
		&nbsp;&nbsp;
		<router-link to="/treeEltable">el-table树形数据与懒加载</router-link>
		&nbsp;&nbsp;
		<router-link to="/sortEltable">el-table排序</router-link>
		&nbsp;&nbsp;
		<router-link to="/filterEltable">el-table过滤</router-link>
		&nbsp;&nbsp;
		<router-link :to="{path:'/User', query:{id:12,name:'lesscode'}}">query 传参</router-link>
		&nbsp;&nbsp;
		<router-link :to="{name:'ParamsDemo', params:{id:12,name:'lesscode'}}">params 传参</router-link>
		&nbsp;&nbsp;
		<router-link to="/CustomCellMerge">自定义单元格合并</router-link>
		&nbsp;&nbsp;
		<router-link to="/CellType">单元格类型</router-link>
		&nbsp;&nbsp;
		<router-link to="/chart">图表</router-link>
		&nbsp;&nbsp;
		<router-link to="/test">透视表集成图表</router-link>
		&nbsp;&nbsp;
		<router-link to="/editPage">编辑表格</router-link>
		&nbsp;&nbsp;
		<router-link to="/filterPage">过滤表格</router-link>
		&nbsp;&nbsp;
		<router-link to="/searchPage">搜索</router-link>
		&nbsp;&nbsp;
		<router-link to="/reloanListTable">sample表</router-link>
		&nbsp;&nbsp;
		<router-link to="/sumTable">总计小计表</router-link>
		&nbsp;&nbsp;
		<router-link to="/AnalysisTable">透视分析</router-link>
		&nbsp;&nbsp;
		<router-link to="/drillDown">下钻上钻</router-link>
		&nbsp;&nbsp;
		<router-link to="/analysis">三级row菜单</router-link>
		&nbsp;&nbsp;
		<router-link to="/analysis1">三级row菜单1</router-link>
		&nbsp;&nbsp;
		<router-link to="/treeStructure">树形结构</router-link>
		&nbsp;&nbsp;
		<span @click="goback()">返回</span>
	</div>
	<div style="margin-top:15px;">
		<router-view></router-view>
	</div>
	<!-- 命名视图 -->
	<div style="margin-top:15px; background:gray;">
		<router-view name="routerView1"></router-view>
	</div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goback(){
	router.go(-1);
}
</script>
<style>
</style>
