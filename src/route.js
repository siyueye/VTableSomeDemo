// 1. 定义路由
const routes = [
	{ path : '/'     , name : "Home",  component : ()=> import("./pages/Home.vue")  },
	{ path : '/ListTable'     , name : "ListTable",  component : ()=> import("./pages/ListTable.vue")  },
	{ path : '/Rendering'     , name : "Rendering",  component : ()=> import("./pages/Rendering.vue")  },
	{ path : '/Rendering_page'     , name : "Rendering_page",  component : ()=> import("./pages/Rendering_page.vue")  },
	{ path : '/Rendering_arco_page'     , name : "Rendering_arco_page",  component : ()=> import("./pages/Rendering_arco_page.vue")  },
	{ path : '/RenderingEltable'     , name : "RenderingEltable",  component : ()=> import("./pages/RenderingEltable.vue")  },
	{ path : '/RenderingEltable2'     , name : "RenderingEltable2",  component : ()=> import("./pages/RenderingEltable2.vue")  },
	{ path : '/PivotTable'     , name : "PivotTable",  component : ()=> import("./pages/PivotTable.vue")  },
	{ path : '/PivotTable_page'     , name : "PivotTable_page",  component : ()=> import("./pages/PivotTable_page.vue")  },
	{ path : '/PivotTableTree'     , name : "PivotTableTree",  component : ()=> import("./pages/PivotTableTree.vue")  },
	{ path : '/ListTableTree'     , name : "ListTableTree",  component : ()=> import("./pages/ListTableTree.vue")  },
	{ path : '/PivotChart'     , name : "PivotChart",  component : ()=> import("./pages/PivotChart.vue")  },
	{ path : '/exportTable'     , name : "exportTable",  component : ()=> import("./pages/exportTable.vue")  },
	{ path : '/chart'     , name : "chart",  component : ()=> import("./pages/chart.vue")  },
	{ path : '/cellType'     , name : "cellType",  component : ()=> import("./pages/cellType.vue")  },
	{ path : '/test'     , name : "test",  component : ()=> import("./pages/test.vue")  },
	{ path : '/CustomCellMerge'     , name : "CustomCellMerge",  component : ()=> import("./pages/CustomCellMerge.vue")  },
	{ path : '/editPage'     , name : "editPage",  component : ()=> import("./pages/editPage.vue")  },
	{ path : '/filterPage'     , name : "filterPage",  component : ()=> import("./pages/filterPage.vue")  },
	{ path : '/searchPage'     , name : "searchPage",  component : ()=> import("./pages/searchPage.vue")  },
	{ path : '/reloanListTable'     , name : "reloanListTable",  component : ()=> import("./pages/reloanListTable.vue")  },
	{ path : '/sumTable'     , name : "sumTable",  component : ()=> import("./pages/sumTable.vue")  },
	{ path : '/AnalysisTable'     , name : "AnalysisTable",  component : ()=> import("./pages/AnalysisTable.vue")  },
	{ path : '/analysis'     , name : "analysis",  component : ()=> import("./pages/analysis.vue")  },
	{ path : '/analysis1'     , name : "analysis1",  component : ()=> import("./pages/analysis1.vue")  },
	{ path : '/sumEltable'     , name : "sumEltable",  component : ()=> import("./pages/sumEltable.vue")  },
	{ path : '/treeEltable'     , name : "treeEltable",  component : ()=> import("./pages/treeEltable.vue")  },
	{ path : '/sortEltable'     , name : "sortEltable",  component : ()=> import("./pages/sortEltable.vue")  },
	{ path : '/filterEltable'     , name : "filterEltable",  component : ()=> import("./pages/filterEltable.vue")  },
	{ path : '/drillDown'     , name : "drillDown",  component : ()=> import("./pages/drillDown.vue")  },
	{ path : '/treeStructure'     , name : "treeStructure",  component : ()=> import("./pages/treeStructure.vue")  },	
	{ 
		path       : '/About', 
		name       : "About", 
		components : {
			default     : ()=> import("./pages/About.vue"),
			routerView1 : ()=> import("./pages/User.vue")
		},
	},
	{ path : '/User' , name : "User",  component : ()=> import("./pages/User.vue")  },
	{ 
		name : "ParamsDemo", 
		path : "/ParamsDemo/:id/:name", 
		component : ()=> import("./pages/ParamsDemo.vue")
	}
]

// 2. 创建路由
import NProgress from 'nprogress';
NProgress.configure({     
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
});
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
	history : createWebHashHistory(),
	routes  : routes
});
router.beforeEach((to, from) => {
	NProgress.start();
	console.log(to, from);
	// 自己的路由拦截逻辑代码
	// 比如拦截 User 路由
	console.log(to.path);
	if(to.path == '/User'){
		return false;
	}
});
router.afterEach((to, from) => {
	NProgress.done()
})


// 3. 使用 export 导出路由
export default router;