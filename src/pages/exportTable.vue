<template>
    <div>
        <div ref="listTableExport" id = "CONTAINER_ID" style="width: 1580px; height: 800px"></div>
        <div id = "CONTAINER_HiDE" style="display : none"></div>
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
   import * as VTable from '@visactor/vtable';
// 使用时需要引入插件包@visactor/vtable-export
import {
  downloadCsv,
  exportVTableToCsv,
  downloadExcel,
  exportVTableToExcel,
} from "@visactor/vtable-export";
// umd引入时导出工具会挂载到VTable.export

let tableInstance;
let tableInstance_hide;
fetch('https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/North_American_Superstore_Pivot_data.json')
  .then(res => res.json())
  .then(data => {
    const option = {
      records: data,
      rows: [
        {
          dimensionKey: 'City',
          title: 'City',
          headerStyle: {
            textStick: true
          },
          width: 'auto'
        }
      ],
      columns: [
        {
          dimensionKey: 'Category',
          title: 'Category',
          headerStyle: {
            textStick: true
          },
          width: 'auto'
        }
      ],
      indicators: [
        {
          indicatorKey: 'Quantity',
          title: 'Quantity',
          width: 'auto',
          showSort: false,
          headerStyle: {
            fontWeight: 'normal'
          },
          style: {
            padding: [16, 28, 16, 28],
            color(args) {
              if (args.dataValue >= 0) return '#000000';
              return 'red';
            }
          }
        },
        {
          indicatorKey: 'Sales',
          title: 'Sales',
          width: 'auto',
          showSort: false,
          headerStyle: {
            fontWeight: 'normal'
          },
          format: rec => {
            return '$' + Number(rec).toFixed(2);
          },
          style: {
            padding: [16, 28, 16, 28],
            color(args) {
              if (args.dataValue >= 0) return '#000000';
              return 'red';
            }
          }
        },
        {
          indicatorKey: 'Profit',
          title: 'Profit',
          width: 'auto',
          showSort: false,
          headerStyle: {
            fontWeight: 'normal'
          },
          format: rec => {
            return '$' + Number(rec).toFixed(2);
          },
          style: {
            padding: [16, 28, 16, 28],
            color(args) {
              if (args.dataValue >= 0) return '#000000';
              return 'red';
            }
          }
        }
      ],
      corner: {
        titleOnDimension: 'row',
        headerStyle: {
          textStick: true
        }
      },
      dataConfig: {
        sortRules: [
          {
            sortField: 'Category',
            sortBy: ['Office Supplies', 'Technology', 'Furniture']
          }
        ]
      },
      widthMode: 'standard',
      pagination:{
        perPageCount:10,
        currentPage:0,
        },
    };
    
    tableInstance = new VTable.PivotTable(document.getElementById("CONTAINER_ID"), option);
    const option_hide = {
      records: data,
      rows: [
        {
          dimensionKey: 'City',
          title: 'City',
        }
      ],
      columns: [
        {
          dimensionKey: 'Category',
          title: 'Category',
        }
      ],
      indicators: [
        {
          indicatorKey: 'Quantity',
          title: 'Quantity',
        },
        {
          indicatorKey: 'Sales',
          title: 'Sales',
        },
        {
          indicatorKey: 'Profit',
          title: 'Profit',
        }
      ],
      
      dataConfig: {
        sortRules: [
          {
            sortField: 'Category',
            sortBy: ['Office Supplies', 'Technology', 'Furniture']
          }
        ]
      },
    };  
    tableInstance_hide = new VTable.PivotTable(document.getElementById("CONTAINER_HiDE"), option_hide);
    //分页相关代码
    let pageNumber = 0;
    // const totalNum = option.records.length;
    const totalNum = option.pagination.totalCount;
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
    tableInstance.updatePagination({
        currentPage: pageNumber
    });
    pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
    });
    document.getElementById("first-buttom").addEventListener("click", () => {
    pageNumber=1;
    pageNumber--;
    tableInstance.updatePagination({
        currentPage: pageNumber
    });
    pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
    document.getElementById("spn").value ='';
    });

    document.getElementById("tail-buttom").addEventListener("click", () => {
    pageNumber=totalPg-1;
    tableInstance.updatePagination({
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
    tableInstance.updatePagination({
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
    
    tableInstance.updatePagination({
        currentPage: pageNumber
    });
    pageNumberSpan.innerHTML = '第'+(pageNumber+1)+'页';
    });
    window['tableInstance'] = tableInstance;
    window['tableInstance_hide'] = tableInstance_hide;


    bindExport(totalNum,pageNumber);
  });

function bindExport(totalNum,pageNumber) {
  let exportContainer = document.getElementById('export-buttom');
  if (exportContainer) {
    exportContainer.parentElement.removeChild(exportContainer);
  }

  exportContainer = document.createElement('div');
  exportContainer.id = 'export-buttom';
  exportContainer.style.position = 'absolute';
  exportContainer.style.bottom = '0';
  exportContainer.style.right = '0';

  
  window['tableInstance'].getContainer().appendChild(exportContainer);

  const exportCsvButton = document.createElement('button');
  exportCsvButton.innerHTML = '全量CSV-export';
  const exportExcelButton = document.createElement('button');
  exportExcelButton.innerHTML = '全量Excel-export';
  exportContainer.appendChild(exportCsvButton);
  exportContainer.appendChild(exportExcelButton);

  const exportCsvButton_currentPage = document.createElement('button');
  exportCsvButton_currentPage.innerHTML = '当页CSV-export';
  const exportExcelButton_currentPage = document.createElement('button');
  exportExcelButton_currentPage.innerHTML = '当页Excel-export';
  exportContainer.appendChild(exportCsvButton_currentPage);
  exportContainer.appendChild(exportExcelButton_currentPage);

  const exportCsvButton_hide = document.createElement('button');
  exportCsvButton_hide.innerHTML = '隐藏全量CSV-export';
  const exportExcelButton_hide = document.createElement('button');
  exportExcelButton_hide.innerHTML = '隐藏全量Excel-export';
  exportContainer.appendChild(exportCsvButton_hide);
  exportContainer.appendChild(exportExcelButton_hide);

  exportCsvButton.addEventListener('click', () => {
    window.tableInstance.updatePagination({
        perPageCount:totalNum,
        currentPage: pageNumber
    });
    if (window.tableInstance) {
      downloadCsv(exportVTableToCsv(window.tableInstance), 'export');
    }
    window.tableInstance.updatePagination({
        perPageCount:10,
        currentPage: pageNumber
    });
  });

  exportExcelButton.addEventListener('click', async () => {
    window.tableInstance.updatePagination({
        perPageCount:totalNum,
        currentPage: 0
    });
    if (window.tableInstance) {
      downloadExcel(await exportVTableToExcel(window.tableInstance, {
        formatExportOutput: ({ cellType, cellValue, table, col, row }) => {
            debugger            
        }
} ), 'export');
    }
    window.tableInstance.updatePagination({
        perPageCount:10,
        currentPage: pageNumber
    });
  });

  exportCsvButton_currentPage.addEventListener('click', () => {
    if (window.tableInstance) {
      downloadCsv(exportVTableToCsv(window.tableInstance), 'export');
    }
  });

  exportExcelButton_currentPage.addEventListener('click', async () => {
    if (window.tableInstance) {
      downloadExcel(await exportVTableToExcel(window.tableInstance, {
        formatExportOutput: ({ cellType, cellValue, table, col, row }) => {
            debugger            
        }
} ), 'export');
    }
  });

  exportCsvButton_hide.addEventListener('click', () => {
    debugger
    if (window.tableInstance_hide) {
      downloadCsv(exportVTableToCsv(window.tableInstance_hide), 'export');
    }
  });

  exportExcelButton_hide.addEventListener('click', async () => {
    debugger
    if (window.tableInstance_hide) {
      downloadExcel(await exportVTableToExcel(window.tableInstance_hide, {
        formatExportOutput: ({ cellType, cellValue, table, col, row }) => {
            debugger            
        }
} ), 'export');
    }
  });
}
</script>