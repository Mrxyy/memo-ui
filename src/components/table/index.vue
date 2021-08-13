<template>
  <div :class="`mo-table ${mode}-mode table border-border`">
    <div class="table-column-group">
      <div
        v-if="firstOperation"
        class="clo-frst-operation"
      />
      <div
        v-for="v,i in field"
        :key="i"
        span="1"
        :class="`table-column clo-${i}`"
      />
      <div
        v-if="endOperation"
        class="clo-end-operation"
      />
    </div>
    <div
      :class="`mo-table-header table-header-group ${(mode === 'table') ? 'bg-primary bg-opacity-80 text-white' : '' } `"
    >
      <div class="table-row">
        <div
          v-if="firstOperation"
          scope="col"
          class="table-cell p-2 px-4 herder-first-operation"
        >
          <slot
            name="herder-first-operation"
            :data="data"
          />
        </div>

        <div
          v-for="column,i in field"
          :key="i"
          scope="col"
          class="table-cell p-2 px-4"
        >
          <slot
            :name="`herder-${i}`"
            :value="column"
            :index="i"
          >
            {{ i }}
          </slot>
        </div>
        <div
          v-if="endOperation"
          scope="col"
          class="table-cell p-2 px-4 herder-end-operation"
        >
          <slot
            name="herder-end-operation"
            :data="data"
          />
        </div>
      </div>
    </div>
    <div class="mo-table-body table-row-group">
      <template
        v-for="row,rowindex in data"
        :key="rowindex"
      >
        <div class="table-row">
          <div
            v-if="firstOperation"
            class="table-cell p-2 px-4 row-first-operation"
          >
            <slot
              name="row-first-operation"
              :value="row"
              :data="data"
              :rowIndex="rowindex"
            />
          </div>
          <div
            v-for="v,i in field"
            :key="i"
            class="table-cell p-2 px-4"
          >
            <slot
              :name="`row-${i}`"
              :value="row"
              :fieldValue="v"
              :data="data"
              :rowIndex="rowindex"
              :columnIndex="i"
            >
              {{ row[i] }}
            </slot>
          </div>
          <div
            v-if="endOperation"
            class="table-cell p-2 px-4 row-end-operation"
          >
            <slot
              name="row-end-operation"
              :value="row"
              :data="data"
              :rowIndex="rowindex"
            />
          </div>
        </div>
      </template>
    </div>
    <div
      v-if="footer"
      class="mo-table-footer table-footer-group"
    >
      <div class="table-row">
        <div
          v-if="firstOperation"
          class="table-cell p-2 px-4 footer-first-operation"
        >
          <slot
            name="footer-end-operation"
            :data="data"
          />
        </div>
        <div
          v-for="column,i in field"
          :key="i"
          scope="col"
          class="table-cell p-2 px-4"
        >
          <slot
            :name="`footer-${i}`"
            :value="column"
            :index="i"
          />
        </div>
        <div
          v-if="endOperation"
          class="table-cell p-2 px-4 footer-end-operation footer-end-operation"
        >
          <slot
            name="footer-end-operation"
            :data="data"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";

interface Props{
  field:{[key:string]:any}
  rowsData:any[]
  firstOperation?:boolean
  endOperation?:boolean
  footer:boolean
  mode?:"table"|"view"
}

const { rowsData } = withDefaults(defineProps<Props>(), {
  firstOperation: false,
  endOperation: false,
  footer: false,
  mode: "view"
});

const data = ref(rowsData);
</script>

<style lang="scss" scoped>
.mo-table {

  &.table-mode {
    border-width: 0.5px !important;

    .table-cell {
      border-width: 0.5px !important;

      @apply border-border;
    }

    @apply border-border;
  }

  @apply rounded;

  .table-header-group {

    .table-row {

      .table-cell {
        border-bottom-width: 1px;
        text-align: center;

        @apply border-border;
      }
    }
  }

  .table-row-group {

    .table-row {

      .table-cell {
        border-top-width: 1px;
        text-align: center;

        @apply border-border;
      }
    }
  }
}
</style>
