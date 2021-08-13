export const demo1 = `<template>
  <div class="demo">
    <moListGroup :data="data"  :showCkecked="true" >
      <template #detailsContent>
        <div>
          <p class="text-lg text-primary">description:</p>
          <div class="pl-4 leading-7 py-2">
            《王者荣耀》是腾讯第一5V5团队公平竞技手游，国民MOBA手游大作！5V5王者峡谷、公平对战、还原MOBA经典体验；契约之战、五军对决、边境突围等，带来花式作战乐趣！
          </div>
        </div>
      </template>
    </moListGroup>
  </div>
</template>
<script setup lang="ts">
    import moListGroup from "@components/list-group/index.vue"
    const data =[{
      text: "英雄联盟",
      ckeackAble: true,
      isExpand: true,
      hot:200
    }, {
      text: "王者荣耀",
      ckeackAble: true,
      isExpand: false,
      hot:500
    }]
</script>
`;

export const demo2 = `<template>
  <div class="demo">
    <moListGroup :data="data1" :showCkecked="false" listItemClass="list-decimal">
      <template #default="{value}">
        {{value.text}}(🔥 {{value.hot}})
      </template>
      <template #operation="{value}">
        <moTip :tipText="value.text" dirrection="left" class="!absolute right-4" >
          <moButton
                  size="small"
                  type="link"
                  color="primary"
                >
                进入
          </moButton>
        </moTip>
      </template>
      <template #detailsContent="{value}">
        <div>
          <p class="text-lg text-primary">description:</p>
          <div class="pl-4 leading-7 py-2">
            《{{value.text}}》是腾讯第一5V5团队公平竞技手游，国民MOBA手游大作！5V5王者峡谷、公平对战、还原MOBA经典体验；契约之战、五军对决、边境突围等，带来花式作战乐趣！
          </div>
        </div>
      </template>
    </moListGroup>
  </div>
</template>
<script setup lang="ts">
    import moListGroup from "@components/list-group/index.vue"
    import moButton from "@components/buttons/index.vue"
    import moTip from "@components/tooltips/index.vue"
    const data1 =[{
      text: "英雄联盟",
      ckeackAble: true,
      isExpand: true,
      hot:200
    }, {
      text: "王者荣耀",
      ckeackAble: true,
      isExpand: true,
      hot:500
    },{
      text: "英雄联盟",
      ckeackAble: true,
      isExpand: true,
      hot:200
    }, {
      text: "王者荣耀",
      ckeackAble: true,
      isExpand: true,
      hot:500
    },{
      text: "英雄联盟",
      ckeackAble: true,
      isExpand: true,
      hot:200
    }, {
      text: "王者荣耀",
      ckeackAble: true,
      isExpand: true,
      hot:500
    },{
      text: "英雄联盟",
      ckeackAble: true,
      isExpand: true,
      hot:200
    }, {
      text: "王者荣耀",
      ckeackAble: true,
      isExpand: true,
      hot:500
    },{
      text: "英雄联盟",
      ckeackAble: true,
      isExpand: true,
      hot:200
    }, {
      text: "王者荣耀",
      ckeackAble: true,
      isExpand: true,
      hot:500
    }]
</script>
`;
export const path = "../../doc";
