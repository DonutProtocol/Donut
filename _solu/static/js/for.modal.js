/* 
 * __time__: table-2018/4/19 __auth__:  
 * __name__: for.modal.js
 * __remark__: for common modal setting
 *
 * __version__: 
 * 1.0.1 2020-11-25
 * 
 */

$.fn.extend({
    mymodal: function(options){
        options = $(this).__init_parments(options)
        $('.modal-title').text(options.title)
        $('.modal-body').html(options.content)

        $(this).modal()
    }, __init_parments: function(options){
        options = options || {}
        options.title = options.title || '提示'
        options.content = options.content || '未知错误'

        return options
    }
})