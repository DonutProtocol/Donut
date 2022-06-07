import Vue from 'vue';
import * as echarts from 'echarts'
import elementResizeDetectorMaker from "element-resize-detector"

export var version = '0.0.1';
var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
    Vue.util.warn('vue echarts resize directive ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}
let HANDLER = "_vue_echarts_resize_handler"

function bind(el) {
    unbind(el);
    el[HANDLER] = function () {
        let chart = echarts.getInstanceByDom(el);
        if (!chart) {
            return;
        }
        chart.resize();
    }
    elementResizeDetectorMaker().listenTo(el,el[HANDLER])
    
}
function unbind(el) {
    elementResizeDetectorMaker().removeListener(el,el[HANDLER])
    delete el[HANDLER];
}
var directive = {
    bind: bind,
    unbind: unbind
};
Vue.directive("on-echart-resize", directive)
