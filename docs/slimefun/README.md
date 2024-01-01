# 粘液科技服主食用指南

> 适用版本:粘液科技V5 中文版

> 基于 StarWishsama 所维护的粘液科技中文版讲述

> 对于玩家,请参考[粘液科技图文视频保姆级教程](https://www.mcbbs.net/thread-1479857-1-1.html) 及[各种粘液科技 Wiki](https://mc.skycraft.cn/slimefun/wiki)

### | 一个老服主说的话 / 使用粘液科技开服的建议

粘液科技作为一个老牌的科技类插件,流传久远,而目前粘液科技已经支持至 1.20.4 最新版本,但站内几乎全部教程都是围绕远古工艺(1.8-1.13)所进行的,在高版本中,刷物品之类的 BUG 已被逐渐修复,而配置及使用方法也有较大更改,因此,本贴将对高版本服主使用粘液科技进行较为完善的帮助,虽然这份指南并不像 Wiki 那么官方且全面,但它也会有一些额外的内容,仔细阅读,会给你带来不一样的感悟.  
**特别鸣谢: StarWishsama,haiman,鬼斩,粘液科技中文汉化组,zimzaza4 等诸位大佬的插件汉化与帮助**  

开服前应先了解粘液科技的具体玩法及步骤:  
粘液科技不同于原版游戏,所达成的目标与进度与原版有着较大差异,因此在开服前你应了解粘液科技中大部分物品的合成方式及用途

善于平衡新老玩家之间的矛盾:  
作为一个生存类型的插件服务器,粘液科技所带来的不仅仅是丰富的玩法,还有潜在的风险:老玩家已全部实现自动化后退服,新玩家看到服务器老玩家占据主要地位,便没有了肝下去的动力,因此作为服主要做的不仅仅是一味的丰富游戏内容,更重要的事平衡玩家体验

不要一味地添加大量的附属,单纯追寻物品数量:  
一味添加附属而不注重附属的兼容性会导致玩家发展速度过快,可挑进度等问题,加入附属插件需要考虑附属插件之间的关联问题,如造价相似的两个不同附属的发电机一个可能只有 100J 的发电量,而另一个却可以更高

询问粘液科技插件相关问题时确保自己使用的插件及附属为最新开发版本:  
部分在正式版中存在的漏洞可能已经在开发版本得到了修复,请确保你使用的版本为[**开发版本或内测版本**](https://github.com/StarWishsama/Slimefun4/releases/tag/exp)

尝试修改/魔改粘液科技附属插件:  
大部分粘液科技附属插件都是开源的,你可以从开源网站上下载并进行修改(如用电量/工作速度等),这样会使你的粘液科技服务器与众不同

不要相信网络上流传的粘液科技漏洞修复插件:  
大多数粘液科技漏洞修复插件修复的一般都是 1.13 及以下版本的粘液科技(即远古工艺)进行修复的  
最新版本的粘液科技已经对网络上常见的、已有的漏洞进行的修复

善于对服务器玩法进行更新:  
选择恰当的时间添加新的粘液科技附属插件以确保玩家游玩服务器的积极性,因粘液科技的科技线并不算远,在保证全服玩家平均进程的情况下添加

善用粘液科技中文社区:  
粘液科技中文社区已经相当完善,包括鬼斩构建站,粘液科技中文文档,粘液科技附属插件文档等工具网站以足以应对大多数服主的需要.  

若你的服务器安装有 ChestTerminal 插件,建议及时替换为 Network 插件,Slimefun 官方**已停止**对 ChestTerminal 的支持.

### | 什么是粘液科技?

粘液科技是一个基于 Bukkit 的服务端插件,旨在在 Bukkit 类的插件服务器实现类似于模组整合包的玩法(敬请注意:粘液科技的目的是在插件服务端中实现模组服务端的玩法,它并不适用于混合端如CatSever等,粘液官方不会提供对此的支持).  
仅粘液科技本体就向 Minecraft 中添加了 400 余种新的物品和方块及多方块结构,而你却无需额外安装任何模组,况且你还可以使用各式各样的粘液科技附属来丰富粘液科技,粘液科技的所有物品均可在粘液科技指南中找到并具体阐述了每种物品的用法.  
关于粘液科技的更多内容,可前往[粘液科技中文 Wiki](https://slimefun-wiki.guizhanss.cn/)查看.

### | 删掉你的 Cs - Corelib 吧!

目前,粘液科技已经内置 Dough/Cs - Corelib,因此,除了部分可能需要 CS - Corelib 的插件,你无需再次安装 CS - Corelib(目前绝大多数插件均不需要).

### | 手把手安装粘液科技

众所周知,虽然粘液科技已经提供了汉化,但汉化仅限于游戏内的提示与额外的文字,粘液科技中的所有物品均被写死在代码中,因此,对于服主可直接选择由@StarWishsama 所提供的汉化版  
[粘液科技非官方中文版下载地址](https://builds.guizhanss.com/StarWishsama/Slimefun4/release).  
请注意,如果您使用了中文版粘液科技插件,请优先在粘液科技中文版的 Github 上反馈而不是官方版.

对于无法使用粘液科技中文版的服主,也可选择安装粘液科技原版插件并使用@Rothes 提供的强制汉化功能汉化粘液科技物品  
[粘液科技官方版下载地址](https://github.com/Slimefun/Slimefun4)  
[可在此处下载粘液科技原版所适用的汉化文件及汉化所需插件](https://www.mcbbs.net/thread-1209429-1-1.html)

相较于官方原版,中文版有着不可比拟的优势,例如额外的保护功能/**数据库支持**等,因此如果没有特殊需求,使用中文版即可.  
下载完成后,将插件放入位于服务端根目录的 plugins 文件夹即可(目前粘液科技不再需要前置插件).

### | 使用数据库储存粘液科技玩家数据/方块数据 [重要]
在中文版23年7月后的更新中加入了数据库储存功能,**建议所有服主均使用数据库储存**以便提供粘液科技数据的跨服兼容支持及减少粘液科技机器变方块的问题.
你可在[菜鸟教程 - MySQL安装](https://www.runoob.com/mysql/mysql-install.html)安装MySQL数据库,也可使用[宝塔面板](https://www.bt.cn/)或[小皮面板](https://www.bt.cn/)安装并快捷配置数据库.
安装数据库后,可在粘液科技配置文件夹中的profile-storage.yml(玩家数据),block-storage.yml(方块数据)进行配置.


    storageType: MYSQL
    mysql:
      # 数据库连接地址
      host: ""
      # 数据库连接端口
      port: 
      # 数据库名
      database: ""
      # 表前缀
      tablePrefix: ""
      # 连接用户名
      user: ""
      # 连接用户密码
      password: ""
      # 是否使用加密连接
      useSSL: false
      # 最大连接数
      maxConnection: 100
	  (两份配置文件均全中文,自行配置即可)

> **注意:** profile-storage.yml(玩家数据)可以跨服保存(即多个子服务器使用同一数据库),但block-storage.yml(方块数据)不能跨服保存,每个子服务器均需要使用单独的MySQL数据库


### | 使用粘液科技材质包(CustomModelData)

粘液科技中的部分物品使用头颅的形式呈现,但还有数目不小的物品使用原版物品的形式实现,如何让这部分物品拥有自己的材质呢?  
在 Minecraft1.14+ 加入了物品标签(CustomModelData),通过CustModelData可以实现相同物品的不同材质展现,Slimefun 同样支持CustomModelData功能.  
#### 如何使用粘液科技材质包?  
你可以在使用由xMikux制作的材质包,可在[此处](https://github.com/xMikux/Slimefun-Resourcepack/releases)下载(支持1.14-1.20+)


#### 获取材质后,你需要做的事情有:  获取材质后,你需要做的事情有:  
**1.在服务器内进行配置  **
将材质包内提供的 item-models.yml 文件直接替换位于服务端根目录/plugins/Slimefun/item-models.yml 文件并重启服务器.  
**2.将材质包提供给玩家  **
Ⅰ.让玩家手动安装材质包  
Ⅱ.通过服务端自带的材质包功能向玩家推送材质包  
使用 Ⅱ 方法,你需要将材质包上传到可以进行直链下载的地方,如:  
- [**Gitee**](https://www.gitee.com): 通过 Gitee 的发行版/储存库文件,国内访问速度快(需要认证)  
- [**Github**](https://www.github.com): 通过 Github 的Releases/储存库文件,国内访问情况差(不推荐)  
- [**Gitlab**](https://www.gitlab.com): 通过 Gitlab 的Releases/储存库文件,国内访问情况一般  
- [**CloudFlare Pages**](https://www.gitlab.com): 较为繁琐,方法自行研究,仅提供思路,国内访问情况良好,但文件最大不能超过20MB  
- [**MCPacks**](https://www.mcpacks.net): 将材质包上传到 MCPacks,国内访问情况差  
- **自建服务器**: 推荐,但相比以上方法对技术有一定要求   

获取材质包直链后,请在在服务端根目录/server.properties文件中修改

| server.properties  |  注释 |
| ------------ | ------------ |
|  resource-pack= | 指向一个资源包的URL,若含":"字符,需要在其前加上反斜线(\),如`https\://gitee.com/mcskycraft/skycraft/releases/download/Box/%E8%A2%AB%E5%9B%9A%E7%A6%81%E7%9A%84%E4%B8%96%E7%95%8C-%E6%9D%90%E8%B4%A8%E5%8C%85v1.zip` 需要直链下载,不能使用例如百度网盘的链接  |
|  resource-pack-id= | 可选,指定材质包的UUID,无特殊需求可不填  |
|  resource-pack-sha1= | 可选,指定材质包的SHA1值,便于服务器与客户端校验材质包,无特殊需求可不填  |
|  resource-pack-promot= | 可选,可在加入服务器询问玩家是否下载材质包时向玩家发送一段信息(JSON文本),对初次进服的留存率有较大帮助  |
|  require-resource-pack= | true/false,可选,是否强制玩家加载材质包,若强制要求,若玩家选择拒绝则会将玩家踢出服务器,对使用Geyser加入服务器的基岩版玩家无效  |


对于**较低版本**,可考虑使用: [TResources插件](https://www.mcbbs.net/thread-650844-1-1.html)(兼容全版本),可提供强制使用玩家使用材质包(可选,对使用Geyser加入服务器的基岩版玩家无效),支持多材质包,自定义权限,支持材质包切换等功能,但对于**1.19及以上版本**,请直接在Server.properties中进行修改,高版本Server.properties已包含TResources插件的功能.

> 由于 Gitee 政策性调整,不建议将材质包上传至 Gitee(可能需要认证),建议采用其他渠道或自建服务器

**3.为基岩版玩家提供材质包支持  **
如果你使用了 Geyser 插件使服务器兼容基岩版,可选择下载[Geyser-Slimefun 适配材质](https://github.com/SofiaRedmond/Slimefun-Geyser/).
1. 下载[ SlimefunGeyser-1.2.0.jar](https://github.com/SofiaRedmond/Slimefun-Geyser/releases " SlimefunGeyser-1.2.0.jar")文件
2. 把SlimefunGeyser-1.2.0.jar放到Geyser配置文件夹中的extension文件夹中
3. 下载[基岩版材质包](https://www.dropbox.com/s/3a92in5cba38m9y/sf%20%281%29%20%281%29.mcpack?dl=1)
4. 把mcpack材质包放到Geyser配置文件夹中的packs文件夹中


### | 禁用(或部分禁用)粘液科技物品

打开位于服务端根目录/plugins/Slimefun/Items.yml 文件,可以看到粘液科技的所有物品,可以在这里可以选择对物品进行的各种功能

        XXXX_XXX:
        其中的XXXX_XXX为粘液科技物品名称,如果找不到某个物品的英文名,可在游戏中手持该物品并输入/sf id查看该物品的英文名
        enabled: true
        将true改为false可以禁用该粘液科技物品的所有选项
        can-be-used-in-workbenchs: true
        该物品是否可以在工作台中参与合成
        hide-in-guide: false
        该物品是否在粘液科技指南中隐藏
        allow-enchanting: true
        该物品是否被允许进行附魔
        allow-disenchanting: true
        该物品是否被允许进行驱魔
        required-permission: ' '
        使用该物品所需的权限
        wiki:
        粘液科技物品的wiki界面

打开位于服务端根目录/plugins/Slimefun/world-settings 文件夹,你可以在这里看到服务端所加载的所有世界,在这里可以调整某物品在某世界的禁用选项,若在 A 世界禁用 B 物品,则在 A 世界使用 B 物品时会收到一条警告信息并禁止使用  
打开位于服务端根目录/plugins/Slimefun/world-settings/world.yml 文件  
第 8 行的 enabled: false 代表禁用该世界的所有粘液科技物品

### | 限制附魔机所能附魔的最大等级

部分服务器可能会遇到以下问题:  
在服务器中后期,部分玩家拥有了极其强力的装备,查看玩家的装备结果拥有几百级的附魔,这便是通过粘液科技实现的,我们可以在位于服务端根目录/plugins/Slimefun/Items.yml 文件进行修改  
使用查找功能搜索 AUTO_ENCHANTER  
找到该设置项  
enchant-level-limit: 0  
将 0 修改为 6,即代表附魔机所能附魔的最高等级上限为 6,重启服务器即可

### | 安装粘液科技附属插件

粘液科技的玩法不仅有本体所提供的玩法,还有超多的扩展组件来扩展粘液科技的功能,我们可以安装扩展组件来丰富粘液科技的玩法.  
Tips:部分粘液科技附属插件可能存在某些刷物品 Bug,请谨慎使用  
安装粘液科技附属插件的方法很简单,只需将插件放入位于服务端根目录/plugins 文件夹中重启服务器即可  
如果你使用了[SlimefunGuguProject(粘液科技简中汉化组)](https://github.com/SlimefunGuguProject)提供的中文版附属插件,绝大多数情况下还需要安装[GuizhanLibPlugin](https://builds.guizhanss.cn/ybw0014/GuizhanLibPlugin/master),使用GuizhanLibPlugin与中文版附属还可实现附属插件自动更新  
[官方粘液科技附属插件地址](镜像)(https://kkgithub.com/https://github.com//Slimefun/Slimefun4/wiki/addons) [官方粘液科技附属插件地址](https://kkgithub.com/https://github.com//Slimefun/Slimefun4/wiki/addons)  
[中文粘液科技附属列表](/slimefun/addons)提供了由 SlimefunGuguProject 中文汉化组整合的大部分粘液科技附属插件的介绍及汉化下载地址,如果需要其他汉化,可在 MCBBS 查找或前往附属的 Fork 界面寻找.  

#### 部分知名附属介绍:  

<table>
    <tr>
        <td>ExtioGarden - 异域花园</td>
        <td>提供了各种各样额外的植物与蔬果,各种矿物的魔法植物,你可以使用异域花园的植物做出各种各样的食物,如汉堡包,果汁等</td>
    </tr>
    <tr>
        <td>LiteXpansion - 工业</td>
        <td>向粘液科技中加入了各种额外的机器,并且复原了部分工业时代2的机器,如废料,UU物质,回收机,铱等物品/机器 </td>
    </tr>
    <tr>
        <td>SlimeTinker - 粘液匠魂</td>
        <td>极大程度地复刻了模组 - 匠魂III(即1.16.5版本匠魂)的各种功能,如冶炼炉,工具组装台与各种部件等,并且还原了工具经验,可以将工具升级以获得额外的强化槽 </td>
    </tr>
    <tr>
        <td>FluffyMachines - 蓬松机器</td>
        <td>为粘液科技添加了各种自动化机器,升级的粘液工具,以及各种具有特色的物品,还有超大的物品储存机器</td>
    </tr>
    <tr>
        <td>ClayTech - 粘土科技 [ 国创 ]</td>
        <td>为粘液科技添加了各种物品与机器,更重要的是添加了两个新的星球——月球和火星,同时提供了一些具有原版扩展功能的物品 </td>
    </tr>
    <tr>
        <td>EquivalencyTech - 等价交换科技</td>
        <td>如同等价交换模组一样,向Minecraft中新增了EMC值的设定,可以将物品转换为EMC值同时可以将用MEC值获得物品</td>
    </tr>
    <tr>
        <td>LuckBlocks - 幸运方块</td>
        <td>向粘液科技中添加了四种不同的幸运方块,破坏幸运方块会发生一些随机的事件,是好事,也有可能是坏事?</td>
    </tr>
    <tr>
        <td>FinalTech - 乱序技艺</td>
        <td>它包括新的电力系统、新的货运系统以及目前的一些特殊机器和物品</td>
    </tr>
    <tr>
        <td>Network - 网络</td>
        <td>类AE2模组的大型存储系统,推荐添加</td>
    </tr>
    <tr>
        <td>InfinityExpansion - 无尽科技</td>
        <td>根据无尽贪婪模组制作的粘液科技附属插件,可大大提高粘液科技游戏体验</td>
    </tr>
</table>

> 注意: Mojang 在 1.20.3 前的某次更新中移除了附魔相关的注册方法,目前 LiteXpansion 与 FluffyMachines 暂不适配1.20.3/1.20.4版本,请等待后续更新.

#### **GuizhanLibPlugin 附属插件自动更新**
使用中文版附属插件并且安装GuizhanLibPlugin会默认开启自动更新,可在每个附属插件的config.yml中选择关闭自动更新,也可在GuizhanLibPlugin的配置文件中关闭所有插件的自动更新.  
若无法自动更新,可在配置文件中将`location: 改为 CN` 使用国内CDN.  
>自动更新后文件名保持不变,可使用`/sf versions`检测附属插件实际版本  

### | 粘液科技变量

在部分服务器可能会需要用到的粘液科技的变量  
%slimefun_researches_total_researches%: 粘液科技研究总数  
%slimefun_researches_total_researches_unlocked%: 已解锁的粘液科技研究数量  
%slimefun_researches_total_xp_levels_spent%: 解锁粘液科技研究所花费的等级  
%slimefun_researches_percentage_researches_unlocked%: 解锁粘液科技研究的进度  
%slimefun_language%: 玩家所使用的粘液科技的语言

### | 恢复玩家的背包

部分玩家的背包可能神秘失踪,这时大部分玩家都会选择向服主所要补偿,但你可以使用/sf backpack ID 编号 来找回玩家的背包  
注意:在离线模式服务器中,玩家的 UUID 有可能会更换,这时无法找回.

### | 与粘液科技冲突的插件(及部分解决方案)

Shopkeepers - 村民商店  
粘液科技物品可能无法与村民进行交易

MineTinker - 插件匠魂(与 SlimeTinker 不同)  
当粘液科技工具放到铁砧中添加模块时可无限刷模块
解决方案: 建议使用SlimeTinker插件

Tweakin - 生存扩展  
开了附魔台保留青金石,附魔机和祛魔机就会变成附魔台无法使用  
解决方案: 关闭此功能

一切具有掉落物全息显示的插件  
当开启掉落物全息显示时会导致粘液科技远古祭坛无法使用

Residence - 领地  
默认圈地工具会导致粘液科技附属异域花园中的拐棍无法使用  
解决方案: 在领地配置中更换圈地工具  
部分粘液科技机器不受领地保护

你可以在[本贴](https://www.mcbbs.net/forum.php?mod=viewthread&tid=1244276)回复来提供与其他插件冲突及解决方案  
还可以安装[SlimeGlue](https://github.com/Xzavier0722/SlimeGlue)修复与 KingdomsX,Magic,Quickshop-Reremake,LockettePro 等插件的兼容问题,也可在[此处](https://github.com/Xzavier0722/SlimeGlue/issues)提出问题.

### | 移除幽灵方块

如果在一个位置放置方块却无法放置,有极大可能此处出现了幽灵方块  
如何解决幽灵方块?  
方法 1: 输入/sf debug_fish 获取调试棒,手持调试棒使用 Shift+右键幽灵方块所在位置将生成一个头颅,并使用 Shift+左键即可移除幽灵方块  
方法 2:使用创世神,在幽灵方块上使用//set 任意方块,并再次使用//set 0 即可  

### | 常见问题

Q:为什么我的玩家可以打开粘液科技手册的作弊模式?  
A:可能误给予了 slimefun.cheat.items 权限,将此权限设置为 false 即可解决


Q:大量粘液机器导致卡服,如何限制玩家的机器数量?  
可使用[HeadLimit](https://hub.fastgit.xyz/SlimefunGuguProject/HeadLimiter/)限制粘液各种类型机器的区块限制数量

使用[CustomChunkLimits](https://www.mcbbs.net/thread-984759-1-1.html)插件限制每个区块内某一种机器的数量

Q:在没有管理权限的情况下,玩家如何自行移除幽灵方块?  
A:使用粘液科技自带的机器人,使机器人走到幽灵方块所在位置并拆除即可


Q:如何切换使用游戏币而不是经验解锁研究?  
A:config.yml 中`use-money-unlock: false`


Q:我使用了 XXX 插件的领地/地皮/空岛,但其他玩家可以打开我领地/地皮/空岛的粘液科技机器?  
A:由于部分插件的保护仅针对于原版物品有效,你可以联系插件开发者来获取帮助,也可以通过禁止玩家进入你的领地/地皮/空岛来保护你的机器.  
对于 Bentobox(BSkyBlock/AOneBlock/Acidisland)插件:  
可使用[BSkyBlcokEX](https://www.mcbbs.net/thread-1198180-1-1.html)插件来保护玩家的空岛  
对于 ASkyBlock 插件:  
可使用[ASkyBlockEX](https://www.mcbbs.net/thread-635490-1-1.html)插件来保护玩家的空岛  
对于 AcidIsland 插件:  
可使用[AcidislandEX](https://www.mcbbs.net/thread-818473-1-1.html)插件来保护玩家的海岛  
对于 Residence 插件:  
粘液科技中文版内置了对于 Residence 的保护

Q:遇到机器变方块怎么办?  
A:
**万能解决方案:**  
使用粘液科技中文版,并选择使用数据库储存可解决此问题  
若使用其他版本,请参考以下答案:  
**对于头颅类型机器变方块:**  
建议升级粘液科技至最新版本并安装[TitleDataServer](https://www.spigotmc.org/resources/tiledatasaver.85624/)插件,此插件可保留头颅类型的机器的 NBT 数据,可有效缓解头颅类型机器变方块.

**对于粘液科技所有类型变方块:**  
可使用 [基岩科技 - 机器保护](https://github.com/CTimet/BedrockTechnology/releases) 插件:  
使用注册棒将机器注册,后续变方块可使用恢复棒将机器恢复

Q:玩家重置岛屿后原岛屿位置存在大量的全息显示怎么办?  
A:Bentobox 可安装[此插件](https://www.mcbbs.net/thread-1262424-1-1.html)

Q:我更换了周目,但粘液数据未清空怎么办?  
A:若使用本地储存(默认)粘液科技的数据储存在服务端根目录/data-stroage 文件夹中,删除此文件夹即可,若使用数据库,清除数据库数据即可

### | 魔改粘液科技插件(及其附属)中的内容

#### **直接修改源代码**

大部分粘液科技插件都是开源的,你可以自行修改,但对技术要求较高

#### **使用[SlimefunRecipe(SFR)](https://www.mcbbs.net/thread-1442362-1-1.html "SlimefunRecipe(SFR)")插件修改粘液合成表**
- 手持物品使用`/sfr edit`自定义所有粘液科技物品的合成配方(全GUI操作)
- 可修改所有粘液科技物品的合成机器
- 可以为指定机器添加自定义配方
- 可使用`/sfr view`预览配方
- 支持多种配方格式
- 兼容DynaTech,ExoticGarden,FlowerPower,FluffyMachines,InfinityExpansion,SoulJars,TranscEndence等粘液附属

#### **使用[SlimeCustomizer](https://slimefun-addons-wiki.guizhanss.cn/slime-customizer/)插件添加粘液机器/物品及各种配方**
通过SlimeCustomizer,你无需学习编程即可自定义各种粘液科技机器及物品,目前已有多个由SlimeCustomizer制成的附属模组,如海曼科技并取得了不错的效果

你可在[粘液科技附属 中文Wiki](https://slimefun-addons-wiki.guizhanss.cn/slime-customizer/)中了解学习SlimeCustomizer的使用方法

此外[粘液科技附属插件列表](https://mc.skycraft.cn/slimefun/addons)中也收集了一些通过SlimeCustomizer制成的附属模组,可自行下载体验.

#### **LiteXpansion所提供的削弱其他附属模组发电机功能**


为了平衡不同附属插件的电力消耗,LiteXpansion在配置文件中提供了`nerf-other-addons`选项,启用后会削弱其他附属中的发电机（下方已列出）,禁用则会使本附属插件中机器电力消耗翻倍 (默认: true)

- 粘液科技 - 充能太阳能板
- 无尽科技 - 所有发电机
- 战争工艺 - 元素发电机
- 星际 - 聚变反应堆
- 至尊研究院2.0 - 所有发电机

#### 对不同附属的配置文件进行仔细修改
部分附属如SlimeTinker,CrystamaeHistoria等的配置文件都有可完全自定义的选项,作为服主,你更需要的是在其中进行修改而不是**开箱即用**  
<!-- tabs:start -->
#### **引用及转载说明**

本界面及下属界面内容(/slimefun/\*)除特别说明外未经授权严禁以任何形式引用至任何网站  
部分内容参考自: MinecraftWiki,Slimefun Wiki,Slimefun-Geyser,SlimefunRecipe,SlimefunGuguProject/LiteXpansion
<!-- tabs:end -->
