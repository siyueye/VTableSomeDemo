<template>
    <div ref="listTableExport" style="width: 1580px; height: 800px"></div>
  </template>
  
  <script setup>
  import { ref, shallowRef } from "vue";
  import * as VTable from '@visactor/vtable';
// 使用时需要引入插件包@visactor/vtable-export
import {
   downloadCsv,
   exportVTableToCsv,
   downloadExcel,
   exportVTableToExcel,
 } from "@visactor/vtable-export";
// umd引入时导出工具会挂载到VTable.export
const listTableExport = ref();
const tableInstance = shallowRef();


fetch(
  "https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/North_American_Superstore_Pivot_data.json"
)
  .then((res) => res.json())
  .then((data) => {
    const option = {
      records: data,
      rows: [
        {
          dimensionKey: "City",
          title: "City",
          headerStyle: {
            textStick: true,
          },
          width: "auto",
        },
      ],
      columns: [
        {
          dimensionKey: "Category",
          title: "Category",
          headerStyle: {
            textStick: true,
          },
          width: "auto",
        },
      ],
      indicators: [
        {
          indicatorKey: "Quantity",
          title: "Quantity",
          width: "auto",
          showSort: false,
          headerStyle: {
            fontWeight: "normal",
          },
          style: {
            padding: [16, 28, 16, 28],
            color(args) {
              if (args.dataValue >= 0) return "#000000";
              return "red";
            },
          },
        },
        {
          indicatorKey: "Sales",
          title: "Sales",
          width: "auto",
          showSort: false,
          headerStyle: {
            fontWeight: "normal",
          },
          format: (rec) => {
            return "$" + Number(rec).toFixed(2);
          },
          style: {
            padding: [16, 28, 16, 28],
            color(args) {
              if (args.dataValue >= 0) return "#000000";
              return "red";
            },
          },
        },
        {
          indicatorKey: "Profit",
          title: "Profit",
          width: "auto",
          showSort: false,
          headerStyle: {
            fontWeight: "normal",
          },
          format: (rec) => {
            return "$" + Number(rec).toFixed(2);
          },
          style: {
            padding: [16, 28, 16, 28],
            color(args) {
              if (args.dataValue >= 0) return "#000000";
              return "red";
            },
          },
        },
      ],
      corner: {
        titleOnDimension: "row",
        headerStyle: {
          textStick: true,
        },
      },
      dataConfig: {
        sortRules: [
          {
            sortField: "Category",
            sortBy: ["Office Supplies", "Technology", "Furniture"],
          },
        ],
      },
      enableDataAnalysis: true,
      widthMode: "standard",
    };
    tableInstance.value = new VTable.PivotTable(
      listTableExport.value,
      option
    );
    window["tableInstance"] = tableInstance;

    bindExport();
  });

function bindExport() {
    debugger
  let exportContainer = document.getElementById("export-buttom");
  if (exportContainer) {
    exportContainer.parentElement.removeChild(exportContainer);
  }

  exportContainer = document.createElement("div");
  exportContainer.id = "export-buttom";
  exportContainer.style.position = "absolute";
  exportContainer.style.bottom = "0";
  exportContainer.style.right = "0";

  window["tableInstance"].value.getContainer().appendChild(exportContainer);

  const exportCsvButton = document.createElement("button");
  exportCsvButton.innerHTML = "CSV-export";
  const exportExcelButton = document.createElement("button");
  exportExcelButton.innerHTML = "Excel-export";
  exportContainer.appendChild(exportCsvButton);
  exportContainer.appendChild(exportExcelButton);

  exportCsvButton.addEventListener("click", () => {
    if (window.tableInstance) {
      downloadCsv(exportVTableToCsv(window.tableInstance), "export");
    }
  });

  exportExcelButton.addEventListener("click", async () => {
    if (window.tableInstance) {
      downloadExcel(await exportVTableToExcel(window.tableInstance), "export");
    }
  });
}
</script>