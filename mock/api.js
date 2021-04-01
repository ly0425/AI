import mockjs from 'mockjs';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

const db = {
  'document_tree': [{
    'nid': 96511,
    'title': 'AI文档中心',
    'view_node': '<a href="/vista_oa/1/?q=node/96511">document.json/96511 </a>',
    'weight': '0',
    'depth': '1',
    'nid_1': '',
    'body': '/vista_oa/1/files/usr/u1/banner-bg-odr-ai.png',
    'upload_fid': 'banner-bg-odr-ai.png',
    'children': [{
      'nid': 96519,
      'title': '经济运行分析',
      'view_node': '<a href="/vista_oa/1/?q=node/96519">document.json/96519 </a>',
      'weight': '-15',
      'depth': '2',
      'nid_1': 96511,
      'body': '',
      'children': [{
        'nid': 96528,
        'title': '优化算法-线性规划SDK文档',
        'view_node': '<a href="/vista_oa/1/?q=node/96528">document.json/96528 </a>',
        'weight': '-15',
        'depth': '3',
        'nid_1': 96519,
        'body': '',
      }, {
        'nid': 96524,
        'title': '收入，服务量异常值检测',
        'view_node': '<a href="/vista_oa/1/?q=node/96524">document.json/96524 </a>',
        'weight': '-14',
        'depth': '3',
        'nid_1': 96519,
        'body': `<p>基于各种维度，从经济环境，医院类型，科室特点，病种结构构建医院运营数据决策支持算法库，通过不同场景不同维度对医院的经验决策做支撑</p>n`,
      }, {
        'nid': 96529,
        'title': '科室收入相关性和服务量相关性',
        'view_node': '<a href="/vista_oa/1/?q=node/96529">document.json/96529 </a>',
        'weight': '-13',
        'depth': '3',
        'nid_1': 96519,
        'body': '',
      }, {
        'nid': 96523,
        'title': '服务量，成本和收入预测和全面预算',
        'view_node': '<a href="/vista_oa/1/?q=node/96523">document.json/96523 </a>',
        'weight': '-12',
        'depth': '3',
        'nid_1': 96519,
        'body': `<p>通过AI算法，基于历史数据，对医院诊疗项目进行全成本预算分析，包含收入预测和成本预测，使收入，成本这些事后指标可以提前展现在当下。</p>n`,
      }],
    },
      {
        'nid': 96514,
        'title': '运营管理术语标化',
        'view_node': '<a href="/vista_oa/1/?q=node/96514">document.json/96514 </a>',
        'weight': '-14',
        'depth': '2',
        'nid_1': 96511,
        'body': `<p>依据业务场景进行自然语言处理等机器学习处理算法的分析与计算的解决方案。<br />n建立医疗服务项目标化算法，基于文本相似度算法，使用同义词、近义词识别，提供短文本与医疗服务项目标准集之间的语义相似度计算能力，输出一个介于0到1之间的实数值即相似度，相似度越大，则代表语义相似程度相对越高。</p>`,
        'children': [{
          'nid': 96534,
          'title': '医疗服务项目标化接口文档',
          'view_node': '<a href="/vista_oa/1/?q=node/96534">document.json/96534 </a>',
          'weight': '-15',
          'depth': '3',
          'nid_1': 96514,
          'body': '',
        }, {
          'nid': 96516,
          'title': '耗材术语标化接口文档',
          'view_node': '<a href="/vista_oa/1/?q=node/96516">document.json/96516 </a>',
          'weight': '-14',
          'depth': '3',
          'nid_1': 96514,
          'body': `<h2><a name="_Toc65486892"></a><!-- [if !supportLists]--><span style="font-size: 16.0pt; mso-bidi-font-size: 12.0pt; line-height: 150%; font-family: 宋体; mso-ascii-font-family: Calibri; mso-hansi-font-family: Calibri; mso-bidi-font-family: Calibri; color: #323232;">术语标化的概念</span></h2>n<p class="MsoNormal"><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">术语标化系统负责将医院业务系统术语映射到指定的标准术语集，如：医院医疗服务项目到国家</span><span lang="EN-US" style="font-size: 12.0pt;">2012</span><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">版医疗服务项目，耗材和设备名到</span><span lang="EN-US" style="font-size: 12.0pt;">CFDA</span><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">物资编码。</span></p>n<p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>n<table class="MsoTableGrid" style="border-collapse: collapse; border: none; mso-border-alt: solid windowtext .5pt; mso-yfti-tbllook: 1184; mso-padding-alt: 0cm 5.4pt 0cm 5.4pt;" border="1" cellspacing="0" cellpadding="0">n<tbody>n<tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes; height: 29.55pt;">n<td style="width: 47.3pt; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 29.55pt;" valign="top" width="95">n<p class="MsoNormal" style="text-indent: 0cm; mso-char-indent-count: 0; line-height: 125%;"><span lang="EN-US" style="font-size: 12.0pt; line-height: 125%;">Type</span></p>n</td>n<td style="width: 139.15pt; border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 29.55pt;" valign="top" width="278">n<p class="MsoNormal" style="text-indent: 0cm; line-height: 125%;" align="left"><span style="font-size: 12.0pt; line-height: 125%; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">术语所属的类型</span></p>n</td>n<td style="width: 302.35pt; border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 29.55pt;" valign="top" width="605">n<p class="MsoNormal" style="text-indent: 0cm; mso-char-indent-count: 0; line-height: 125%;"><span style="font-size: 12.0pt; line-height: 125%; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">包含：医疗服务项目，耗材，设备，药品，疾病等</span></p>n</td>n</tr>n<tr style="mso-yfti-irow: 1; mso-yfti-lastrow: yes; height: 29.55pt;">n<td style="width: 47.3pt; border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 29.55pt;" valign="top" width="95">n<p class="MsoNormal" style="text-indent: 0cm; mso-char-indent-count: 0; line-height: 125%;"><span lang="EN-US" style="font-size: 12.0pt; line-height: 125%;">Version</span></p>n</td>n<td style="width: 139.15pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 29.55pt;" valign="top" width="278">n<p class="MsoNormal" style="text-indent: 0cm; mso-char-indent-count: 0; line-height: 125%;"><span style="font-size: 12.0pt; line-height: 125%; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">标准术语对应的版本名</span></p>n</td>n<td style="width: 302.35pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 29.55pt;" valign="top" width="605">n<p class="MsoNormal" style="text-indent: 0cm; mso-char-indent-count: 0; line-height: 125%;"><span style="font-size: 12.0pt; line-height: 125%; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">如：医疗服务项目</span><span lang="EN-US" style="font-size: 12.0pt; line-height: 125%; color: #4472c4; mso-themecolor: accent1;">2012</span><span style="font-size: 12.0pt; line-height: 125%; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">国家版，耗材</span><span lang="EN-US" style="font-size: 12.0pt; line-height: 125%; color: #4472c4; mso-themecolor: accent1;">2019</span><span style="font-size: 12.0pt; line-height: 125%; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">医保版</span></p>n</td>n</tr>n</tbody>n</table>n<p>&nbsp;</p>n<p class="MsoNormal"><span lang="EN-US" style="font-size: 12.0pt;">&nbsp;</span></p>n<p>&nbsp;</p>n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>`,
        }, {
          'nid': 96533,
          'title': '设备术语标化接口文档',
          'view_node': '<a href="/vista_oa/1/?q=node/96533">document.json/96533 </a>',
          'weight': '-13',
          'depth': '3',
          'nid_1': 96514,
          'body': '',
        }, {
          'nid': 96517,
          'title': '自定义标准接口文档',
          'view_node': '<a href="/vista_oa/1/?q=node/96517">document.json/96517 </a>',
          'weight': '0',
          'depth': '3',
          'nid_1': 96514,
          'body': `<p class="MsoNormal"><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">标化系统完整实现上分为以下几个步骤：</span></p>n<p class="MsoListParagraph" style="margin-left: 31.5pt; mso-para-margin-left: 1.0gd; text-indent: -21.0pt; mso-char-indent-count: 0; mso-list: l0 level1 lfo1;"><!-- [if !supportLists]--><span lang="EN-US" style="font-size: 12.0pt; mso-fareast-font-family: 'Times New Roman';"><span style="mso-list: Ignore;">1）<span style="font: 7.0pt 'Times New Roman';">&nbsp; </span></span></span><!--[endif]--><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">构建标准术语集：读取标准术语文件或者数据库表，进行标准术语的模型构建</span></p>n<p class="MsoListParagraph" style="margin-left: 31.5pt; mso-para-margin-left: 1.0gd; text-indent: -21.0pt; mso-char-indent-count: 0; mso-list: l0 level1 lfo1;"><!-- [if !supportLists]--><span lang="EN-US" style="font-size: 12.0pt; mso-fareast-font-family: 'Times New Roman';"><span style="mso-list: Ignore;">2）<span style="font: 7.0pt 'Times New Roman';">&nbsp; </span></span></span><!--[endif]--><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">增补术语别名：通过将人工整理的术语别名数据导入系统，增加到标化模型的术语知识库</span></p>n<p class="MsoListParagraph" style="margin-left: 31.5pt; mso-para-margin-left: 1.0gd; text-indent: -21.0pt; mso-char-indent-count: 0; mso-list: l0 level1 lfo1;"><!-- [if !supportLists]--><span lang="EN-US" style="font-size: 12.0pt; mso-fareast-font-family: 'Times New Roman';"><span style="mso-list: Ignore;">3）<span style="font: 7.0pt 'Times New Roman';">&nbsp; </span></span></span><!--[endif]--><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">术语标化：对业务术语按照</span><span lang="EN-US" style="font-size: 12.0pt;">type</span><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">和目标</span><span lang="EN-US" style="font-size: 12.0pt;">version</span><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">进行映射</span></p>n<p class="MsoListParagraph" style="margin-left: 31.5pt; mso-para-margin-left: 1.0gd; text-indent: -21.0pt; mso-char-indent-count: 0; mso-list: l0 level1 lfo1;"><!-- [if !supportLists]--><span lang="EN-US" style="font-size: 12.0pt; mso-fareast-font-family: 'Times New Roman';"><span style="mso-list: Ignore;">4）<span style="font: 7.0pt 'Times New Roman';">&nbsp; </span></span></span><!--[endif]--><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';">人工审核和反馈：将术语标化的结果进行分层审核，<em><span style="color: #4472c4; mso-themecolor: accent1;">例如匹配度大于</span></em></span><em><span lang="EN-US" style="font-size: 12.0pt; color: #4472c4; mso-themecolor: accent1;">0.9</span></em><em><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">的免检，</span></em><em><span lang="EN-US" style="font-size: 12.0pt; color: #4472c4; mso-themecolor: accent1;">0.7</span></em><em><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">到</span></em><em><span lang="EN-US" style="font-size: 12.0pt; color: #4472c4; mso-themecolor: accent1;">0.9</span></em><em><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">的粗申，</span></em><em><span lang="EN-US" style="font-size: 12.0pt; color: #4472c4; mso-themecolor: accent1;">0.5</span></em><em><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">到</span></em><em><span lang="EN-US" style="font-size: 12.0pt; color: #4472c4; mso-themecolor: accent1;">0.7</span></em><em><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">细申，</span></em><em><span lang="EN-US" style="font-size: 12.0pt; color: #4472c4; mso-themecolor: accent1;">0.5</span></em><em><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman'; color: #4472c4; mso-themecolor: accent1;">以下标化结果只做人工标化参考。</span></em></p>n<p class="MsoListParagraph" style="margin-left: 31.5pt; mso-para-margin-left: 1.0gd; text-indent: -21.0pt; mso-char-indent-count: 0; mso-list: l0 level1 lfo1;"><span style="font-size: 12.0pt; font-family: 宋体; mso-ascii-font-family: 'Times New Roman'; mso-hansi-font-family: 'Times New Roman';"><span style="font-family: Verdana, Arial, Helvetica, sans-serif;">5） </span>将人工对照形成的标化映射以增补知识的形式反馈给系统，形成正循环。</span></p>n<p class="MsoNormal" style="margin-left: 10.5pt; mso-para-margin-left: 1.0gd;"><span lang="EN-US">&nbsp;</span></p>`,
        }],
      },
      {
        'nid': 96520,
        'title': '医院管理运营知识图谱',
        'view_node': '<a href="/vista_oa/1/?q=node/96520">document.json/96520 </a>',
        'weight': '-13',
        'depth': '2',
        'nid_1': 96511,
        'body': '',
        'children': [{
          'nid': 96521,
          'title': '病种资源消耗知识图谱',
          'view_node': '<a href="/vista_oa/1/?q=node/96521">document.json/96521 </a>',
          'weight': '0',
          'depth': '3',
          'nid_1': 96520,
          'body': ' <p>构建医院财经域的病种和服务项目知识图谱</p>n ',
        }, {
          'nid': 96522,
          'title': '临床路径知识图谱',
          'view_node': '<a href="/vista_oa/1/?q=node/96522">document.json/96522 </a>',
          'weight': '0',
          'depth': '3',
          'nid_1': 96520,
          'body': `<p>基于临床路径规范，构建医院病种和服务项目的临床路径知识图谱，基于临床路径知识图谱可以辅导业务系统规范、经济的运行；智能指导医护人员规范操作，减少操作失误，提高医疗服务质量</p>`,
        }],
      }, {
        'nid': 96518,
        'title': '平台文档',
        'view_node': '<a href="/vista_oa/1/?q=node/96518">document.json/96518 </a>',
        'weight': '-12',
        'depth': '2',
        'nid_1': 96511,
        'body': '',
        'children': [{
          'nid': 96540,
          'title': '调用环境',
          'view_node': '<a href="/vista_oa/1/?q=node/96540">document.json/96540 </a>',
          'weight': '0',
          'depth': '3',
          'nid_1': 96518,
          'body': '',
        }],
      }, {
        'nid': 96513,
        'title': '基础算法库',
        'view_node': '<a href="/vista_oa/1/?q=node/96513">document.json/96513 </a>',
        'weight': '-10',
        'depth': '2',
        'nid_1': 96511,
        'body': '',
        'children': [{
          'nid': 96525,
          'title': '聚类算法SDK文档',
          'view_node': '<a href="/vista_oa/1/?q=node/96525">document.json/96525 </a>',
          'weight': '-13',
          'depth': '3',
          'nid_1': 96513,
          'body': '',
        }, {
          'nid': 96531,
          'title': '关联规则挖掘SDK文档',
          'view_node': '<a href="/vista_oa/1/?q=node/96531">document.json/96531 </a>',
          'weight': '-12',
          'depth': '3',
          'nid_1': 96513,
          'body': '',
        }, {
          'nid': 96530,
          'title': '相关性分析SDK文档',
          'view_node': '<a href="/vista_oa/1/?q=node/96530">document.json/96530 </a>',
          'weight': '-11',
          'depth': '3',
          'nid_1': 96513,
          'body': '',
        }, {
          'nid': 96526,
          'title': '机器学习算法库',
          'view_node': '<a href="/vista_oa/1/?q=node/96526">document.json/96526 </a>',
          'weight': '0',
          'depth': '3',
          'nid_1': 96513,
          'body': '',
        }, {
          'nid': 96527,
          'title': '中文分词和实体识别',
          'view_node': '<a href="/vista_oa/1/?q=node/96527">document.json/96527 </a>',
          'weight': '0',
          'depth': '3',
          'nid_1': 96513,
          'body': '',
        }],
      }],
  }],
};

