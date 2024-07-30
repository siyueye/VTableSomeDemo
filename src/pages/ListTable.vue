<template>
  <!-- <div ref="listTableRef" style="width: 580px; height: 300px"></div> -->
 <div>
  <div ref="listTableRef" style="width: 580px; height: 650px">
  </div>
  <div style="width: 1580px; height: 50px" class="right-align">
    <button id="first-buttom" > 首页</button>
    <button id="prev-buttom" > 上一页</button>
    <span id="page-namber">第1页</span>
    <input id="cpnr" type="hidden">
    <span>/</span>
    <span id="total-page">共 页</span>
    <input id="mpnr" type="hidden">
    <button id="next-buttom">下一页</button>
    <button id="tail-buttom" > 尾页</button>
    <span id="total-num">共 条</span>
    <input  id="spn" type="number" >
    <button id="skip-buttom"> 跳转</button>
  </div>
</div>
</template>

<script setup>
import { onMounted, ref, shallowRef } from "vue";
import { ListTable } from "@visactor/vtable";
import * as VTable from '@visactor/vtable';

const listTableRef = ref();//ref()函数用于创建一个响应式引用（reactive reference）。这意味着当该引用的值发生变化时，任何依赖于该引用的部分都将自动重新渲染。
const tableInstance = shallowRef();//与普通的 ref不同，shallowref的响应性转换是浅层的，也就是说它只会监听其自身的引用变化，而不会递归监听其内部属性的变化。

