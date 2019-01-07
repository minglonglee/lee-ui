<template>
  <div class="w100p h100p pos-fix pos-c z-1 app-wrap">
    <div class="w100p h100p pos-relative normal">
      <Header></Header>
      <Main></Main>
    </div>
  </div>
</template>

<script>
  import Header from '../pages/common/Header'
  import Main from '../pages/common/Main'
  export default {
    name: "index",
    components: {
      Header,
      Main
    }
  }
</script>
