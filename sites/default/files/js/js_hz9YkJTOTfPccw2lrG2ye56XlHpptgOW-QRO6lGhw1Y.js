Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0421\u0442\u0430\u043b\u0430\u0441\u044c \u043f\u043e\u043c\u0438\u043b\u043a\u0430 AJAX HTTP","HTTP Result Code: !status":"HTTP \u043a\u043e\u0434 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456: !status","An AJAX HTTP request terminated abnormally.":"\u0417\u0430\u043f\u0438\u0442 AJAX HTTP \u043d\u0435\u0441\u043f\u043e\u0434\u0456\u0432\u0430\u043d\u043e \u043e\u0431\u0456\u0440\u0432\u0430\u0432\u0441\u044f","Debugging information follows.":"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u0434\u043b\u044f \u0437\u043d\u0435\u0432\u0430\u0434\u0436\u0435\u043d\u043d\u044f \u043d\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f.","Path: !uri":"\u0428\u043b\u044f\u0445: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u043d\u0443: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456: !responseText","ReadyState: !readyState":"\u0421\u0442\u0430\u043d \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0456: !readyState","CustomMessage: !customMessage":"\u0412\u043b\u0430\u0441\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f: !customMessage","Hide":"\u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438","Configure":"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not restricted":"\u0411\u0435\u0437 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u044c","Restricted to certain pages":"\u0422\u0456\u043b\u044c\u043a\u0438 \u0434\u043b\u044f \u043f\u0435\u0432\u043d\u0438\u0445 \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a","Not customizable":"\u041d\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0456\u0437\u0443\u0454\u0442\u044c\u0441\u044f","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0417\u043c\u0456\u043d\u0438 \u0434\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u043b\u043e\u043a\u0456\u0432 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442\u044c \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456, \u043f\u043e\u043a\u0438 \u043d\u0435 \u0431\u0443\u0434\u0435 \u043d\u0430\u0442\u0438\u0441\u043d\u0435\u043d\u043e \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0440\u043e\u0437\u0442\u0430\u0448\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0446\u0456\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0456.","Re-order rows by numerical weight instead of dragging.":"\u041f\u0435\u0440\u0435\u0432\u043f\u043e\u0440\u044f\u0434\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0440\u044f\u0434\u043a\u0456\u0432 \u0437\u0430 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u044e \u0432\u0430\u0433\u043e\u044e \u0437\u0430\u043c\u0456\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u043d\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0430\u0433\u0443 \u0440\u044f\u0434\u043a\u0456\u0432","Hide row weights":"\u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438 \u0432\u0430\u0433\u0443 \u0440\u044f\u0434\u043a\u0456\u0432","Drag to re-order":"\u041f\u0435\u0440\u0435\u0442\u044f\u0433\u043d\u0443\u0442\u0438 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043f\u043e\u0440\u044f\u0434\u043a\u0443\u0432\u0430\u043d\u043d\u044f","Changes made in this table will not be saved until the form is submitted.":"\u0417\u043c\u0456\u043d\u0438, \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0456 \u0432 \u0446\u0456\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0456, \u043d\u0435 \u0431\u0443\u0434\u0443\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u0456, \u0434\u043e\u043a\u0438 \u043d\u0435 \u0431\u0443\u0434\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e \u0444\u043e\u0440\u043c\u0443.","Also allow !name role to !permission?":"\u0422\u0430\u043a\u043e\u0436 \u043d\u0430\u0434\u0430\u0442\u0438 \u0440\u043e\u043b\u0456 !name \u043f\u043e\u0432\u043d\u043e\u0432\u0430\u0436\u0435\u043d\u043d\u044f !permission?","Disabled":"\u0412\u0438\u043c\u043a\u043d\u0435\u043d\u043e","Enabled":"\u0423\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u043e","Edit":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438","Add":"\u0414\u043e\u0434\u0430\u0442\u0438","Upload":"\u0412\u0438\u043a\u043b\u0430\u0441\u0442\u0438","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","This field is required.":"\u0426\u0435 \u043f\u043e\u043b\u0435 - \u043e\u0431\u043e\u0432\u2019\u044f\u0437\u043a\u043e\u0432\u0435.","Anonymous users":"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456","Select all rows in this table":"\u041e\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456 \u0440\u044f\u0434\u043a\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0456","Deselect all rows in this table":"\u0417\u043d\u044f\u0442\u0438 \u0432\u0438\u0431\u0456\u0440 \u0432\u0441\u0456\u0445 \u0440\u044f\u0434\u043a\u0456\u0432","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0456\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u0417\u0430\u0447\u0435\u043a\u0430\u0439\u0442\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430...","Only files with the following extensions are allowed: %files-allowed.":"\u041c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 \u0444\u0430\u0439\u043b\u0438 \u0437 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c\u0438 \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f\u043c\u0438: %files-allowed.","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0456\u043c: @alias","No alias":"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0456\u0439 \u0441\u0438\u043d\u043e\u043d\u0456\u043c","New revision":"\u041d\u043e\u0432\u0430 \u0440\u0435\u0434\u0430\u043a\u0446\u0456\u044f","This permission is inherited from the authenticated user role.":"\u0426\u0435 \u043f\u043e\u0432\u043d\u043e\u0432\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0441\u043f\u0430\u0434\u043a\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0456\u0434 \u0440\u043e\u043b\u0456 \u0022\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0022.","No revision":"\u0411\u0435\u0437 \u0440\u0435\u0434\u0430\u043a\u0446\u0456\u0457","@number comments per page":"@number \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456\u0432 \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443","Requires a title":"\u041f\u043e\u0442\u0440\u0456\u0431\u0435\u043d \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Customize dashboard":"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u043f\u0430\u043d\u0435\u043b\u044c","Hide summary":"\u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u044e\u043c\u0435","Edit summary":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u044e\u043c\u0435","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043e\u043c\u043e\u0441\u0442\u0456 \u043f\u0440\u043e \u0434\u043e\u043f\u0438\u0441","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u041d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u0438 \u0432\u0438\u0431\u0440\u0430\u043d\u0438\u0439 \u0444\u0430\u0439\u043b %filename. \u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u0438\u043c\u0438 \u0454 \u043b\u0438\u0448\u0435 \u0444\u0430\u0439\u043b\u0438 \u0437 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c\u0438 \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f\u043c\u0438: %extensions.","Autocomplete popup":"\u0421\u043f\u043b\u0438\u0432\u0430\u044e\u0447\u0435 \u0430\u0432\u0442\u043e\u0434\u043e\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f","Searching for matches...":"\u041f\u043e\u0448\u0443\u043a \u0437\u0431\u0456\u0433\u0456\u0432...","The response failed verification so will not be processed.":"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u043d\u0435 \u043f\u0440\u043e\u0439\u0448\u043b\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0443 \u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0442\u0438\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435.","The callback URL is not local and not trusted: !url":"URL \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u044c\u043e\u0433\u043e \u0437\u0432\u2019\u044f\u0437\u043a\u0443 \u043d\u0435 \u0454 \u043d\u0456 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0438\u043c, \u043d\u0456 \u0434\u043e\u0432\u0456\u0440\u0435\u043d\u0438\u043c: !url","Translatable":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0443","Not translatable":"\u041d\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f","Restricted to certain languages":"\u041e\u0431\u043c\u0435\u0436\u0435\u043d\u043e \u043f\u0435\u0432\u043d\u0438\u043c\u0438 \u043c\u043e\u0432\u0430\u043c\u0438","Show description":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u043e\u043f\u0438\u0441","Hide description":"\u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438 \u043e\u043f\u0438\u0441","Please select a file.":"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0444\u0430\u0439\u043b.","You are not allowed to operate on more than %num files.":"\u0412\u0430\u043c \u043d\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u043e \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0456\u0436 %num \u0444\u0430\u0439\u043b\u0430\u043c\u0438.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u0432\u043a\u0430\u0436\u0456\u0442\u044c \u0440\u043e\u0437\u043c\u0456\u0440 \u0432 \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0438\u0445 \u043c\u0435\u0436\u0430\u0445 \u0432\u0456\u0434 1x1 \u0434\u043e @dimensions.","%filename is not an image.":"%filename \u043d\u0435 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f.","Insert file":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0444\u0430\u0439\u043b","Change view":"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u0432\u0438\u0433\u043b\u044f\u0434","Available tokens":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u0437\u0430\u043c\u0456\u043d\u043d\u0438\u043a\u0438","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0446\u0435\u0439 \u0437\u0430\u043c\u0456\u043d\u043d\u0438\u043a \u0443 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0429\u043e\u0431 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043c\u0456\u043d\u043d\u0438\u043a \u043a\u043b\u0430\u0446\u043d\u0456\u0442\u044c \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c\u0443 \u043f\u043e\u043b\u0456.","Loading token browser...":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f \u043e\u0433\u043b\u044f\u0434\u0430\u0447 \u0437\u0430\u043c\u0456\u043d\u043d\u0438\u043a\u0456\u0432...","Automatic alias":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0456 \u0441\u0438\u043d\u043e\u043d\u0456\u043c\u0438","Close":"\u0417\u0430\u043a\u0440\u0438\u0442\u0438","Remove group":"\u0412\u0438\u043b\u0443\u0447\u0438\u0442\u0438 \u0433\u0440\u0443\u043f\u0443","Apply (all displays)":"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 (\u0434\u043b\u044f \u0432\u0441\u0456\u0445 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c)","Apply (this display)":"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 (\u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f)","Revert to default":"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438 \u0434\u043e \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c","All pages with exceptions":"\u0423\u0441\u0456 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u0437 \u0432\u0438\u043d\u044f\u0442\u043a\u0430\u043c\u0438","Excepted: @roles":"\u0412\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u043e: @roles","On by default with opt out":"\u0423\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u043e \u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0437 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044e \u0432\u0438\u043c\u043a\u043d\u0443\u0442\u0438","Off by default with opt in":"\u0412\u0438\u043c\u043a\u043d\u0435\u043d\u043e \u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0437 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044e \u0443\u0432\u0456\u043c\u043a\u043d\u0443\u0442\u0438","Outbound links":"\u0417\u043e\u0432\u043d\u0456\u0448\u043d\u0456 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f","Mailto links":"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f Mailto","Downloads":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f","Colorbox":"Colorbox","Link attribution":"\u0412\u0456\u0434\u043d\u0435\u0441\u0435\u043d\u043d\u044f \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u044c","URL fragments":"\u0424\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0438 URL","Not tracked":"\u041d\u0435 \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043d\u043e","@items enabled":"@items \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u043e","Site search":"\u041f\u043e\u0448\u0443\u043a \u0441\u0430\u0439\u0442\u043e\u043c","AdSense ads":"\u0420\u0435\u043a\u043b\u0430\u043c\u0430 AdSense","Display features":"\u0424\u0443\u043d\u043a\u0446\u0456\u0457 \u043f\u043e\u043a\u0430\u0437\u0443","A single domain":"\u041e\u0434\u0438\u043d \u0434\u043e\u043c\u0435\u043d","One domain with multiple subdomains":"\u041e\u0434\u0438\u043d \u0434\u043e\u043c\u0435\u043d \u0437 \u043a\u0456\u043b\u044c\u043a\u043e\u043c\u0430 \u043f\u0456\u0434\u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438","Multiple top-level domains":"\u0414\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0434\u043e\u043c\u0435\u043d\u0456\u0432 \u0432\u0435\u0440\u0445\u043d\u044c\u043e\u0433\u043e \u0440\u0456\u0432\u043d\u044f","Anonymize IP":"\u0410\u043d\u043e\u043d\u0456\u043c\u0456\u0437\u0430\u0446\u0456\u044f IP-\u0430\u0434\u0440\u0435\u0441\u0438","Universal web tracking opt-out":"\u0423\u043d\u0456\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u0430 \u0432\u0456\u0434\u043c\u043e\u0432\u0430 \u0432\u0456\u0434 \u0432\u0435\u0431-\u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043d\u043d\u044f","No privacy":"\u0411\u0435\u0437 \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456","SKU":"\u0410\u0440\u0442\u0438\u043a\u0443\u043b","Sell price":"\u0412\u0456\u0434\u043f\u0443\u0441\u043a\u043d\u0430 \u0446\u0456\u043d\u0430","Shippable":"\u041c\u043e\u0436\u043b\u0438\u0432\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430.","Not shippable":"\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0435 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438","Authenticated users":"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456","Checkout is enabled.":"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0443\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u043e.","Anonymous checkout is enabled.":"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0443\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u043e.","Anonymous checkout is disabled.":"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0432\u0438\u043c\u043a\u043d\u0435\u043d\u043e.","Encryption key path":"\u0428\u043b\u044f\u0445 \u043a\u043b\u044e\u0447\u0430 \u0448\u0438\u0444\u0440\u0443\u0432\u0430\u043d\u043d\u044f","@label: @value":"@label: @value","Using defaults":"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0443\u043c\u043e\u0432\u0447\u0430\u043d\u044c"}} };;
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Attaches sticky table headers.
 */
