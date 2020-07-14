(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{263:function(t,_,a){"use strict";a.r(_);var v=a(2),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-项目概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目概述"}},[t._v("#")]),t._v(" 1 项目概述")]),t._v(" "),a("p",[t._v("游戏开发，尤其是微信小游戏开发，是最近几年比较热门的话题。")]),t._v(" "),a("p",[t._v("本次「云开发」公开课，将通过实战「在线对战五子棋」，一步步带领大家，在不借助后端的情况下，利用「小程序 ✖ 云开发」，独立完成一款微信小游戏的开发与上线。")]),t._v(" "),a("h2",{attrs:{id:"_2-任务目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-任务目标"}},[t._v("#")]),t._v(" 2 任务目标")]),t._v(" "),a("p",[t._v("根据项目初始框架，阅读教程的同时，逐步完成棋盘绘制、音乐播放、玩家对战、输赢判定等功能，最终实现一个可以快乐玩耍的在线对战五子棋。")]),t._v(" "),a("p",[t._v("在这个过程中，会了解到 Serverless 的一些概念，并且实际应用它们，比如："),a("strong",[t._v("云数据库")]),t._v("、"),a("strong",[t._v("云存储")]),t._v("、"),a("strong",[t._v("云函数")]),t._v("、"),a("strong",[t._v("增值能力")]),t._v("。除了这些基本功能，还准备了更多的硬核概念与落地实践，比如："),a("strong",[t._v("实时数据库")]),t._v("、"),a("strong",[t._v("聚合搜索")]),t._v("、"),a("strong",[t._v("权限控制")]),t._v("。")]),t._v(" "),a("p",[t._v("完成开发后，上传并且设置为体验版，欢迎邀请更多人来体验。")]),t._v(" "),a("h2",{attrs:{id:"_3-准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-准备工作"}},[t._v("#")]),t._v(" 3 准备工作")]),t._v(" "),a("p",[t._v("从 "),a("a",{attrs:{href:"https://github.com/TencentCloudBase/tcb-game-gomoku",target:"_blank",rel:"noopener noreferrer"}},[t._v("TencentCloudBase/tcb-game-gomoku"),a("OutboundLink")],1),t._v(" 中下载代码到本地：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/TencentCloudBase/tcb-game-gomoku.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tcb-game-gomoku/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("切换课程专用的 "),a("code",[t._v("minigame-study")]),t._v(" 分支：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout minigame-study\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("⚠️"),a("code",[t._v("minigame")]),t._v("分支保存着「小游戏版」的完整代码，"),a("code",[t._v("miniprogram")]),t._v("分支保存着「小程序版」的完整代码。")]),t._v(" "),a("h2",{attrs:{id:"_4-游戏流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-游戏流程图"}},[t._v("#")]),t._v(" 4 游戏流程图")]),t._v(" "),a("p",[t._v("小游戏版本的核心放在了实时对战上，中间穿插应用了云开发的各个方面。如果想体验完整的流程与交互，请前往"),a("a",{attrs:{href:"https://github.com/TencentCloudBase/tcb-game-gomoku/tree/miniprogram",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("miniprogram")]),t._v("分支"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/TencentCloudBase/tcb-game-gomoku/raw/minigame/static/%E6%9E%B6%E6%9E%84%E5%9B%BE.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_5-实战任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-实战任务"}},[t._v("#")]),t._v(" 5 实战任务")]),t._v(" "),a("h3",{attrs:{id:"_5-1-创建云开发与小游戏环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-创建云开发与小游戏环境"}},[t._v("#")]),t._v(" 5.1 创建云开发与小游戏环境")]),t._v(" "),a("p",[t._v("1、打开微信 IDE，点击左侧的小游戏，选择右侧的导入项目，导入之前下载的「在线对战五子棋」的目录，AppID 修改为你已经注册好的小游戏 AppID。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686430445_67dhgo46ds9.png/0",alt:""}})]),t._v(" "),a("p",[t._v("2、进入后，点击上方的云开发按钮。如果之前没有开通过云开发，需要开通云开发，新开通的话需要等待 10 ～ 20 分钟。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686451687_pdl8t1onir.png/0",alt:""}})]),t._v(" "),a("p",[t._v("3、进入「云开发/数据库」，创建新的集合，新集合的名称是"),a("code",[t._v("rooms")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686465563_rx5zo815jmj.png/0",alt:""}})]),t._v(" "),a("p",[t._v("4、进入「云开发/存储」，点击“上传文件”。上传的内容是"),a("code",[t._v("/static/")]),t._v("下的"),a("code",[t._v("bgm.mp3")]),t._v(" 和 "),a("code",[t._v("fall.mp3")]),t._v("。之后的代码中会通过云存储的接口，请求文件的临时 url，这样做的目的是"),a("strong",[t._v("减少用户首次进入游戏加载的静态资源")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686476650_7pts6bn8fr.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-2-准备配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-准备配置文件"}},[t._v("#")]),t._v(" 5.2 准备配置文件")]),t._v(" "),a("p",[t._v("创建配置文件：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" miniprogram/shared/config.example.js miniprogram/shared/config.js\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("将关键字段的信息，换成自己账号的信息即可：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686524751_pxxe5yawz6m.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-3-创建云开发接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-创建云开发接口"}},[t._v("#")]),t._v(" 5.3 创建云开发接口")]),t._v(" "),a("p",[t._v("打开 "),a("code",[t._v("miniprogram/shared/cloud.js")]),t._v("，在里面初始化云开发能力，并且对外暴露云数据库以及聚合搜索的 API。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686536274_yusm5uxcxab.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-4-获取云存储资源的链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-获取云存储资源的链接"}},[t._v("#")]),t._v(" 5.4 获取云存储资源的链接")]),t._v(" "),a("p",[t._v("为了减少用户首屏加载的静态资源，音乐资源并没有放在"),a("code",[t._v("miniprogram")]),t._v("目录下，而是放在了云存储中，通过调用云存储的 api 接口，来返回静态资源的临时链接。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("miniprogram/modules/music.js")]),t._v("中，会调用资源接口，获取资源链接：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686547006_efn2rd6bu4f.png/0",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("getTempFileURL")]),t._v("函数属于云开发相关，因此放在了 "),a("code",[t._v("miniprogram/shared/cloud.js")]),t._v("中。这里只需要临时链接"),a("code",[t._v("tempFileURL")]),t._v("属性，其它返回值直接过滤调即可。")]),t._v(" "),a("p",[t._v("为了方便外面调用，promise 内部不再用 reject 抛错。对于错误异常，返回空字符串。这样，加载失败的资源不会影响正常资源的加载和 Promise.all 中逻辑进行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686556058_24v2t5tkr4c.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-5-游戏进入与身份判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-游戏进入与身份判断"}},[t._v("#")]),t._v(" 5.5 游戏进入与身份判断")]),t._v(" "),a("p",[t._v("根据前面的流程图我们可以看到，游戏玩家的身份是分为 owner 与 player。它们的含义如下：")]),t._v(" "),a("ul",[a("li",[t._v("owner：玩家进入游戏后，查找是否有空闲房间，如果不存在空闲房间，那么就会主动创建新的空闲房间。那么对于新创建的房间，玩家就是 owner。")]),t._v(" "),a("li",[t._v("player：玩家进入游戏后，查找是否有空闲房间，如果存在空闲房间，那么就加入空闲房间。那么对于空闲房间，玩家就是 player。")])]),t._v(" "),a("p",[t._v("判断的依据就是 "),a("code",[t._v("judgeIdentity")]),t._v(" 方法中，读取云数据库集合中的 rooms 的记录。如果存在多个空闲房间，需要选取创建时间最近的一个房间。因此，这里需要用到「聚合搜索」的逻辑。")]),t._v(" "),a("p",[t._v("聚合搜索的条件，在这里有 3 个：")]),t._v(" "),a("ol",[a("li",[t._v("标记人数的字段，是否为 1")]),t._v(" "),a("li",[t._v("创建时间倒叙排序")]),t._v(" "),a("li",[t._v("只选择 1 个")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686565847_3yze316092d.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-6-创建新房间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-创建新房间"}},[t._v("#")]),t._v(" 5.6 创建新房间")]),t._v(" "),a("p",[t._v("在上述的身份判断函数逻辑中，如果聚合搜索查询的结果为空，说明没有空闲房间，玩家需要作为 owner 来创建新的房间，等待其它玩家加入。")]),t._v(" "),a("p",[t._v("创建房间的逻辑就是将约定好的字段，放进云数据库的记录中。这些字段有：")]),t._v(" "),a("ul",[a("li",[t._v("roomid<"),a("code",[t._v("String")]),t._v(">: 6 位房间号，"),a("strong",[t._v("唯一")])]),t._v(" "),a("li",[t._v("nextcolor<"),a("code",[t._v('"white" | "black"')]),t._v(">: 下一步是白棋/黑棋走")]),t._v(" "),a("li",[t._v("chessmen<"),a("code",[t._v("String")]),t._v(">: 编码后的棋盘数据")]),t._v(" "),a("li",[t._v("createTimestamp<"),a("code",[t._v("String")]),t._v(">: 记录创建时间戳，精确到 ms")]),t._v(" "),a("li",[t._v("people<"),a("code",[t._v("Number")]),t._v(">: 房间人数")])]),t._v(" "),a("p",[t._v("是的，你可能注意到了，这里需要保证 roomid 是不重复的。因此本地生成的随机 roomid，需要先调用云数据库的查询接口，检测是否存在。如果存在，那么递归调用，重新生成随机字符串。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686576953_tjr37rmv9ae.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-7-监听玩家进入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-监听玩家进入"}},[t._v("#")]),t._v(" 5.7 监听玩家进入")]),t._v(" "),a("p",[t._v("对于 owner 身份来说，除了要创建新房间，还需要在创建后监听 player 身份的玩家进入游戏。")]),t._v(" "),a("p",[t._v("对于 player 身份的玩家进入游戏后，会更新记录中的 people 字段（1 => 2）。这时候就需要利用「实时数据库」的功能，监听远程记录的 people 字段变化。")]),t._v(" "),a("p",[t._v("代码实现上，调用"),a("code",[t._v("watch")]),t._v("方法，并且传递"),a("code",[t._v("onChange")]),t._v("函数参数。一旦有任何风吹草动，都可以在"),a("code",[t._v("onChange")]),t._v("回调函数中获得。对于传递给回调函数的参数，有两个比较重要：")]),t._v(" "),a("ul",[a("li",[t._v("docChanges<"),a("code",[t._v("Array")]),t._v(">: 数组中的每一项对应每条记录的变化类型，变化类型有 init、update、delete 等。")]),t._v(" "),a("li",[t._v("docs<"),a("code",[t._v("Array")]),t._v(">: 数组中的每一项对应每条记录的当前数据。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686591306_os588ni3m8.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-8-越权更新字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-越权更新字段"}},[t._v("#")]),t._v(" 5.8 越权更新字段")]),t._v(" "),a("p",[t._v("对于 player 身份来说，进入房间后，既不需要「创建新房间」，也不需要「监听玩家进入」。但需要更新记录的 people 字段。由于记录是由 owner 身份的玩家创建的，而云数据库只有以下 4 种权限：")]),t._v(" "),a("ul",[a("li",[t._v("所有用户可读，仅创建者可读写")]),t._v(" "),a("li",[t._v("仅创建者可读写")]),t._v(" "),a("li",[t._v("所有用户可读")]),t._v(" "),a("li",[t._v("所有用户不可读写")])]),t._v(" "),a("p",[t._v("以上 4 种权限，并没有「所有用户可读写」。因此，对于越权读写的情况，需要通过调用云函数来以“管理员”的权限实现。在 "),a("code",[t._v("cloudfunction")]),t._v(" 中创建 "),a("code",[t._v("updateDoc")]),t._v(" 云函数，接收前端传来的 collection、docid、data 字段。对于 data 字段来说，就是数据记录的最新更新数据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686600499_7jw2an2f8er.png/0",alt:""}})]),t._v(" "),a("p",[t._v("在小游戏中，通过"),a("code",[t._v("wx.cloud.callFunction")]),t._v("来调用云函数。传入的 data 字段指明被调用的云函数，传入的 data 字段可以在云函数的回调函数的 event 参数中访问到（如上图所示）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686609491_51yce50b2tf.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-9-落子更新逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-9-落子更新逻辑"}},[t._v("#")]),t._v(" 5.9 落子更新逻辑")]),t._v(" "),a("p",[t._v("不论对于 player 还是 owner 身份，都需要处理落子的逻辑。落子逻辑中，下面的两种情况是属于无效落子：")]),t._v(" "),a("ol",[a("li",[t._v("点击位置已经有棋子")]),t._v(" "),a("li",[t._v("对方还未落子，目前依然处于等待情况")])]),t._v(" "),a("p",[t._v("对于以上两种情况，处理的逻辑分别是：")]),t._v(" "),a("ol",[a("li",[t._v("棋盘状态保存在内部类中，调用落子的函数，会返回是否成功的字段标识")]),t._v(" "),a("li",[t._v("只有监听到远程棋盘更新后，才会打开本地的锁，允许落子；落子后，会重新上锁")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686620401_gfziqov00gm.png/0",alt:""}})]),t._v(" "),a("p",[t._v("落子成功后，要在本地判断是否胜利。如果胜利，需要调用退出的逻辑。但无论是否胜利，都要将本地的最新状态更新到云端。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686628911_zv5160zwrhb.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-10-监听远程棋盘更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-10-监听远程棋盘更新"}},[t._v("#")]),t._v(" 5.10 监听远程棋盘更新")]),t._v(" "),a("p",[t._v("不论对于 player 还是 owner 身份的玩家，都需要监听远程棋盘的更新逻辑。当远程棋盘字段更新时，本地根据最新的棋盘状态，重绘整个棋盘。并且进行输赢判定，如果可以判定输赢，则退出游戏；否则，打开本地的锁，玩家可以落子。")]),t._v(" "),a("p",[a("strong",[t._v("因为不同身份均需要监听，因此这一块的监听逻辑可以复用")]),t._v("。"),a("strong",[t._v("不同的是，两种身份的监听启动时间不一样")]),t._v("。owner 身份需要等待 player 身份玩家进入游戏后才开启棋盘监听；player 身份是更新了 people 字段后，开启棋盘监听。")]),t._v(" "),a("p",[t._v("在监听逻辑中，需要判断远程更新的字段是否是 chessmen，这是通过前面提及的 dataType 来实现的。还徐哟啊判断记录中的 nextcolor 字段是否和本地的 color 一样，来决定是否打开本地的锁。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686878918_0fvrbmcw7xw.png/0",alt:""}})]),t._v(" "),a("p",[t._v("如果上述的两个条件均满足，则执行更新本地棋盘、判定输赢、打开本地锁的逻辑。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686968256_u9wfsb9tcjj.png/0",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-11-游戏结束与退出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-11-游戏结束与退出"}},[t._v("#")]),t._v(" 5.11 游戏结束与退出")]),t._v(" "),a("p",[t._v("每次需要判定输赢的地方，如果可以判定输赢，那么都会走到游戏退出逻辑。退出的逻辑分为 2 个部分，第 1 个是给用户提示，第 2 个是调用云函数清空记录。")]),t._v(" "),a("p",[t._v("第 1 个逻辑中用户提示，需要判定用户胜负状态：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686982496_8w7g8tn7owp.png/0",alt:""}})]),t._v(" "),a("p",[t._v("第 2 个逻辑中清除记录的原因是为了方便调试，对于真正的业务场景，一般不会删除历史数据，方便问题定位。同时，这也是一个越权操作，需要调用云函数来实现。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190813_1565686993095_7g1lsvvydsn.png/0",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_6-课程完整源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-课程完整源码"}},[t._v("#")]),t._v(" 6. 课程完整源码")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/TencentCloudBase/tcb-game-gomoku",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/TencentCloudBase/tcb-game-gomoku"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_7-联系我们"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-联系我们"}},[t._v("#")]),t._v(" 7. 联系我们")]),t._v(" "),a("p",[t._v("更多云开发使用技巧及 Serverless 行业动态，扫码关注我们~")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://puui.qpic.cn/vupload/0/20190603_1559545575934_lettsbvkvdn.jpeg/0",width:"200px"}})])])}),[],!1,null,null,null);_.default=s.exports}}]);