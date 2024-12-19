<template>
  <q-toolbar class="bg-primary text-white">
    <q-toolbar-title> 字級 </q-toolbar-title>
  </q-toolbar>

  <q-separator />

  <div class="fontLevel">
    <div v-for="item in textStyleList" :key="item.id">
      <div class="fontLevel-copyText">
        <h1 :style="item.span">{{ item.title }}</h1>
        <span>{{ item.span }}</span>

        <div class="q-mt-md">
          <q-btn
            outline
            rounded
            color="purple"
            label="複製 class name"
            class="q-mr-md"
            @click="copyClassNameText(item)"
          >
            <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="textSize-16">
              <strong>{{ item.textClassName }}</strong>
            </q-tooltip>
          </q-btn>

          <q-btn outline rounded color="brown" label="複製原始樣式" @click="copyOriginText(item)">
            <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="textSize-16">
              <strong>{{ item.span }}</strong>
            </q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ITextStyle } from './type';
import { useCopy } from '../Composable/useCopy';

const textStyleList = ref<ITextStyle[]>([
  {
    id: 1,
    title: 'This is Heading 1 Text. 這是 H1 文字',
    span: 'margin: 0; font-size: 32px; line-height: 3rem; font-weight: 600;',
    textClassName: 'textSize-h1',
  },
  {
    id: 2,
    title: 'This is Heading 2 Text. 這是 H2 文字',
    span: 'margin: 0; font-size: 28px; line-height: 42px; font-weight: 600;',
    textClassName: 'textSize-h2',
  },
  {
    id: 3,
    title: 'This is Heading 3 Text. 這是 H3 文字',
    span: 'margin: 0; font-size: 24px; line-height: 36px; font-weight: 600;',
    textClassName: 'textSize-h3',
  },
  {
    id: 4,
    title: 'This is Heading 4 Text. 這是 H4 文字',
    span: 'margin: 0; font-size: 22px; line-height: 33px; font-weight: 600;',
    textClassName: 'textSize-h4',
  },
  {
    id: 5,
    title: 'This is Heading 5 Text. 這是 H5 文字',
    span: 'margin: 0; font-size: 20px; line-height: 30px; font-weight: 600;',
    textClassName: 'textSize-h5',
  },
  {
    id: 6,
    title: 'This is Heading 6 Text. 這是 H6 文字',
    span: 'margin: 0; font-size: 18px; line-height: 27px; font-weight: 600;',
    textClassName: 'textSize-h6',
  },
  {
    id: 7,
    title: 'This is Paragraph Text. 這是一般文字',
    span: 'margin: 0; font-size: 16px; line-height: 22px; font-weight: 600;',
    textClassName: 'textSize-16',
  },
  {
    id: 8,
    title: 'This is Small Text. 這是小字',
    span: 'margin: 0; font-size: 14px; line-height: 20px; font-weight: 600;',
    textClassName: 'textSize-14',
  },
  {
    id: 9,
    title: 'This is Caption Text. 這是說明文字',
    span: 'margin: 0; font-size: 12px; line-height: 18px; font-weight: 600;',
    textClassName: 'textSize-12',
  },
  {
    id: 10,
    title: 'This is Link Text. 這是連結文字 ( hover 效果 : 加底線)',
    span: 'margin: 0; font-size: 16px; line-height: 22px; font-weight: 600; color: #FC7B66;',
    textClassName: 'textSize-link',
  },
]);

const { copyText } = useCopy();

const copyClassNameText = (item: ITextStyle) => {
  copyText(item.textClassName, `${item.textClassName}`);
};

const copyOriginText = (item: ITextStyle) => {
  copyText(item.span, `${item.span}`);
};
</script>

<style scoped lang="scss">
.fontLevel {
  &-copyText {
    padding: 12px;
    margin-bottom: 12px;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
      transition: 0.3s;
    }
  }
}
</style>
