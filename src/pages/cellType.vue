<template>
    <div ref="listTableRef" id="CONTAINER_ID" style="width: 1580px; height: 800px"></div>
  </template>
  
  <script setup>
  import { onMounted, ref, shallowRef } from "vue";
  import { ListTable } from "@visactor/vtable";
  
const listTableRef = ref();
const tableInstance = shallowRef();

const records = [
  {
   "name": "pigeon",
   "introduction":"The pigeon is a common urban bird with gray plumage and a short, stout beak",
   "image": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/pigeon.jpeg",
   "video": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/pigeon.mp4",
   "YoY": 50,
   "QoQ": 10,
   "trend":[{x:1,y:1500},{x:2,y:1480},{x:3,y:1520},{x:4,y:1550},{x:5, y:1600}],
  // "trend":[1500,1480,1520,1550,1600],
  "isCheck": { text: 'unchecked', checked: false, disable: false } 
  },
  {
   "name": "Swallow",
   "introduction":"Swallow is a kind of bird that is good at flying, usually perches near houses and buildings.",
   "image": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/swallow.jpeg",
   "video": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/swallow.mp4",
   "YoY": 10,
   "QoQ": -10,
   "trend":[{x:1,y:800},{x:2,y:780},{x:3,y:700},{x:4,y:800},{x:5, y:900}],
   "isCheck": { text: 'checked', checked: true, disable: false } 
  },
   {
   "name": "Magpie",
   "introduction":"The magpie is a common small bird mainly found in Asia. They are small in size with a black head and throat, gray back and white belly. Magpies are social animals and often live in woods Breeding nests in China or in urban parks, feeding on insects, fruit and seeds. They are also highly intelligent and social, and are considered an intelligent, playful bird.",
   "image": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/Magpie.jpeg",
   "video": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/Magpie.mp4",
   "YoY": -10,
   "QoQ": -10,
   "trend":[{x:1,y:500},{x:2,y:680},{x:3,y:400},{x:4,y:600},{x:5, y:800}],
  },
   {
   "name": "Peacock",
   "introduction":"The peacock is a large, beautiful bird with brilliant blue-green plumage and a long tail. Native to South Asia, it feeds on insects, fruit, and seeds.",
   "image": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/peacock.jpeg",
   "video": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/peacock.mp4",
   "YoY": -10,
   "QoQ": -10,
   "trend":[{x:1,y:500},{x:2,y:680},{x:3,y:400},{x:4,y:600},{x:5, y:800}],
  },
   {
   "name": "Peacock",
   "introduction":"The flamingo is a beautiful pink bird with long legs and neck, good at swimming, and is a common bird in tropical areas.",
   "image": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/flamingo.jpeg",
   "video": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/flamingo.mp4",
   "YoY": -1,
   "QoQ": -6,
   "trend":[{x:1,y:980},{x:2,y:880},{x:3,y:900},{x:4,y:1600},{x:5, y:1800}],
  },
   {
   "name": "ostrich",
   "introduction":"The ostrich is a large bird that cannot fly and runs fast. It is one of the largest birds in the world",
   "image": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/ostrich.jpeg",
   "video": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/ostrich.mp4",
   "YoY": -3,
   "QoQ": 10,
   "trend":[{x:1,y:560},{x:2,y:680},{x:3,y:5500},{x:4,y:600},{x:5, y:900}],
  },
   {
   "name": "Mandarin Duck",
   "introduction":"Mandarin duck is a kind of two-winged bird. The head of the male bird is blue and the head of the female bird is brown. It usually perches and mates in pairs. It is one of the symbols in Chinese culture.",
   "image": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/Mandarin.jpeg",
   "video": "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/media/Mandarin.mp4",
   "YoY": 10,
   "QoQ": 16,
   "trend":[{x:1,y:500},{x:2,y:480},{x:3,y:400},{x:4,y:500},{x:5, y:800}],
  }
];

