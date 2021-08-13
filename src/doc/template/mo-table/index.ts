export const demo1 = `<template>
  <div class="demo">
    <motable :field="field" :rowsData="rowsData">
    </motable>
  </div>
</template>
<script setup lang="ts">
  import motable from "@components/table/index.vue";

  const field = {
    name: {
    },
    age: {
    },
    sex: {}
  }

  const rowsData =  [{
    name: "xyy", age: 15, sex: "男"
  }, { name: "yang", age: 10, sex: "女" }]

</script>
`;

export const demo2 = `<template>
  <div class="demo">
    <motable :field="field" :rowsData="rowsData" mode="table">
  </motable>
  </div>
</template>
<script setup lang="ts">
import motable from "@components/table/index.vue";

const field = {
  name: {
  },
  age: {
  },
  sex: {}
}

const rowsData =  [{
  name: "xyy", age: 15, sex: "男"
}, { name: "yang", age: 10, sex: "女" }]

</script>
`;

export const demo3 = `<template>
  <div class="demo">
    <motable :field="field" :rowsData="rowsData" :firstOperation="true" :endOperation="true">
      <template #herder-first-operation={data}>
        <div><moCheckbox @change="a(data)"></moCheckbox></div>
      </template>
      <template #herder-end-operation>
        <div>操作</div>
      </template>
      <template #row-first-operation={value}>
        <moCheckbox :checked="value.checked" ></moCheckbox>
      </template>
      <template #row-end-operation={value}>
        <moTooltip :tipText="value.name">
          <moButton color="danger" size="small" type="link">删除</moButton>
        </moTooltip>
      </template>
    </motable>
  </div>
</template>
<script setup lang="ts">
import motable from "@components/table/index.vue";
import moCheckbox from "@components/form/checkbox.vue";
import moButton from "@components/buttons/index.vue";
import moTooltip from "@components/tooltips/index.vue";
const a = (data)=>{
  data.forEach(v => {
    v.checked = !v.checked;
  });
}

const field = {
  name: {
  },
  age: {
  },
  sex: {}
}

const rowsData =  [{
  name: "xyy", age: 15, sex: "男"
}, { name: "yang", age: 10, sex: "女" }]

</script>
`;

export const path = "../../doc";
