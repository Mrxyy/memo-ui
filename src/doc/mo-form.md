---
title: memo-form
meta:
  - name: description
  - content: 表单
---

# 代码编辑
> 使用memo提供丰富的表单功能。例如：input、checkbox、radios、switch、select。
<script setup lang="ts">
import moForm from "../components/form/form.vue";
import moInput from "../components/form/input.vue";
import moControl from "../components/form/control.vue";
import moSelect from "../components/form/select.vue";
import moButton from "../components/buttons/index.vue"
import moRadios from "../components/form/radios.vue"
import moCheckbox from "../components/form/checkbox.vue"
import moSwitch from "../components/form/switch.vue"
const al = ()=>alert("memo")
const switchData = {
  disable:{value:"关闭",label:"关闭"},
  enable:{value:"开启",label:"开启"}
}
</script>

## 默认显示
<div class="demo">
  <mo-form method="get" enctype="multipart/form-data">
    <moControl id="setp-1" label="name">
      <moInput width="100%" placeholder="memo-input" type="text" id="setp-1">
        <template  #start>
          <moButton color="primary" size="small" :round="false" class="whitespace-nowrap">www</moButton>
        </template>
        <template  #end>
          <moButton color="secondary" size="small" :round="false" class="whitespace-nowrap">.com</moButton>
        </template>
      </moInput>
    </moControl>
    <moControl id="setp-2" mode="block" label="last name">
      <moInput width="100%" placeholder="memo-input" type="text" id="setp-2">
      </moInput>
    </moControl>
    <moControl id="setp-3" label="last name">
      <moSelect width="20%" id="setp-3"></moSelect>
    </moControl>
    <div>
      <moControl selfInline id="setp-4" label="数学">
        <moRadios class="mr-3" name="subject" width="20%" id="setp-4"></moRadios>
      </moControl>
      <moControl selfInline id="setp-4-1" label="英语">
        <moRadios width="20%"  name="subject"  id="setp-4-1"></moRadios>
      </moControl>
    </div>
    <div class="flex">
      <moControl id="setp-5" label="item-1">
        <moCheckbox class="mr-5" id="setp-5"></moCheckbox>
      </moControl>
      <moControl id="setp-6" label="item-2">
        <moCheckbox class="mr-5" id="setp-6"></moCheckbox>
      </moControl>
    </div>
      <moControl id="setp-6" label="item-2">
        <moSwitch :data="switchData" defaultStatus="disable" class="mr-5" id="setp-6"></moSwitch>
      </moControl>
  </mo-form>
</div>

## props:

| props | type | description | default |
| ----- | ---- | ----------- | ------- |

