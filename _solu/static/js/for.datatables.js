/* 
 * __time__: table-2018/4/19 __auth__:  
 * __name__: for.datatables.js
 * __remark__: for datetable.js common setting
 *
 * __version__: 
 * 1.0.3 2020-11-25
 * 
 */

$.fn.extend({
    mydatables: function(f, k, options){
        var o = $(this).__init_dparments(k, options)
        o.columns = $(this).__init_columns(f, [])

        // 设置默认排序字段
        var order = o.columns.findIndex(c => c.data == 'Y3RpbWU')
        o.order = [[order ? order : 0, 'desc']]

        o.drawCallback = function(){
            $(this).find('th:gt(1)').addClass('hidden-xs')
            $('.odd').find('td:gt(1)').addClass('hidden-xs')
            $('.even').find('td:gt(1)').addClass('hidden-xs')
        }

        return $(this).DataTable(o)
    }, __init_dparments: function(k, options){
        options = options || {processing: true, serverSide: true}
        
        options.pageLength = options.length || 25       // 设置默认分页长度
        // options.order = options.order || [[ 1, 'asc' ]] // 设置默认排序字段
        
        options.language = {
            'search': '',
            'processing': '请稍后 - 加载中...',
            'lengthMenu': '显示 _MENU_ 项结果',
            'loadingRecords': '请稍后 - 加载中...',
            'emptyTable': '查无数据!', 'zeroRecords': '查无数据!',
            'infoEmpty': '当前显示 0 到 0 条，共 0 条记录',
            'infoFiltered': '数据表中共为 _MAX_ 条记录',
            'info': '当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录',
            'paginate': {'previous': '上一页', 'next': '下一页'}
        }
        options.dom = "<'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>"

        options.ajax = {
            'url': '/' + k + '/pageing/',
            'type': 'POST', 'data': function(option_data) {
                var csrf = $('input[name="csrfmiddlewaretoken"]').val()
                option_data.csrfmiddlewaretoken = csrf
                return option_data
            }, 'error': function(ex, es, et){
                $('#exc').mymodal({'content': et ? et : es})
            }
        }

        return options
    }, __init_columns: function(fields, columns=[]){
        for(var k in fields){
            if(fields[k].hasOwnProperty('genre')){
                if(fields[k].genre == 'KEYVALUEPAIR'){
                    fields[k].render = function(){
                        var data = arguments[0], parms = arguments[3], text = ''
                        var args = parms.settings.aoColumns[parms.col].args
                        if(args){
                            var i = args.find(nub => nub.value == data)
                            text = i ? i.key : undefined
                        }
                        return text ? text : '未知值'
                    }
                }

                if(fields[k].genre == 'ICON'){
                    fields[k].render = function(data){
                        return '<i class="' + data + '" />'
                    }
                }

                if(fields[k].genre == 'TIMESTAMP'){
                    fields[k].render = function(data){
                        var time = new Date(data * 1000)
                        var date = time.getDate(), month = time.getMonth()
                            hour = time.getHours(), minute = time.getMinutes()

                        return month + '-' + date + ' ' + hour + ':' + minute
                    }
                }
            }

            fields[k].orderable = fields[k].orderable || false
            columns.push($.extend({'data': k}, fields[k]))
        }

        return columns
    }
})