const records = [
  {
    check: { 
      text: 'checked',//该单元格复选框中显示的文字
      checked: true,//该单元格复选框是否被选中,默认是不选中的
      disable: false,//该单元格复选框是否被禁用
    },
    "Order ID": "CA-2018-156720",
    "Customer ID": "JM-15580",
    "ProductName": "Bagged Rubber Bands",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Fasteners",
    "Region": "West",
    "City": "Loveland",
    "Order Date": "2018-12-30",
    "Quantity": -3,
    "Sales": 3.024,
    "Profit": "-0.605",
  },
  {
    check: { 
      text: 'unchecked',//该单元格复选框中显示的文字
      checked: false,//该单元格复选框是否被选中,默认是不选中的
      disable: true,//该单元格复选框是否被禁用,默认不被禁用
    },
    "Order ID": "CA-2018-115427",
    "Customer ID": "EB-13975",
    "ProductName": "GBC Binding covers",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Binders",
    "Region": "West",
    "City": "Fairfield",
    "Order Date": "2018-12-30",
    "Quantity": 2,
    "Sales": 20.72,
    "Profit": "6.475",
  },
  {
    "Order ID": "CA-2018-115427",
    "Customer ID": "EB-13975",
    "ProductName": "Cardinal Slant-D Ring Binder, Heavy Gauge Vinyl",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Binders",
    "Region": "West",
    "City": "Fairfield",
    "Order Date": "2018-12-30",
    "Quantity": 2,
    "Sales": 13.904,
    "Profit": "4.519",
  },
  {
    "Order ID": "CA-2018-143259",
    "Customer ID": "PO-18865",
    "ProductName": "Wilson Jones Legal Size Ring Binders",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Binders",
    "Region": "East",
    "City": "New York City",
    "Order Date": "2018-12-30",
    "Quantity": 3,
    "Sales": 52.776,
    "Profit": "19.791",
  },
  {
    "Order ID": "CA-2018-143259",
    "Customer ID": "PO-18865",
    "ProductName": "Gear Head AU3700S Headset",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Technology",
    "Sub-Category": "Phones",
    "Region": "East",
    "City": "New York City",
    "Order Date": "2018-12-30",
    "Quantity": 7,
    "Sales": 90.93,
    "Profit": "2.728",
  },
  {
    "Order ID": "CA-2018-143259",
    "Customer ID": "PO-18865",
    "ProductName": "Bush Westfield Collection Bookcases, Fully Assembled",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Furniture",
    "Sub-Category": "Bookcases",
    "Region": "East",
    "City": "New York City",
    "Order Date": "2018-12-30",
    "Quantity": "4",
    "Sales": 323.136,
    "Profit": "12.118",
  },
  {
    "Order ID": "CA-2018-126221",
    "Customer ID": "CC-12430",
    "ProductName": "Eureka The Boss Plus 12-Amp Hard Box Upright Vacuum, Red",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Appliances",
    "Region": "Central",
    "City": "Columbus",
    "Order Date": "2018-12-30",
    "Quantity": "2",
    "Sales": 209.3,
    "Profit": "56.511",
  },
  {
    "Order ID": "US-2018-158526",
    "Customer ID": "KH-16360",
    "ProductName": "Harbour Creations Steel Folding Chair",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Furniture",
    "Sub-Category": "Chairs",
    "Region": "South",
    "City": "Louisville",
    "Order Date": "2018-12-29",
    "Quantity": "3",
    "Sales": 258.75,
    "Profit": "77.625",
  },
  {
    "Order ID": "US-2018-158526",
    "Customer ID": "KH-16360",
    "ProductName": "Global Leather and Oak Executive Chair, Black",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Furniture",
    "Sub-Category": "Chairs",
    "Region": "South",
    "City": "Louisville",
    "Order Date": "2018-12-29",
    "Quantity": "1",
    "Sales": 300.98,
    "Profit": "87.284",
  },
  {
    "Order ID": "US-2018-158526",
    "Customer ID": "KH-16360",
    "ProductName": "Panasonic KP-350BK Electric Pencil Sharpener with Auto Stop",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Art",
    "Region": "South",
    "City": "Louisville",
    "Order Date": "2018-12-29",
    "Quantity": "1",
    "Sales": 34.58,
    "Profit": "10.028",
  },
  {
    "Order ID": "US-2018-158526",
    "Customer ID": "KH-16360",
    "ProductName": "GBC ProClick Spines for 32-Hole Punch",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Binders",
    "Region": "South",
    "City": "Louisville",
    "Order Date": "2018-12-29",
    "Quantity": "1",
    "Sales": 12.53,
    "Profit": "5.889",
  },
  {
    "Order ID": "US-2018-158526",
    "Customer ID": "KH-16360",
    "ProductName": "DMI Arturo Collection Mission-style Design Wood Chair",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Furniture",
    "Sub-Category": "Chairs",
    "Region": "South",
    "City": "Louisville",
    "Order Date": "2018-12-29",
    "Quantity": "8",
    "Sales": 1207.84,
    "Profit": "314.038",
  },
  {
    "Order ID": "CA-2018-130631",
    "Customer ID": "BS-11755",
    "ProductName": "Hand-Finished Solid Wood Document Frame",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Furniture",
    "Sub-Category": "Furnishings",
    "Region": "West",
    "City": "Edmonds",
    "Order Date": "2018-12-29",
    "Quantity": "2",
    "Sales": 68.46,
    "Profit": "20.538",
  },
  {
    "Order ID": "CA-2018-130631",
    "Customer ID": "BS-11755",
    "ProductName": "Acco Glide Clips",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Fasteners",
    "Region": "West",
    "City": "Edmonds",
    "Order Date": "2018-12-29",
    "Quantity": "5",
    "Sales": 19.6,
    "Profit": "9.604",
  },
  {
    "Order ID": "CA-2018-146626",
    "Customer ID": "BP-11185",
    "ProductName": "Nu-Dell Executive Frame",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Furniture",
    "Sub-Category": "Furnishings",
    "Region": "West",
    "City": "Anaheim",
    "Order Date": "2018-12-29",
    "Quantity": "8",
    "Sales": 101.12,
    "Profit": "37.414",
  },
  {
    "Order ID": "CA-2018-158673",
    "Customer ID": "KB-16600",
    "ProductName": "Xerox 1915",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Paper",
    "Region": "Central",
    "City": "Grand Rapids",
    "Order Date": "2018-12-29",
    "Quantity": "2",
    "Sales": 209.7,
    "Profit": "100.656",
  },
  {
    "Order ID": "US-2018-102638",
    "Customer ID": "MC-17845",
    "ProductName": "Ideal Clamps",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Office Supplies",
    "Sub-Category": "Fasteners",
    "Region": "East",
    "City": "New York City",
    "Order Date": "2018-12-29",
    "Quantity": "3",
    "Sales": 6.03,
    "Profit": "2.955",
  },
  {
    "Order ID": "CA-2018-118885",
    "Customer ID": "JG-15160",
    "ProductName": "Adtran 1202752G1",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Technology",
    "Sub-Category": "Phones",
    "Region": "West",
    "City": "Los Angeles",
    "Order Date": "2018-12-29",
    "Quantity": "3",
    "Sales": 302.376,
    "Profit": "22.678",
  },
  {
    "Order ID": "CA-2018-118885",
    "Customer ID": "JG-15160",
    "ProductName": "Global High-Back Leather Tilter, Burgundy",
    "proImg": 'https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/visactor-site/output/sg/img/visactor/navigator-logo.svg',
    "Category": "Furniture",
    "Sub-Category": "Chairs",
    "Region": "West",
    "City": "Los Angeles",
    "Order Date": "2018-12-29",
    "Quantity": "4",
    "Sales": 393.568,
    "Profit": "-44.276",
  },
];

