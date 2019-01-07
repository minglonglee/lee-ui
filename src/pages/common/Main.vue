<template>
  <div class="w100p h100p pd-t40 pos-abs pos-c Main">
    <div class="w100p h100p pos-relative">
      <div class="h100p pos-abs pos-t0 pos-l0 left-box">
        <div class="h100p pos-relative menu-box-wrap" >
          <div class="w100p h100p overflow-hidden pos-abs pos-t0 pos-l0 z-2 menu-box">
            <div class="w100p nav-menu nav-menu-normal">
              <div class="menu-cat menu-cat-1">
                <div class="f16 h40 lh40 pd-lr10 menu-cat">基础元素</div>
                <div class="menu-list">
                  <div class="h30 lh30" v-for="(item, index) in menu.basic">
                    <router-link class="f14 mouse-hand pd-lr20" tag="div" :to="{ path: item.url }">{{ item.name }}</router-link>
                  </div>
                </div>
              </div>
              <div class="menu-cat menu-cat-2">
                <div class="f16 h40 lh40 pd-lr10 menu-cat">表单元素</div>
                <div class="menu-list">
                  <div class="h30 lh30 menu-list-item" v-for="(item, index) in menu.form">
                    <router-link class="f14 mouse-hand pd-lr20" tag="div" :to="{ path: item.url }">{{ item.name }}</router-link>
                  </div>
                </div>
              </div>
              <div class="menu-cat menu-cat-3">
                <div class="f16 h40 lh40 pd-lr10 menu-cat">导航元素</div>
                <div class="menu-list">
                  <div class="h30 lh30 menu-list-item" v-for="(item, index) in menu.navigation">
                    <router-link class="f14 mouse-hand pd-lr20" tag="div" :to="{ path: item.url }">{{ item.name }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w100p h100p overflow-hidden right-box">
        <div class="w100p h100p pos-relative">
          <div class="w100p h100p pos-abs pos-t0 pos-l0 main-content-wrap">
            <div class="w100p h100p pd-tb20 pd-lr20 main-content">
              <router-view/>

              <!--<div class="bg-color-white" style="width: 2000px; height: 2000px;"></div>-->

            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
	export default {
		name: "Main",
    data() {
      return {
        menu: {
          basic: [
            {
              id: 1,
              name: '按钮',
              url: '/basic/button'
            },
          ],
          form: [
            {
              id: 1,
              name: 'input文本框',
              url: '/form/input'
            },
            {
              id: 2,
              name: 'radio单选框',
              url: '/form/radio'
            },
            {
              id: 3,
              name: 'checkbox复选框',
              url: '/form/checkbox'
            },
            {
              id: 4,
              name: 'select下拉框',
              url: '/form/select'
            },
	          {
		          id: 5,
		          name: 'tree树形菜单',
		          url: '/form/tree'
	          },
	          {
		          id: 6,
		          name: 'time时间插件',
		          url: '/form/time'
	          },{
		          id: 6,
		          name: 'date日期插件',
		          url: '/form/date'
	          }
           
          ],
          navigation: [
            {
              id: 1,
              name: '步骤条',
              url: '/navigation/step'
            },
	          {
		          id: 2,
		          name: '分页导航',
		          url: '/navigation/pagination'
	          },
          ]
        }
      };
    }
  }
</script>
<style>
  .menu-cat { border-bottom: 1px solid #ccc; }
</style>