function fakeList(count) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3],
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      subDescription: desc[i % 5],
      description:
        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

let sourceData;

function getFakeList(req, res) {
  const params = req.query;

  const count = params.count * 1 || 20;

  const result = fakeList(count);
  sourceData = result;
  return res.json(result);
}

function postFakeList(req, res) {
  const { /* url = '', */ body } = req;
  // const params = getUrlParams(url);
  const { method, id } = body;
  // const count = (params.count * 1) || 20;
  let result = sourceData;

  switch (method) {
    case 'delete':
      result = result.filter(item => item.id !== id);
      break;
    case 'update':
      result.forEach((item, i) => {
        if (item.id === id) {
          result[i] = Object.assign(item, body);
        }
      });
      break;
    case 'post':
      result.unshift({
        body,
        id: `fake-list-${result.length}`,
        createdAt: new Date().getTime(),
      });
      break;
    default:
      break;
  }

  return res.json(result);
}

const getNotice = [
  {
    id: 'xxx1',
    title: titles[0],
    logo: avatars[0],
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    updatedAt: new Date(),
    member: '科学搬砖组',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx2',
    title: titles[1],
    logo: avatars[1],
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    updatedAt: new Date('2017-07-24'),
    member: '全组都是吴彦祖',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx3',
    title: titles[2],
    logo: avatars[2],
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    updatedAt: new Date(),
    member: '中二少女团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx4',
    title: titles[3],
    logo: avatars[3],
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    updatedAt: new Date('2017-07-23'),
    member: '程序员日常',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx5',
    title: titles[4],
    logo: avatars[4],
    description: '凛冬将至',
    updatedAt: new Date('2017-07-23'),
    member: '高逼格设计天团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[5],
    logo: avatars[5],
    description: '生命就像一盒巧克力，结果往往出人意料',
    updatedAt: new Date('2017-07-23'),
    member: '骗你来学计算机',
    href: '',
    memberLink: '',
  },
];

