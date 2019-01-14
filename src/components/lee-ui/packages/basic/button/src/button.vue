<template>
  <button
    class="lee-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'lee-button--' + type : '',
      buttonSize ? 'lee-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="inline-block f12 w14 h14 lee-icon-loading" v-if="loading">
      <svg class="w100p h100p icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 576H832c-35.328 0-64-28.672-64-64s28.672-64 64-64h128c35.328 0 64 28.672 64 64s-28.672 64-64 64zM783.552 331.008c-25.024 24.96-65.536 24.96-90.56 0-24.96-25.024-24.96-65.536 0-90.56l90.56-90.496c24.96-24.96 65.472-24.96 90.496 0 24.96 25.024 24.96 65.536 0 90.496l-90.496 90.56zM512 1024c-35.328 0-64-28.608-64-64V832c0-35.328 28.672-64 64-64s64 28.672 64 64v128c0 35.392-28.672 64-64 64z m0-768c-35.328 0-64-28.608-64-64V64c0-35.392 28.672-64 64-64s64 28.608 64 64v128c0 35.392-28.672 64-64 64zM240.448 874.048c-24.96 24.96-65.472 24.96-90.496 0-24.96-24.96-24.96-65.472 0-90.496l90.496-90.496c25.024-25.024 65.536-25.024 90.56 0 24.96 24.96 24.96 65.472 0 90.496l-90.56 90.496z m0-543.04l-90.496-90.56c-24.96-24.96-24.96-65.472 0-90.496 25.024-24.96 65.536-24.96 90.496 0l90.56 90.496c24.96 25.024 24.96 65.536 0 90.56-25.024 24.96-65.536 24.96-90.56 0zM256 512c0 35.328-28.672 64-64 64H64c-35.328 0-64-28.672-64-64s28.672-64 64-64h128c35.328 0 64 28.672 64 64z m527.552 181.056l90.496 90.496c24.96 25.024 24.96 65.536 0 90.496-25.024 24.96-65.536 24.96-90.496 0l-90.56-90.496c-24.96-25.024-24.96-65.536 0-90.496 25.024-25.024 65.536-25.024 90.56 0z" p-id="6871"></path></svg>
    </i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>

  </button>
</template>
<script>
  export default {
    name: 'LeeButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    computed: {
      buttonSize() {
        return this.size;
      },
      buttonDisabled() {
        return this.disabled;
      }
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
