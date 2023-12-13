var rule = {
    title:'drpy',
    host:'https://frodo.douban.com',
    homeUrl:'',
    searchUrl:'',
    searchable:1,
    quickSearch:1,
    filterable:1,
    // 分类链接fypage参数支持1个()表达式
    url:'/?pg=fypage&class=fyclass&douban=',
    filter_url:'fl={{fl}}',
    headers:{
            "Host": "frodo.douban.com",
            "Connection": "Keep-Alive",
            "Referer": "https://servicewechat.com/wx2f9b06c1de1ccfca/84/page-frame.html",
            "content-type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat"
    },
    timeout:5000,
    class_name:'电影&电视综艺',
    class_url:'movie&tv',
    filter:{'movie': [
	{'key': '类型', 'name': '类型', 'value': [
	{'n': '全部类型', 'v': ''}, 
	{'n': '喜剧', 'v': '喜剧'}, 
	{'n': '爱情', 'v': '爱情'}, 
	{'n': '动作', 'v': '动作'}, 
	{'n': '科幻', 'v': '科幻'}, 
	{'n': '动画', 'v': '动画'}, 
	{'n': '悬疑', 'v': '悬疑'}, 
	{'n': '犯罪', 'v': '犯罪'}, 
        {'n': '推理', 'v': '推理'}, 
	{'n': '惊悚', 'v': '惊悚'}, 
	{'n': '冒险', 'v': '冒险'}, 
	{'n': '音乐', 'v': '音乐'}, 
	{'n': '历史', 'v': '历史'}, 
	{'n': '奇幻', 'v': '奇幻'}, 
	{'n': '恐怖', 'v': '恐怖'}, 
	{'n': '战争', 'v': '战争'}, 
	{'n': 'Netflix', 'v': 'Netflix'}, 
	{'n': '复仇', 'v': '复仇'}, 
        {'n': '网络电影', 'v': '网络电影'}, 
	{'n': '剧情', 'v': '剧情'},
	{'n': '穿越', 'v': '穿越'}, 
        {'n': '吸血鬼', 'v': '吸血鬼'}, 
	{'n': '灾难', 'v': '灾难'}, 
	{'n': '丧尸', 'v': '丧尸'}, 
	{'n': '纪录片', 'v': '纪录片'}, 
	{'n': '伦理', 'v': '伦理'}, 
	{'n': '情色', 'v': '情色'}
	]}, 
	{'key': '地区', 'name': '地区', 'value': [
	{'n': '全部地区', 'v': ''}, 
	{'n': '中国', 'v': '中国'}, 
	{'n': '香港', 'v': '香港'}, 
	{'n': '台湾', 'v': '台湾'}, 
	{'n': '韩国', 'v': '韩国'}, 
	{'n': '美国', 'v': '美国'}, 
	{'n': '日本', 'v': '日本'}, 
	{'n': '马来西亚', 'v': '马来西亚'}, 
	{'n': '泰国', 'v': '泰国'}, 
	{'n': '印度', 'v': '印度'}, 
	{'n': '新加坡', 'v': '新加坡'}, 
	{'n': '法国', 'v': '法国'}, 
	{'n': '菲律宾', 'v': '菲律宾'}
	]},  
	{'key': '年代', 'name': '年代', 'value': [
	{'n': '全部年代', 'v': ''}, 
	{'n': '2024', 'v': '2024'}, 
    {'n': '2023', 'v': '2023'}, 
	{'n': '2022', 'v': '2022'}, 
	{'n': '2021', 'v': '2021'}, 
	{'n': '2020', 'v': '2020'}, 
	{'n': '2019', 'v': '2019'}, 
	{'n': '2018', 'v': '2018'}, 
    {'n': '2017', 'v': '2017'}, 
	{'n': '2016', 'v': '2016'}, 
	{'n': '2015', 'v': '2015'}, 
	{'n': '2014', 'v': '2014'}, 
	{'n': '2013', 'v': '2013'}, 
	{'n': '2012', 'v': '2012'}, 
    {'n': '2011', 'v': '2011'}, 
	{'n': '2010', 'v': '2010'}, 
	{'n': '更早', 'v': '更早'}
	]},
    {"key":"lang","name":"语言","value":[
    {"n":"全部","v":""},
    {"n":"国语","v":"国语"},
    {"n":"英语","v":"英语"},
    {"n":"粤语","v":"粤语"},
    {"n":"闽南语","v":"闽南语"},
    {"n":"韩语","v":"韩语"},
    {"n":"日语","v":"日语"}
    ]},
    {'key': '平台', 'name': '平台', 'value': [
	{'n': '全部', 'v': ''}, 
	{'n': '腾讯视频', 'v': '腾讯视频'}, 
	{'n': '爱奇艺', 'v': '爱奇艺'},
	{'n': '优酷', 'v': '优酷'},
	{'n': '湖南卫视', 'v': '湖南卫视'},
	{'n': 'Netflix', 'v': 'Netflix'},
	{'n': 'HBO', 'v': 'HBO'},
	{'n': 'BBC', 'v': 'BBC'},
	{'n': 'NHK', 'v': 'NHK'}, 
	{'n': 'CBS', 'v': 'CBS'},
	{'n': 'NBC', 'v': 'NBC'}, 
	{'n': 'tvN', 'v': 'tvN'}
	]}
    ], 
	'tv': [
	{'key': '类型', 'name': '类型', 'value': [
	{'n': '不限', 'v': ''}, 
	{'n': '电视剧', 'v': '电视剧'}, 
	{'n': '综艺', 'v': '综艺'}
	]}, 
	{'key': '电视剧形式', 'name': '电视剧形式', 'value': [
	{'n': '不限', 'v': ''}, 
	{'n': 'Netflix', 'v': 'Netflix'}, 
	{'n': '古装', 'v': '古装'}, 
	{'n': '战争', 'v': '战争'}, 
	{'n': '喜剧', 'v': '喜剧'}, 
	{'n': '丧尸', 'v': '丧尸'}, 
	{'n': '抗日', 'v': '抗日'}, 
	{'n': '犯罪', 'v': '犯罪'}, 
	{'n': '推理', 'v': '推理'}, 
	{'n': '动作', 'v': '动作'}, 
	{'n': '科幻', 'v': '科幻'}, 
	{'n': '奇幻', 'v': '奇幻'}, 
	{'n': '剧情', 'v': '剧情'}, 
        {'n': '复仇', 'v': '复仇'}, 
        {'n': '惊悚', 'v': '惊悚'}, 
	{'n': '恐怖', 'v': '恐怖'}, 
	{'n': '悬疑', 'v': '悬疑'}, 
	{'n': '吸血鬼', 'v': '吸血鬼'}, 
	{'n': '穿越', 'v': '穿越'}
	]}, 
	{'key': '综艺形式', 'name': '综艺形式', 'value': [
	{'n': '不限', 'v': ''}, 
	{'n': '真人秀', 'v': '真人秀'},
	{'n': '脱口秀', 'v': '脱口秀'}, 
	{'n': '音乐', 'v': '音乐'}, 
	{'n': '游戏', 'v': '游戏'}, 
	{'n': '亲子', 'v': '亲子'}, 
	{'n': '搞笑', 'v': '搞笑'}
	]}, 
	{'key': '地区', 'name': '地区', 'value': [
	{'n': '全部地区', 'v': ''}, 
	{'n': '中国', 'v': '中国'}, 
	{'n': '香港', 'v': '香港'}, 
	{'n': '台湾', 'v': '台湾'}, 
	{'n': '韩国', 'v': '韩国'}, 
	{'n': '美国', 'v': '美国'}, 
	{'n': '日本', 'v': '日本'}, 
	{'n': '马来西亚', 'v': '马来西亚'}, 
	{'n': '新加坡', 'v': '新加坡'}, 
	{'n': '泰国', 'v': '泰国'}, 
	{'n': '英国', 'v': '英国'}, 
	{'n': '印度', 'v': '印度'}, 
	{'n': '菲律宾', 'v': '菲律宾'}
	]}, 
	{'key': '年代', 'name': '年代', 'value': [
	{'n': '全部', 'v': ''}, 
	{'n': '2024', 'v': '2024'}, 
    {'n': '2023', 'v': '2023'}, 
	{'n': '2022', 'v': '2022'}, 
	{'n': '2021', 'v': '2021'}, 
	{'n': '2020', 'v': '2020'}, 
	{'n': '2019', 'v': '2019'}, 
	{'n': '2018', 'v': '2018'}, 
    {'n': '2017', 'v': '2017'}, 
	{'n': '2016', 'v': '2016'}, 
	{'n': '2015', 'v': '2015'}, 
	{'n': '2014', 'v': '2014'}, 
	{'n': '2013', 'v': '2013'}, 
	{'n': '2012', 'v': '2012'}, 
    {'n': '2011', 'v': '2011'}, 
	{'n': '2010', 'v': '2010'}, 
	{'n': '更早', 'v': '更早'}
	]}, 
    {"key":"lang","name":"语言","value":[
    {"n":"全部","v":""},
    {"n":"国语","v":"国语"},
    {"n":"英语","v":"英语"},
    {"n":"粤语","v":"粤语"},
    {"n":"闽南语","v":"闽南语"},
    {"n":"韩语","v":"韩语"},
    {"n":"日语","v":"日语"}
    ]},
    {'key': '平台', 'name': '平台', 'value': [
	{'n': '全部', 'v': ''}, 
	{'n': '腾讯视频', 'v': '腾讯视频'}, 
	{'n': '爱奇艺', 'v': '爱奇艺'},
	{'n': '优酷', 'v': '优酷'},
	{'n': '湖南卫视', 'v': '湖南卫视'},
	{'n': 'Netflix', 'v': 'Netflix'},
	{'n': 'HBO', 'v': 'HBO'},
	{'n': 'BBC', 'v': 'BBC'},
	{'n': 'NHK', 'v': 'NHK'}, 
	{'n': 'CBS', 'v': 'CBS'},
	{'n': 'NBC', 'v': 'NBC'}, 
	{'n': 'tvN', 'v': 'tvN'}
	]}]},
    limit:20,
    play_parse:false,
    推荐:'',
    推荐:'js:let d=[];let douban_api_host="https://frodo.douban.com/api/v2";let miniapp_apikey="0ac44ae016490db2204ce0a042db2916";const count=30;function miniapp_request(path,query){try{let url=douban_api_host+path;query.apikey=miniapp_apikey;fetch_params.headers=oheaders;url=buildUrl(url,query);let html=fetch(url,fetch_params);return JSON.parse(html)}catch(e){print("发生了错误:"+e.message);return{}}}function subject_real_time_hotest(){try{let res=miniapp_request("/subject_collection/subject_real_time_hotest/items",{});let lists=[];let arr=res.subject_collection_items||[];arr.forEach(function(item){if(item.type==="movie"||item.type==="tv"){let rating=item.rating?item.rating.value:"暂无评分";let honnor=(item.honor_infos||[]).map(function(it){return it.title}).join("|");lists.append({vod_id:"msearch:"+TYPE,vod_name:item.title||"",vod_pic:item.pic.normal,vod_remarks:rating+" "+honnor})}});return lists}catch(e){print("发生了错误:"+e.message);return[]}}VODS=subject_real_time_hotest();print(VODS);',
    // 手动调用解析请求json的url,此lazy不方便
    lazy:'',
    // 推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级:'',
    一级:'js:let d=[];let douban=input.split("douban=")[1].split("&")[0];let douban_api_host="https://frodo.douban.com/api/v2";let miniapp_apikey="0ac44ae016490db2204ce0a042db2916";const count=30;function miniapp_request(path,query){try{let url=douban_api_host+path;query.apikey=miniapp_apikey;fetch_params.headers=oheaders;url=buildUrl(url,query);let html=fetch(url,fetch_params);return JSON.parse(html)}catch(e){print("发生了错误:"+e.message);return{}}}function cate_filter(d,douban){douban=douban||"";try{let res={};if(MY_CATE==="interests"){if(douban){let status=MY_FL.status||"mark";let subtype_tag=MY_FL.subtype_tag||"";let year_tag=MY_FL.year_tag||"全部";let path="/user/"+douban+"/interests";res=miniapp_request(path,{type:"movie",status:status,subtype_tag:subtype_tag,year_tag:year_tag,start:(MY_PAGE-1)*count,count:count})}else{return{}}}else if(MY_CATE==="hot_gaia"){let sort=MY_FL.sort||"recommend";let area=MY_FL.area||"全部";let path="/movie/"+MY_CATE;res=miniapp_request(path,{area:area,sort:sort,start:(MY_PAGE-1)*count,count:count})}else if(MY_CATE==="tv_hot"||MY_CATE==="show_hot"){let stype=MY_FL.type||MY_CATE;let path="/subject_collection/"+stype+"/items";res=miniapp_request(path,{start:(MY_PAGE-1)*count,count:count})}else if(MY_CATE.startsWith("rank_list")){let id=MY_CATE==="rank_list_movie"?"movie_real_time_hotest":"tv_real_time_hotest";id=MY_FL.榜单||id;let path="/subject_collection/"+id+"/items";res=miniapp_request(path,{start:(MY_PAGE-1)*count,count:count})}else{let path="/"+MY_CATE+"/recommend";let selected_categories;let tags;let sort;if(Object.keys(MY_FL).length>0){sort=MY_FL.sort||"T";tags=Object.values(MY_FL).join(",");if(MY_CATE==="movie"){selected_categories={"类型":MY_FL.类型||"","地区":MY_FL.地区||""}}else{selected_categories={"类型":MY_FL.类型||"","形式":MY_FL.类型?MY_FL.类型+"地区":"","地区":MY_FL.地区||""}}}else{sort="T";tags="";if(MY_CATE==="movie"){selected_categories={"类型":"","地区":""}}else{selected_categories={"类型":"","形式":"","地区":""}}}let params={tags:tags,sort:sort,refresh:0,selected_categories:stringify(selected_categories),start:(MY_PAGE-1)*count,count:count};res=miniapp_request(path,params)}let result={page:MY_PAGE,pagecount:Math.ceil(res.total/count),limit:count,total:res.total};let items=[];if(/^rank_list|tv_hot|show_hot/.test(MY_CATE)){items=res["subject_collection_items"]}else if(MY_CATE==="interests"){res["interests"].forEach(function(it){items.push(it.subject)})}else{items=res.items}let lists=[];items.forEach(function(item){if(item.type==="movie"||item.type==="tv"){let rating=item.rating?item.rating.value:"";let rat_str=rating||"暂无评分";let title=item.title;let honor=item.honor_infos||[];let honor_str=honor.map(function(it){return it.title}).join("|");let vod_obj={vod_name:title!=="未知电影"?title:"暂不支持展示",vod_pic:item.pic.normal,vod_remarks:rat_str+" "+honor_str};let vod_obj_d={url:item.type+"$"+item.id,title:title!=="未知电影"?title:"暂不支持展示",pic_url:item.pic.normal,desc:rat_str+" "+honor_str};lists.push(vod_obj);d.push(vod_obj_d)}});result.list=lists;return result}catch(e){print(e.message)}return{}}let res=cate_filter(d);setResult2(res);',
    二级:'',
    搜索:'',
}
