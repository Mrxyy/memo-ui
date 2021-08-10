export const demo1 = `
  <template>
    <div class="demo">
      <moMenu :value="data" :activeItem="[1,0]"></moMenu>
    </div>
  </template>
  <script setup lang="ts">
    import {ref} from "vue"
    import moMenu from "@components/menu/leftListMenu.vue";
    const data = ref([{
      id: "memo-0",
      name: "memo",
      expand: true,
      children: [{
        id: "memo-0-1",
        name: "memo-0-1",
        children: [{
          id: "memo-0-1-1",
          name: "memo-0-1-1"
        }]
      }]
      }, {
        name: "memo-1",
        children: [{
          name: "memo-1-0"
        }]
      }, {
        name: "memo-2",
        children: [{
          id: "memo-2-2",
          name: "memo-2-2"
        }]
      }, {
        name: "memo-3"
      }])
  </script>
`;

export const path = "../../doc";
