---
title: 更新日志
meta:
  - name: description
  - content: 更新日志
---

# 更新日志

<div class="demo">
    <moListGroup :data="data1" :showCkecked="false" listItemClass="list-decimal">
      <template #default="{value}">
        <h2>{{value.text}}</h2>
      </template>
      <template #operation="{value}">
        <moTip :tipText="value.text" dirrection="left" class="!absolute right-4" >
          <moButton
                  size="small"
                  type="link"
                  color="primary"
                >
                <a :href="`https://github.com/Mrxyy/memo-ui/commit/${value.commitID}`" target="_blank">进入</a>
          </moButton>
        </moTip>
      </template>
      <template #detailsContent="{value}">
        <div>
          <p class="text-lg text-primary">description:</p>
          <div class="pl-4 leading-7 py-2">
            <li v-for="v in value.description.split(',')">{{v}}</li>
          </div>
        </div>
      </template>
    </moListGroup>
</div>

<script setup lang="ts">
    import moListGroup from "@components/list-group/index.vue"
    import moButton from "@components/buttons/index.vue"
    import moTip from "@components/tooltips/index.vue"
    const data1 =[{
      text: "2022/2/25",
      commitID: "86152ae225c8595954e9b446ce74c072dd9ce235",
      description:`
        增加自动获取焦点的toasts,
        增加网站日志功能
      `,
      ckeackAble: true,
      isExpand: true,
      hot:200
    }]
</script>
