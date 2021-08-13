export const demo1 = `
  <template>
    <div class="demo">
      <div class="grid grid-cols-4 justify-items-center">
        <moTip tipText="tooltips-left" dirrection="left">
          <div>tooltips</div>
        </moTip>
        <moTip tipText="tooltips-top" dirrection="top">
          <div>tooltips</div>
        </moTip>
        <moTip tipText="tooltips-bottom" dirrection="bottom">
          <div>tooltips</div>
        </moTip>
        <moTip tipText="tooltips-right" dirrection="right">
          <div>tooltips</div>
        </moTip>
      </div>
    </div>
  </template>
  <script setup lang="ts">
    import moTip from "@components/tooltips/index.vue"
  </script>
`;

export const demo2 = `
  <template>
    <div class="demo">
      <div class="grid grid-cols-4 justify-items-center">
        <moTip tipText="默认是block" dirrection="left" defaultshow>
          <div>默认是block</div>
        </moTip>
      </div>
    </div>
  </template>
  <script setup lang="ts">
    import moTip from "@components/tooltips/index.vue"
  </script>
`;

export const path = "../../doc";