Drupal.behaviors.tableHeader = {
  attach: function (context, settings) {
    if (!$.support.positionFixed) {
      return;
    }

    $('table.sticky-enabled', context).once('tableheader', function () {
      $(this).data("drupal-tableheader", new Drupal.tableHeader(this));
    });
  }
};

/**
 * Constructor for the tableHeader object. Provides sticky table headers.
 *
 * @param table
 *   DOM object for the table to add a sticky header to.
 */
Drupal.tableHeader = function (table) {
  var self = this;

  this.originalTable = $(table);
  this.originalHeader = $(table).children('thead');
  this.originalHeaderCells = this.originalHeader.find('> tr > th');
  this.displayWeight = null;

  // React to columns change to avoid making checks in the scroll callback.
  this.originalTable.bind('columnschange', function (e, display) {
    // This will force header size to be calculated on scroll.
    self.widthCalculated = (self.displayWeight !== null && self.displayWeight === display);
    self.displayWeight = display;
  });

  // Clone the table header so it inherits original jQuery properties. Hide
  // the table to avoid a flash of the header clone upon page load.
  this.stickyTable = $('<table class="sticky-header"/>')
    .insertBefore(this.originalTable)
    .css({ position: 'fixed', top: '0px' });
  this.stickyHeader = this.originalHeader.clone(true)
    .hide()
    .appendTo(this.stickyTable);
  this.stickyHeaderCells = this.stickyHeader.find('> tr > th');

  this.originalTable.addClass('sticky-table');
  $(window)
    .bind('scroll.drupal-tableheader', $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    .bind('resize.drupal-tableheader', { calculateWidth: true }, $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    // Make sure the anchor being scrolled into view is not hidden beneath the
    // sticky table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceAnchor.drupal-tableheader', function () {
      window.scrollBy(0, -self.stickyTable.outerHeight());
    })
    // Make sure the element being focused is not hidden beneath the sticky
    // table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceFocus.drupal-tableheader', function (event) {
      if (self.stickyVisible && event.clientY < (self.stickyOffsetTop + self.stickyTable.outerHeight()) && event.$target.closest('sticky-header').length === 0) {
        window.scrollBy(0, -self.stickyTable.outerHeight());
      }
    })
    .triggerHandler('resize.drupal-tableheader');

  // We hid the header to avoid it showing up erroneously on page load;
  // we need to unhide it now so that it will show up when expected.
  this.stickyHeader.show();
};