const getActivities = [
  {
    id: 'trend-1',
    updatedAt: new Date(),
    user: {
      name: '曲丽丽',
      avatar: avatars2[0],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-2',
    updatedAt: new Date(),
    user: {
      name: '付小小',
      avatar: avatars2[1],
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-3',
    updatedAt: new Date(),
    user: {
      name: '林东东',
      avatar: avatars2[2],
    },
    group: {
      name: '中二少女团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-4',
    updatedAt: new Date(),
    user: {
      name: '周星星',
      avatar: avatars2[4],
    },
    project: {
      name: '5 月日常迭代',
      link: 'http://github.com/',
    },
    template: '将 @{project} 更新至已发布状态',
  },
  {
    id: 'trend-5',
    updatedAt: new Date(),
    user: {
      name: '朱偏右',
      avatar: avatars2[3],
    },
    project: {
      name: '工程效能',
      link: 'http://github.com/',
    },
    comment: {
      name: '留言',
      link: 'http://github.com/',
    },
    template: '在 @{project} 发布了 @{comment}',
  },
  {
    id: 'trend-6',
    updatedAt: new Date(),
    user: {
      name: '乐哥',
      avatar: avatars2[5],
    },
    group: {
      name: '程序员日常',
      link: 'http://github.com/',
    },
    project: {
      name: '品牌迭代',
      link: 'http://github.com/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
];

function getFakeCaptcha(req, res) {
  return res.json('captcha-xxx');
}

function index(req, res) {
  return res.json(db);
}

function detail(req, res) {
  const { id } = req.params;
  const path = `./document_json/${id}_.json`;
  const result = require(path);
  return res.json(result);
}

export default {
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  'POST /api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
  }),
  'GET /api/fake_list': getFakeList,
  'POST /api/fake_list': postFakeList,
  'GET /api/captcha': getFakeCaptcha,
  'GET /api/index': index,
  'GET /api/detail/:id': detail,
};