const columns = [
{
    field: 'isCheck',
    title: 'checkbox',
    width: 60,
    headerType: 'checkbox',//指定表头单元格显示为复选框
    cellType: 'checkbox',//指定body单元格显示为复选框
  },
  {
    field: 'name',
    title: 'name',
    cellType: 'link',
    templateLink: 'https://www.baidu.com/s?wd={name}',
    linkJump: true,
    width:100
  },
  {
    field: 'introduction',
    title: 'introduction',
    cellType: 'text',
    width:200,
  },
  {
    field: 'image',
    title: 'bird image',
    // cellType:'image',
    cellType(args){
      if(args.row%3===1)
        return 'image';
      else if(args.row%3===2)
        return 'link';
      return 'text'
    },
    fieldFormat(record){
      if(record.name==='Magpie')
        return 'Magpie 的访问地址：'+record.image;
      return record.image;
    },
    width:'auto',
    keepAspectRatio:true,
  },
  {
    field: 'video',
    title: 'bird video',
    cellType: 'video',
    width:150,
    // imageSizing : 'keep-aspect-ratio',
  },
  {
    field: 'YoY',
    title: 'count Year-over-Year',
    cellType: 'progressbar',
    width:200,
    fieldFormat(){
      return '';
    },
    barType:'negative',
    min:-20,
    max:60,
    style: {
        barHeight: 20,
        barBottom:'30%',
      },
  },
  {
    field: 'QoQ',
    title: 'count Quarter-over-Quarter',
    fieldFormat(rec){return rec['QoQ']+'%'},
    style:{
      textAlign:'center'
    },
    icon(args){
      const { dataValue } = args;
      if (dataValue > 0) {
        return {
          type: 'svg',
          svg: "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/up-arrow.svg",
          width: 12,
          height: 12,
          name: 'up-green',
          positionType:'inlineEnd',
        };
      } else if (dataValue < 0)
        return {
          type: 'svg',
          svg: "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/down-arrow.svg",
          width: 14,
          height: 14,
          name: 'down-red',
          positionType: 'contentRight',
        };
      return '';
    },
    width:150
  },
  {
    field: 'trend',
    title: 'bird count',
    cellType: 'sparkline',//迷你图
    width:300,
    sparklineSpec: {//sparklineSpec是一个配置对象，用于设置迷你图的具体样式和行为。该配置项可缺省，将使用内部默认配置，同时它可以是一个静态的对象，也可以是一个根据单元格信息动态生成配置对象的函数
        type: 'line',//目前仅支持折线图（line），随着时间的推移，VTable将逐步丰富迷你图的图表类型，后续还将支持柱状图、面积图等多种迷你图类型 
        xField: 'x',
        yField: 'y',
        pointShowRule: 'none',//配置点显示规则：all表示显示所有点、none表示不显示点、isolatedPoint表示只显示孤立点（即前后值为空）。
        smooth: true,//线条是否平滑。
        line: {
          style: {//配置折线样式
            stroke: '#2E62F1',//线条样式
            strokeWidth: 2,//线条宽度
          },
        },
        point: {//point折线上数据点配置
          hover: {
              stroke: 'blue',
              strokeWidth: 1,
              fill: 'red',
              shape: 'circle',
              size: 4,
          },
          style: {//配置数据点样式：
            stroke: 'red',
            strokeWidth: 1,
            fill: 'yellow',
            shape: 'circle',
            size: 2,
          },
        },
        crosshair: {//交叉线配置
          style: {//配置交叉线样式：
            stroke: 'gray',
            strokeWidth: 1,
          },
        },
      },
  },
];
const option = {
  records,
  columns,
  defaultHeaderRowHeight:40,
  defaultRowHeight:140,
  rowSeriesNumber: {
        title: '序号',// 行序号标题，默认为空
        width: 'auto',
        dragOrder: true,//是否可拖拽顺序 默认为 false。如果设置为 true，会显示拖拽位置的图标，交互在该图标上可以拖拽来换位。
        selectRangeInclude: true,//选中整行或者全选时 是否包括序号部分
        headerStyle: {//行序号 header 单元格样式
          color: 'black',
          bgColor: 'pink'
        },
        style: {//行序号 body 单元格样式
          color: 'red'
        }
      }
  
};

  onMounted(() => {
  tableInstance.value = new ListTable(listTableRef.value, option);
  tableInstance.value.on("click_cell", (params) => {
    console.log(params);
  });
});

  
</script>