<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu :sideMenuList="sideMenuList" :selectedKeys="selectedKeys"></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card id="introduction" title="介绍" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          随着互联网信息技术的迅猛发展，推荐系统帮助用户快速、精准地寻找所需和所感兴趣的物品，应对日益严重的信息过载的问题，从而在电子商务领域发挥越来越重要的作用，逐渐渗透到人们的衣食住行中。
          <br>
          <br>
          推荐系统中的音乐、商品、法规等物品和类目之间常常具有分层结构，每个物品从属于一个或多个类目，子类目又从属于父类目。例如苹果和玉米分别从属于水果和蔬菜类目，水果和蔬菜又同属于食物类目。而已有的推荐系统往往忽略了物品的这种分层性。为了针对具有这种特征的物品设计和实现推荐系统，本论文在工程中的两个实际场景更充分地挖掘物品的分层结构附加信息。首先对于用户未登录的场景，在用户输入物品序列后，为用户推荐相似的物品，而不考虑用户的偏好；其次对于用户已登录的场景，考虑用户的偏好，基于用户历史行为序列，为用户生成个性化的推荐列表。
          <br>
          <br>
        </a-card>
        <br>

        <a-card id="technology" title="技术" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          推荐系统采用浏览器服务器 (B/S) 架构实现，浏览器端通过API请求从服务器端获取数据，数据通过JSON字符串的格式传递。推荐系统的总体架构分为4层：应用层、服务层、算法层、存储层。
          <br>
          <br>
          服务器端分为存储层、服务层、算法层。存储层利用MySQL数据库存储数据，包括案例表、法规表、领域表、地区表等数据表。服务层利用Java语言和Spring、MyBatis框架编写，用于读取数据存储层并为浏览器端提供服务。算法层包括数据预处理、模型训练、生成推荐列表3个步骤，利用Python语言和Flask框架编写。
          <br>
          <br>
          浏览器端分为探索模块、搜索模块、推荐模块，其中由于法规具有树状结构，因此利用树形菜单展示，推荐结果需要进行排序，因此利用表格的形式展示。浏览器端使用HTML, CSS, JavaScript语言和Vue.js前端框架，以及AntDesign, ElementUI, Bootstrap UI框架编写。
        </a-card>
        <br>

        <a-card id="algorithm" title="模型" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          (1) 在相似物品推荐场景下，针对已有的属性图嵌入模型不能充分利用物品分层结构的问题，提出融合物品分层结构的属性图嵌入推荐(HAGE)模型。首先提出基于物品分层结构的属性图嵌入来挖掘相同类目下结点的相似性，先对每一个类目结点下的子结点构建图，然后利用每个类目所构建的图进行随机游走生成随机游走序列。其次提出融合用户行为序列中物品共现(co-accurrence)的相似性和同一类目下物品的相似性的方法，即通过共享两个 Skip-Gram 网络的参数进行交替优化，从而生成统一的物品嵌入。在亚马逊电商数据集上进行模型基准对比实验，验证了HAGE的有效性。
          <br>
          <br>
          (2) 在个性化推荐场景下，针对已有的交互图嵌入模型不能充分利用包含高阶交互的协同相似度的问题，提出融合协同相似性的交互图嵌入个性化推荐(CIGE)模型。首先在属性交互图中，引入基于属性的协同相似度，挖掘由同一离散属性连接的两个用户或两个物品之间的2阶邻居邻近度。其次对基于用户、物品、属性三种协同相似度，在Skip-Gram网络中引入1阶邻居信息和属性信息，同时挖掘交互图结点间的1阶直接邻近度和2到4阶的邻居邻近度。然后通过在损失函数中加权求和的方法，融合基于用户、物品、属性三种协同相似度。最后定义用户对物品的偏好计算公式，以及对冷启动物品的偏好计算公式。在亚马逊电商数据集上进行模型基准对比实验，验证了CIGE的有效性。
          <br>
          <br>
          (3) 在个性化推荐场景下，针对CIGE不能充分利用物品分层结构的问题，在CIGE的基础上提出融合物品分层结构的交互图嵌入个性化推荐(HIGE)模型。首先提出多层跳跃随机游走，通过在同一层次中结点的移动来挖掘用户行为序列中的物品的共现信息，通过在不同层次之间结点的跳跃来挖掘物品树形组织结构中的分层信息。然后将多层跳跃随机游走学习得到的物品嵌入向量视为一种物品的属性信息，通过与其他属性向量拼接结合到CIGE中。在亚马逊电商数据集上进行模型基准对比实验，验证了HIGE的有效性。
        </a-card>
        <br>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  components: { SideMenu },
  data () {
    return {
      sideMenuList: [
        { href: '#introduction', name: '介绍', type: 'user' },
        { href: '#technology', name: '技术', type: 'laptop' },
        { href: '#algorithm', name: '模型', type: 'notification' }
      ],
      selectedKeys: []
    }
  }
}
</script>

<style scoped>
</style>
