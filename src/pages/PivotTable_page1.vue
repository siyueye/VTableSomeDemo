<template>
    <div>
      <div ref="pivotTableRef" style="width: 1580px; height: 800px"></div>
      <a-space direction="vertical" size="large">
        <a-pagination  :current="currentPage" :size="medium" :page-size="perPageCount"  show-jumper show-page-size show-total :total="totalNum"
         @change="onPageChange" @page-size-change="onPageSizeChange"/> 
    </a-space>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, shallowRef } from "vue";
  import { PivotTable } from "@visactor/vtable";
  
  const pivotTableRef = ref();
  const tableInstance = shallowRef();
  const totalNum = ref();
  
  const records = [
    {
      sales: 891,
      number: 7789,
      province: "浙江省",
      city: "杭州市",
      category: "家具",
      sub_category: "桌子",
    },
    {
      sales: 792,
      number: 2367,
      province: "浙江省",
      city: "绍兴市",
      category: "家具",
      sub_category: "桌子",
    },
    {
      sales: 893,
      number: 3877,
      province: "浙江省",
      city: "宁波市",
      category: "家具",
      sub_category: "桌子",
    },
    {
      sales: 1094,
      number: 4342,
      province: "浙江省",
      city: "舟山市",
      category: "家具",
      sub_category: "桌子",
    },
    {
      sales: 1295,
      number: 5343,
      province: "浙江省",
      city: "杭州市",
      category: "家具",
      sub_category: "沙发",
    },
    {
      sales: 496,
      number: 632,
      province: "浙江省",
      city: "绍兴市",
      category: "家具",
      sub_category: "沙发",
    },
    {
      sales: 1097,
      number: 7234,
      province: "浙江省",
      city: "宁波市",
      category: "家具",
      sub_category: "沙发",
    },
    {
      sales: 998,
      number: 834,
      province: "浙江省",
      city: "舟山市",
      category: "家具",
      sub_category: "沙发",
    },
    {
      sales: 766,
      number: 945,
      province: "浙江省",
      city: "杭州市",
      category: "办公用品",
      sub_category: "笔",
    },
    {
      sales: 990,
      number: 1304,
      province: "浙江省",
      city: "绍兴市",
      category: "办公用品",
      sub_category: "笔",
    },
    {
      sales: 891,
      number: 1145,
      province: "浙江省",
      city: "宁波市",
      category: "办公用品",
      sub_category: "笔",
    },
    {
      sales: 792,
      number: 1432,
      province: "浙江省",
      city: "舟山市",
      category: "办公用品",
      sub_category: "笔",
    },
    {
      sales: 745,
      number: 1343,
      province: "浙江省",
      city: "杭州市",
      category: "办公用品",
      sub_category: "纸张",
    },
    {
      sales: 843,
      number: 1354,
      province: "浙江省",
      city: "绍兴市",
      category: "办公用品",
      sub_category: "纸张",
    },
    {
      sales: 895,
      number: 1523,
      province: "浙江省",
      city: "宁波市",
      category: "办公用品",
      sub_category: "纸张",
    },
    {
      sales: 965,
      number: 1634,
      province: "浙江省",
      city: "舟山市",
      category: "办公用品",
      sub_category: "纸张",
    },
    {
      sales: 776,
      number: 1723,
      province: "四川省",
      city: "成都市",
      category: "家具",
      sub_category: "桌子",
    },
    {
      sales: 634,
      number: 1822,
      province: "四川省",
      city: "绵阳市",
      category: "家具",
      sub_category: "桌子",
    },
    {
      sales: 909,
      number: 1943,
      province: "四川省",
      city: "南充市",
      category: "家具",
      sub_category: "桌子",
    },
    {
      sales: 399,
      number: 2330,
      province: "四川省",
      city: "乐山市",
      category: "家具",
      sub_category: "桌子",
    },
    {
      sales: 700,
      number: 2451,
      province: "四川省",
      city: "成都市",
      category: "家具",
      sub_category: "沙发",
    },
    {
      sales: 689,
      number: 2244,
      province: "四川省",
      city: "绵阳市",
      category: "家具",
      sub_category: "沙发",
    },
    {
      sales: 500,
      number: 2333,
      province: "四川省",
      city: "南充市",
      category: "家具",
      sub_category: "沙发",
    },
    {
      sales: 800,
      number: 2445,
      province: "四川省",
      city: "乐山市",
      category: "家具",
      sub_category: "沙发",
    },
    {
      sales: 1044,
      number: 2335,
      province: "四川省",
      city: "成都市",
      category: "办公用品",
      sub_category: "笔",
    },
    {
      sales: 689,
      number: 245,
      province: "四川省",
      city: "绵阳市",
      category: "办公用品",
      sub_category: "笔",
    },
    {
      sales: 794,
      number: 2457,
      province: "四川省",
      city: "南充市",
      category: "办公用品",
      sub_category: "笔",
    },
    {
      sales: 566,
      number: 2458,
      province: "四川省",
      city: "乐山市",
      category: "办公用品",
      sub_category: "笔",
    },
    {
      sales: 865,
      number: 4004,
      province: "四川省",
      city: "成都市",
      category: "办公用品",
      sub_category: "纸张",
    },
    {
      sales: 999,
      number: 3077,
      province: "四川省",
      city: "绵阳市",
      category: "办公用品",
      sub_category: "纸张",
    },
    {
      sales: 999,
      number: 3551,
      province: "四川省",
      city: "南充市",
      category: "办公用品",
      sub_category: "纸张",
    },
    {
      sales: 999,
      number: 352,
      province: "四川省",
      city: "乐山市",
      category: "办公用品",
      sub_category: "纸张",
    },
  ];
  const option = ref();

   option.value = {
    columns : ["category", "sub_category"],//列表头对应各级维度的样式及format配置。
    rows: ["province", "city"],//行表头对应各级维度的样式及format配置。
    indicators: ["sales", "number"],//透视表中各个指标的具体配置。
    enableDataAnalysis: true,
    indicatorTitle: "指标名称",//指标标题，显示在角头位置的标题。
    indicatorsAsCol: false,//指标是否作为列表头展示，指标值以列展示，默认为true。
    hideIndicatorName:false,//是否需要将表头上的指标名称隐藏掉。默认为 false。
    showRowHeader:true,//是否显示行表头，默认为 true。
    showColumnHeader:true,//是否显示列表头，默认为 true。
    corner: { //角表头各项配置及样式自定义。
      titleOnDimension: "row" ,//角头标题显示内容依据：'column' 列维度名称作为角头单元格内容,'row' 行维度名称作为角头单元格内容,'none' 角头单元格内容为空
      headerType:"text",//表头类型，可指为'text'|'image'|'link'。
      headerStyle:{//表头单元格样式
        bgColor:'red'
      }
  },
    records: records,
    widthMode:'autoWidth', // 宽度模式：standard 标准模式； adaptive 自动填满容器
    pagination:{
    perPageCount:10,
    currentPage:0,
    totalCount:''
     },
     dataConfig: {
      sortRules:[
        {
          sortField: 'sales',
          sortType: 'DESC',
         },
         
      ],
    },
    //rowHierarchyType:'tree',
  };
  function onPageSizeChange(pageSize){
    debugger
    console.log("aaa"+pageSize)
    tableInstance.value.updatePagination({
      perPageCount: pageSize,
      currentPage:0,
    });

  }
  function onPageChange(current){
      debugger
      console.log(current)
      tableInstance.value.updatePagination({
        currentPage: current-1
    });
    option.pagination.currentPage=current;
      console.log("bbb"+current)
  }
//跳转方法
const viewRecords=(param)=>
{
  const url = router.resolve({path:'/manage/totaltraffic1', query: {vrId: id}}).hrefwindow.open(url);
}

  onMounted(() => {
    tableInstance.value = new PivotTable(pivotTableRef.value, option.value);
    totalNum.value = option.value.pagination.totalCount;
    tableInstance.value.on("click_cell", (params) => {
      console.log(params);

    });
  });
  </script>
  
  <style scoped>
    .right-align {
    float: right; /* 让元素浮动到右边 */
    }
</style>
  