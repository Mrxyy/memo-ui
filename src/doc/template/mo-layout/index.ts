export const demo1 = `
  <template>
    <div class="demo">
      <TSLR>
        <template #header>
          <nav class="nav bg-info h-full">
          </nav>
        </template>
        <template #side>
          <div class="side-container bg-danger h-full">
          </div>
        </template>
        <template #main>
          <div class="main-container bg-black h-full">
          </div>
        </template>
      </TSLR>
    </div>
  </template>
  <script setup lang="ts">
    import TSLR from "@components/layout/T-SL-R.vue";
  </script>
`;

export const path = "../../doc";