const columns = [
{
    headerType: 'checkbox', //指定表头单元格显示为复选框
    cellType: 'checkbox',//指定body单元格显示为复选框
    field: 'check',
  },
  {
    field: "Order ID",//指定了当前表示“订单编号”的数据字段。
    title: "订单编号",//为表头设置名为“订单编号”的列标题。
    width: 100,
    cellType: 'text',//支持的数据类型共有 7 种文本（text）、链接（link）、图片（image）、视频（video）、进度条（progressbar）、迷你图(sparkline)以及图表（chart） 默认是文本（text）
    fieldFormat: (rec) => rec['Order ID'].toLowerCase(),//表示将数据源中的姓名字段全都转换成小写字母显示。
    style: {
      color(args) {
        if (args.row % 2 === 1) return 'purple';//表示将文本显示单行颜色设置为紫色
        return 'green';//双行设置成绿色
      },
      //同理也可以设置其他样式属性，比如字体大小等
      
      // fontSize(args) {
      //   if (args.row % 2 === 1) return 20;
      //   return 12;
      // }
      autoWrapText: true,//全局配置是否允许自动换行，默认值为false。如果设置为true，则当前列的单元格会根据其内容自动换行。
      lineClamp: "auto",//number | string：设置单元格的最大行数，支持数字或者'auto'值。如果设置为'auto'，则根据单元格内容长度自动计算行数。
    },
  },
  {
    field: "Customer ID",
    title: "客户编号",
    width: "auto",
    dragHeader: false ,//false，可以禁止该列拖拽换位 默认是true
  },
  {
    field: "ProductName",
    title: "产品名称",
    cellType: 'link',//链接（link）
    templateLink: 'https://www.baidu.com/s?wd={ProductName}',//用于定义模板链接地址。例如，配置为 'https://www.google.com.hk/search?q={name}，其中 name 是数据源属性字段名。这样可以更方便地快速生成链接地址。
    linkDetect: true, //默认值为 true。当设置为 true 时，程序会对链接进行正则检测，只有符合 URL 规则的链接才会被展示成可点击的超链接。为模板链接类型，此配置项不生效。
    linkJump: true,//默认值为 true。如果此项为 true链接将可点击跳转到指定地址；若为 false，链接将不具跳转功能，仅以文本形式展。
    width: "auto",
    
  },
  {
    field: "proImg",
    title: "产品图片",
    cellType: "image",
    width: 100,
    maxWidth: 100,
    minWidth: 100,
    keepAspectRatio: true,//keepAspectRatio属性用于配置是否保持图片的横纵比。默认值为false，即不保持横纵比；当设置为true时，将会按照图片原始大小比例显示
    imageAutoSizing: false,//imageAutoSizing：imageAutoSizing属性用于配置是否根据图片尺寸自动调整单元格的尺寸。默认值为false，即不自动调整单元格尺寸；当设置为true时，将会根据图片尺寸调整单元格的宽度和高度
    style: {
      textAlign: "center",
      margin: 20,//图片在单元格中的边距；
    },
  },
  {
    field: "Category",
    title: "种类",
    "mergeCell": true,//同一列中内容相同的相邻单元格进行合并
        style:{
          "textStick":true,
          textAlign:'right',
          // textBaseline:"bottom"
        },
    width: "auto",
  },
  {
    field: "Sub-Category",
    title: "子种类",
    width: "auto",
  },
  {
    field: "Region",
    title: "区域",
    width: "auto",
  },
  {
    field: "City",
    title: "城市",
    width: "auto",
  },
  {
    field: "Order Date",
    title: "订单日期",
    width: "auto",
  },
  {
    field: "Quantity",
    cellType: 'progressbar',
    barType:'negative',//进度条类型，默认值为 'default'。可选值包括：'default'：普通进度条；'negative'：考虑负值的进度条，进度条会以 0 为分割显示正负两个方向的进度条；'negative_no_axis'：与 'negative' 类似，但无 0 值坐标轴。
    min:-10,//进度条展示范围的最小数据，默认值为 0。
    max:10,//进度条展示范围的最大数据，默认值为 100。
    title: "数量",
    width: "auto",
    style: {
        textAlign:'right',
        showBar:true,//false,true
        barHeight: 20,
        barBottom:'30%',
        barBgColor:'rgba(217,217,217,0.3)'
    },
    fieldFormat(rec){
        if(typeof rec['Quantity'] === 'number')//当Quantity中的值是数字时显示百分比，否则显示原来的值
        return rec['Quantity']*10+'%'
      return rec['Quantity'];
    },
  },
  {
    field: "Sales",
    title: "销售额",
    width: "auto",
    // sort: true,// 使用内置默认排序逻辑sort 为 true，表示该列支持排序，并使用内置的排序规则。
    sort: (v1, v2, order) => {
        // 使用自定义排序逻辑
        if (order === 'desc') {
          return v1 === v2 ? 0 : v1 > v2 ? -1 : 1;
        }
        return v1 === v2 ? 0 : v1 > v2 ? 1 : -1;
      },
    headerIcon: 'expand',
    showSort: true,//默认是true  true，false是隐藏排序图标
  },
  {
    field: "Profit",
    title: "利润",
    width: "auto",
  },
];

