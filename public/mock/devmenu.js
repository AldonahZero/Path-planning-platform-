[
    {
        "key": "/app/smenu", 
        "title": "图片拼接", 
        "icon": "{<UserOutlined />}", 
        "subs": [
            {
                "key": "/app/smenu/sub1", 
                "title": "新文件上传拼接", 
                "component": "Sub1"
            },
            {
                "key": "/app/smenu/sub3", 
                "title": "服务端文件选取", 
                "component": "SmenuSub3"
            },
            {
                "key": "/app/smenu/sub2", 
                "title": "服务端文件拼接", 
                "component": "Sub2"
            }
        ]
    }, 
    {
        "key": "/app/path", 
        "title": "路径规划", 
        "icon": "api", 
        "subs": [
            {
                "key": "/app/path/sub3", 
                "title": "路径规划信息", 
                "component": "Sub3"
            },
            {
                "key": "/app/path/airport", 
                "title": "无人机", 
                "component": "Airport"
            }
        ]
    }, 
    {
        "key": "/app/ui", 
        "title": "UI", 
        "icon": "scan", 
        "subs": [
            {
                "key": "/app/ui/buttons", 
                "title": "按钮", 
                "component": "Buttons"
            }, 
            {
                "key": "/app/ui/icons", 
                "title": "图标", 
                "component": "Icons"
            }, 
            {
                "key": "/app/ui/spins", 
                "title": "加载中", 
                "component": "Spins"
            }, 
            {
                "key": "/app/ui/modals", 
                "title": "对话框", 
                "component": "Modals"
            }, 
            {
                "key": "/app/ui/notifications", 
                "title": "通知提醒框", 
                "component": "Notifications"
            }, 
            {
                "key": "/app/ui/tabs", 
                "title": "标签页", 
                "component": "Tabs"
            }, 
            {
                "key": "/app/ui/banners", 
                "title": "轮播图", 
                "component": "Banners"
            }, 
            {
                "key": "/app/ui/wysiwyg", 
                "title": "富文本", 
                "component": "WysiwygBundle"
            }, 
            {
                "key": "/app/ui/drags", 
                "title": "拖拽", 
                "component": "Drags"
            }, 
            {
                "key": "/app/ui/gallery", 
                "title": "画廊", 
                "component": "Gallery"
            }, 
            {
                "key": "/app/ui/map", 
                "title": "地图", 
                "component": "MapUi"
            }
        ]
    }, 
    {
        "key": "/app/animation", 
        "title": "动画", 
        "icon": "rocket", 
        "subs": [
            {
                "key": "/app/animation/basicAnimations", 
                "title": "基础动画", 
                "component": "BasicAnimations"
            }, 
            {
                "key": "/app/animation/exampleAnimations", 
                "title": "动画案例", 
                "component": "ExampleAnimations"
            }
        ]
    }, 
    {
        "key": "/app/table", 
        "title": "表格数据", 
        "icon": "copy", 
        "subs": [
            {
                "key": "/app/table/basicTable", 
                "title": "基础表格", 
                "component": "BasicTable"
            }, 
            {
                "key": "/app/table/advancedTable", 
                "title": "高级表格", 
                "component": "AdvancedTable"
            }, 
            {
                "key": "/app/table/asynchronousTable", 
                "title": "异步表格", 
                "component": "AsynchronousTable"
            }
        ]
    }, 
    {
        "key": "/app/chart", 
        "title": "图表", 
        "icon": "area-chart", 
        "subs": [
            {
                "key": "/app/chart/echarts", 
                "title": "echarts", 
                "component": "Echarts"
            }, 
            {
                "key": "/app/chart/recharts", 
                "title": "recharts", 
                "component": "Recharts"
            }
        ]
    }, 
    {
        "key": "/app/auth", 
        "title": "权限管理", 
        "icon": "safety", 
        "subs": [
            {
                "key": "/app/auth/basic", 
                "title": "基础演示", 
                "component": "AuthBasic"
            }, 
            {
                "key": "/app/auth/routerEnter", 
                "title": "路由拦截", 
                "component": "RouterEnter", 
                "requireAuth": "auth/testPage"
            }
        ]
    }, 
    {
        "key": "/app/cssModule", 
        "title": "cssModule", 
        "icon": "star", 
        "component": "Cssmodule"
    }, 
    {
        "key": "/app/extension", 
        "title": "功能扩展", 
        "icon": "bars", 
        "subs": [
            {
                "key": "/app/extension/queryParams", 
                "title": "问号形式参数", 
                "component": "QueryParams", 
                "query": "?param1=1¶m2=2"
            }, 
            {
                "key": "/app/extension/visitor", 
                "title": "访客模式", 
                "component": "Visitor", 
                "login": true
            }, 
            {
                "key": "/app/extension/multiple", 
                "title": "多级菜单", 
                "subs": [
                    {
                        "key": "/app/extension/multiple/child", 
                        "title": "多级菜单子菜单", 
                        "subs": [
                            {
                                "key": "/app/extension/multiple/child/child", 
                                "title": "多级菜单子子菜单", 
                                "component": "MultipleMenu"
                            }
                        ]
                    }
                ]
            }, 
            {
                "key": "/app/extension/env", 
                "title": "环境配置", 
                "component": "Env"
            }
        ]
    }
]