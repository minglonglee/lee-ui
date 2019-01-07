<template>
	<div class="bg-color-white pd-tb20 pd-lr20 basic-button">
    <div class="mg-b20">
      <lee-button>默认按钮</lee-button>
      <lee-button type="primary">主要按钮</lee-button>
      <lee-button type="success">成功按钮</lee-button>
      <lee-button type="info">信息按钮</lee-button>
      <lee-button type="warning">警告按钮</lee-button>
      <lee-button type="danger">危险按钮</lee-button>
    </div>

    <div class="mg-b20">
      <lee-button plain>朴素按钮</lee-button>
      <lee-button type="primary" plain>主要按钮</lee-button>
      <lee-button type="success" plain>成功按钮</lee-button>
      <lee-button type="info" plain>信息按钮</lee-button>
      <lee-button type="warning" plain>警告按钮</lee-button>
      <lee-button type="danger" plain>危险按钮</lee-button>
    </div>

    <div class="mg-b20">
      <lee-button round>圆角按钮</lee-button>
      <lee-button type="primary" round>主要按钮</lee-button>
      <lee-button type="success" round>成功按钮</lee-button>
      <lee-button type="info" round>信息按钮</lee-button>
      <lee-button type="warning" round>警告按钮</lee-button>
      <lee-button type="danger" round>危险按钮</lee-button>
    </div>

    <div class="mg-b20">
      <lee-button type="text-primary">文字按钮</lee-button>
      <lee-button type="text-success" disabled>文字按钮</lee-button>
      <lee-button type="text-info" disabled>文字按钮</lee-button>
      <lee-button type="text-warning" disabled>文字按钮</lee-button>
      <lee-button type="text-danger" disabled>文字按钮</lee-button>
    </div>

    <div class="mg-b20">
      <lee-button type="primary" icon="el-icon-edit"></lee-button>
      <lee-button type="primary" icon="el-icon-share"></lee-button>
      <lee-button type="primary" icon="el-icon-delete"></lee-button>
      <lee-button type="primary" icon="el-icon-search">搜索</lee-button>
      <lee-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></lee-button>
    </div>

    <div class="mg-b20">
      <lee-button type="primary" :loading="true">加载中</lee-button>
    </div>

    <div class="mg-b20">
      <lee-button>默认按钮</lee-button>
      <lee-button size="medium">中等按钮</lee-button>
      <lee-button size="small">小型按钮</lee-button>
      <lee-button size="mini">超小按钮</lee-button>
    </div>
    <div class="mg-b20">
      <lee-button round>默认按钮</lee-button>
      <lee-button size="medium" round>中等按钮</lee-button>
      <lee-button size="small" round>小型按钮</lee-button>
      <lee-button size="mini" round>超小按钮</lee-button>
    </div>
  </div>
</template>

<script>
	export default {
		name: "basic-button"
	}
</script>