const option = {
  records,//表格的数据，以数组形式表示。
  columns,//列的配置
  // frozenColCount: 3,//指定冻结列数。
  transpose: false,//是否转置表格，默认为 false。
  pagination:{
    //  totalCount:19,
    perPageCount:20,
    currentPage:0,
  },
  //   SortState :{//可跟一个也可是数组
  //   /** 排序依据字段 */
  //   field: 'Profit',
  //   /** 排序规则 */
  //   order: 'asc'//'desc' | 'asc' | 'normal';
  // },
  // SortState ://可跟一个也可是数组
  //   [{field: 'Quantity',
  //   /** 排序规则 */
  //   order: 'desc'//'desc' | 'asc' | 'normal';
  // },{field: 'Profit',
  //   /** 排序规则 */
  //   order: 'desc'//'desc' | 'asc' | 'normal';},]/** 排序依据字段 */
  //   },],
  showHeader: true,//是否显示表头，默认为 true。
  widthMode: "standard",//表格列宽度的计算模式。'standard'（标准模式）、'adaptive'（自适应容器宽度模式）或 'autoWidth'（自动宽度模式），默认为 'standard'。
  frozenColCount:1,//左侧冻结列数 默认为 0。
  allowFrozenColCount: 3,//允许可操作冻结列数，即前多少列会出现冻结操作按钮，默认为 0。
  showFrozenIcon: true,// 是否显示固定列图标，默认为 true。
  rightFrozenColCount:1,//右侧冻结列数，默认为 0。
  bottomFrozenRowCount:1,// 底部冻结行，默认为 0。
  frozenColDragHeaderMode:'disabled',//"disabled"（禁止调整冻结列位置）,"adjustFrozenCount"（根据交互结果调整冻结数量）,"fixedFrozenCount"（可调整冻结列，并维持冻结数量不变）
  //  select:{
  //   headerSelectMode:'cell',//点击表头单元格的行为默认会选中整行或者整列，如果只想选中当前单元格可以设置select.headerSelectMode为'cell'。
      // disableSelect: true,//禁止所有单元格的选择交互
      // disableHeaderSelect :true,//禁止表头单元格的选择交互
  //  },
  columnResizeMode:'all',//开启或关闭列宽调整功能'all': 整列包括表头和body处的单元格均可调整列宽,'none': 禁止调整列宽,'header': 只能在表头处单元调整列宽,'body': 只能在body单元格调整列宽
  dragHeaderMode: 'all',//拖拽表头换位功能默认关闭状态，'all' 表示所有表头均可换位,'none' 表示不可换位,'column' 表示只有列表头可换位,'row' 表示只有行表头换位
  hover:{
    highlightMode:'cross',//'cross'|'column'|'row'|'cell'十字交叉、整列、整行或者单个单元格。
    // enableSingleHighlight: false,
  },
  theme:  //DEFAULT：默认主题、ARCO：ARCO 风格、DARK：暗黑主题，BRIGHT：鲜明主题，SIMPLIFY：极简主题
  VTable.themes.DARK.extends({
    selectionStyle: {//选中单元格的样式
        cellBorderLineWidth: 2,
        cellBorderColor: '#9900ff',
        cellBgColor: 'rgba(153,0,255,0.2)',
    },
    bodyStyle: {
        hover:{
          cellBgColor:'#FFC0CB',
          inlineRowBgColor: '#FFD700', 
          inlineColumnBgColor: '#ADFF2F' 
        }
      },
      dragHeaderSplitLine: {//换位标记线样式配置
      lineColor: 'red',//拖拽标记线的颜色
      lineWidth: 2,//拖拽标记线的线宽
      shadowBlockColor: 'rgba(255,0,0,0.3)'// 拖拽时阴影区域的颜色
    },
    columnResize : {//调整列宽度的样式
            lineColor: 'blue',
            bgColor: 'red',
            lineWidth: 1,
            width: 5
        },
    scrollStyle: {//滚动的样式
          visible: 'always',//是否可见,'always' | 'scrolling' | 'none' | 'focus'，常驻显示|滚动时显示|显示|聚焦在画布上。默认为‘scrolling’
          scrollSliderColor: 'purple',//配置滚动条滑块的颜色。
          scrollRailColor: '#bac3cc',//配置滚动条轨道的颜色。
          hoverOn: false,//指定滚动条是悬浮在容器上，还是独立于容器。默认为 true 即悬浮于容器上。
          width:10,//配置滚动条宽度
          barToSide: true//是否显示到容器的边缘 尽管内容没有撑满的情况下. 默认 false
        }
  }),
  keyboardOptions: {
    copySelected: true, //复制选中单元格内容,这个 copy 是和浏览器的快捷键一致的。ctrl+c 默认false 快捷键复制 
    selectAllOnCtrlA: true,//全选开启快捷键全选 默认：false 
  },
  defaultRowHeight:100,
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
  // option.theme = VTable.themes.DARK;//DEFAULT：默认主题、ARCO：ARCO 风格、DARK：暗黑主题，BRIGHT：鲜明主题，SIMPLIFY：极简主题
  tableInstance.value = new ListTable(listTableRef.value, option);
  
  //分页相关代码
let pageNumber = 0;
const totalNum = option.records.length;
const pageSize =option.pagination.perPageCount;
const pageNumberSpan = document.getElementById("page-namber");
const totalPageSpan = document.getElementById("total-page");
const totalNumSpan = document.getElementById("total-num");

const totalPg = Math.ceil(totalNum/pageSize);//总页数
totalPageSpan.innerHTML='共'+totalPg+'页';
totalNumSpan.innerHTML='共'+totalNum+'条';


document.getElementById("prev-buttom").addEventListener("click", () => {
  if (pageNumber === 0) {
    return;
  }
  pageNumber--;
  tableInstance.value.updatePagination({
    currentPage: pageNumber
  });
  pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
});
document.getElementById("first-buttom").addEventListener("click", () => {
  pageNumber=1;
  pageNumber--;
  tableInstance.value.updatePagination({
    currentPage: pageNumber
  });
  pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
  document.getElementById("spn").value ='';
});

document.getElementById("tail-buttom").addEventListener("click", () => {
  pageNumber=totalPg-1;
  tableInstance.value.updatePagination({
    currentPage: pageNumber
  });
  pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
  document.getElementById("spn").value ='';
});


document.getElementById("next-buttom").addEventListener("click", () => {
  if (pageNumber === (totalPg-1)) {
    return;
  }
  pageNumber++;
  tableInstance.value.updatePagination({
    currentPage: pageNumber
  });
  pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
});
document.getElementById("skip-buttom").addEventListener("click", () => {
  debugger
  let specificPageNum = document.getElementById("spn").value;//要跳转的页
  if (specificPageNum > totalPg) {
    pageNumber=totalPg-1;
    document.getElementById("spn").value=totalPg;
  }else{
    pageNumber = specificPageNum-1
  }
  if (specificPageNum <= 0) {
    pageNumber=0;
    document.getElementById("spn").value =1;
  }
  
  tableInstance.value.updatePagination({
    currentPage: pageNumber
  });
  pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
});
// validateNumber(event) {
//       const min = 1; // 设置最小值
//       const max = 100; // 设置最大值
//       const value = parseInt(event.target.value, 10);
//       if (isNaN(value) || value < min || value > max) {
//         this.number = Math.max(Math.min(value, max), min); // 限制在最小和最大值之间
//         event.target.value = this.number; // 更新输入框的值
//       }
//     };
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
