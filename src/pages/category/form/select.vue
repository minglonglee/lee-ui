<template>
	<div class="bg-color-white pd-tb20 pd-lr20 form-select">
    <div class="f18 h50 lh50"><span>select下拉选择框</span></div>
  </div>
</template>

<script>
	export default {
		name: "form-select",
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          },
          {
            value: '选项6',
            label: '黄金糕'
          },
          {
            value: '选项7',
            label: '双皮奶'
          },
          {
            value: '选项8',
            label: '蚵仔煎'
          },
          {
            value: '选项9',
            label: '龙须面'
          },
          {
            value: '选项10',
            label: '北京烤鸭'
          }
        ],
        value: '',
  
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: '',

	      options3: [{
		      value: '选项1',
		      label: '黄金糕'
	      }, {
		      value: '选项2',
		      label: '双皮奶',
		      disabled: true
	      }, {
		      value: '选项3',
		      label: '蚵仔煎'
	      }, {
		      value: '选项4',
		      label: '龙须面'
	      }, {
		      value: '选项5',
		      label: '北京烤鸭'
	      }],
	      value3: '',

	      options4: [{
		      value: '选项1',
		      label: '黄金糕'
	      }, {
		      value: '选项2',
		      label: '双皮奶',
		      disabled: true
	      }, {
		      value: '选项3',
		      label: '蚵仔煎'
	      }, {
		      value: '选项4',
		      label: '龙须面'
	      }, {
		      value: '选项5',
		      label: '北京烤鸭'
	      }],
	      value4: '',
      }
    }
	}
</script>