/**
 * Call the header offset function to prevent use of eval().
 *
 * @param accessor
 *   The callback function name.
 * @return
 *   The callback result.
 */
Drupal.tableHeader.callHeaderOffsetFunction = function(accessor) {
  accessor = accessor.split('.');
  var callback = window;
  for (var i = 0, len = accessor.length - 1; i < len; i++) {
    if (typeof callback[accessor[i]] !== 'function' && typeof callback[accessor[i]] != 'object') {
      return 0;
    }
    callback = callback[accessor[i]];
  }
  if (typeof callback[accessor[accessor.length - 1]] === 'function') {
    return callback[accessor[accessor.length - 1]]();
  }
  return 0;
};

/**
 * Event handler: recalculates position of the sticky table header.
 *
 * @param event
 *   Event being triggered.
 */
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader = function (event) {
  var self = this;
  var calculateWidth = event.data && event.data.calculateWidth;

  // Reset top position of sticky table headers to the current top offset.
  this.stickyOffsetTop = Drupal.settings.tableHeaderOffset ? Drupal.tableHeader.callHeaderOffsetFunction(Drupal.settings.tableHeaderOffset) : 0;
  this.stickyTable.css('top', this.stickyOffsetTop + 'px');

  // Save positioning data.
  var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (calculateWidth || this.viewHeight !== viewHeight) {
    this.viewHeight = viewHeight;
    this.vPosition = this.originalTable.offset().top - 4 - this.stickyOffsetTop;
    this.hPosition = this.originalTable.offset().left;
    this.vLength = this.originalTable[0].clientHeight - 100;
    calculateWidth = true;
  }

  // Track horizontal positioning relative to the viewport and set visibility.
  var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
  var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - this.vPosition;
  this.stickyVisible = vOffset > 0 && vOffset < this.vLength;
  this.stickyTable.css({ left: (-hScroll + this.hPosition) + 'px', visibility: this.stickyVisible ? 'visible' : 'hidden' });

  // Only perform expensive calculations if the sticky header is actually
  // visible or when forced.
  if (this.stickyVisible && (calculateWidth || !this.widthCalculated)) {
    this.widthCalculated = true;
    var $that = null;
    var $stickyCell = null;
    var display = null;
    var cellWidth = null;
    // Resize header and its cell widths.
    // Only apply width to visible table cells. This prevents the header from
    // displaying incorrectly when the sticky header is no longer visible.
    for (var i = 0, il = this.originalHeaderCells.length; i < il; i += 1) {
      $that = $(this.originalHeaderCells[i]);
      $stickyCell = this.stickyHeaderCells.eq($that.index());
      display = $that.css('display');
      if (display !== 'none') {
        cellWidth = $that.css('width');
        // Exception for IE7.
        if (cellWidth === 'auto') {
          cellWidth = $that[0].clientWidth + 'px';
        }
        $stickyCell.css({'width': cellWidth, 'display': display});
      }
      else {
        $stickyCell.css('display', 'none');
      }
    }
    this.stickyTable.css('width', this.originalTable.outerWidth());
  }
};

})(jQuery);
;
