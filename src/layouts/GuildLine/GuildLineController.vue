<template>
  <q-btn
    v-touch-pan.prevent.mouse="moveFab"
    :disable="draggingFab"
    class="guildLine"
    label="GuildLine"
    color="primary"
    unelevated
    rounded
    push
    :style="fabPosStyle"
    @click="fixed = !fixed"
  />
  <GuildLine v-model:fixed="fixed" />
</template>
<script lang="ts">
export default {
  name: 'GuildLineController',
};
</script>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import GuildLine from './GuildLine.vue';

const fixed = ref(false);
//控制GuildLine拖動
const fabPos = ref([20, 20]);
const draggingFab = ref(false);
const fabPosStyle = computed(() => {
  const left = fabPos.value[0] + 'px';
  const top = fabPos.value[1] + 'px';
  return {
    left,
    top,
    bottom: 'initial',
  };
});

onMounted(() => {
  const guildLine = document.querySelector('.guildLine');
  if (guildLine !== null) {
    fabPos.value[1] = window.innerHeight - guildLine.clientHeight - 20;
  }
});
const moveFab = (ev: TouchPanEvent) => {
  draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
  const delta = ev.delta as { x: number; y: number };
  fabPos.value = [fabPos.value[0] + delta.x, fabPos.value[1] + delta.y];
};

interface TouchPanEvent {
  evt?: Event;
  touch?: boolean;
  mouse?: boolean;
  position?: { top?: number | undefined; left?: number | undefined };
  direction?: 'up' | 'down' | 'left' | 'right';
  isFirst?: boolean;
  isFinal?: boolean;
  delta?: { x?: number | undefined; y?: number | undefined };
}
</script>

<style scoped lang="scss">
.guildLine {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
}
</style>
