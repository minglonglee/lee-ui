<template>
	<div class="bg-color-white pd-tb20 pd-lr20 form-checkbox">
    <div class="f18 h50 lh50"><span>checkbox复选框</span></div>
  </div>
</template>

<script>
  const cityOptions = [
    { id: 1, name: '北京' },
    { id: 2, name: '上海' },
    { id: 3, name: '广州' },
    { id: 4, name: '深圳' },
    { id: 5, name: '杭州' }
  ];
	export default {
		name: "form-checkbox",
    data() {
      return {
        checked: true,
        checked1: false,
        checked2: true,
        checkList: ['1', '2'],

        checkAll: false,
        cityList: cityOptions,
        checkedCities: [1, 3],
        isIndeterminate: true
      };
    },

    methods: {
      handleCheckAllChange(val) {
        if (val === true) {
          let arr = [];
          cityOptions.forEach((obj, i) => {
            arr.push(obj.id);
          });
          this.checkedCities = arr;
        } else {
          this.checkedCities = [];
        }
        // this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cityList.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityList.length;
      }
    }
	}
</script>
