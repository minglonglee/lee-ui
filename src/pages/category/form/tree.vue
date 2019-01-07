<template>
	<div class="bg-color-white pd-tb20 pd-lr20 form-tree">
		<div class="f18 h50 lh50"><span>树形结构菜单</span></div>
	</div>
</template>

<script>
	export default {
		name: "tree",
		data() {
			return {
				treeList: [
					{
						id: 1,
						name: '一级菜单1',
						children: [
							{
								id: 101,
								name: '二级级菜单1'
							},
							{
								id: 102,
								name: '二级级菜单2'
							}
						]
					},
					{
						id: 2,
						name: '一级菜单2'
					},
					{
						id: 3,
						name: '一级菜单3'
					},
				],

				defaultProps: {
					children: 'children',
					label: 'name'
				},

				treeList2: [
					{
						id: 1,
						name: '一级菜单1',
						children: [
							{
								id: 101,
								name: '二级级菜单1'
							},
							{
								id: 102,
								name: '二级级菜单2'
							}
						]
					},
					{
						id: 2,
						name: '一级菜单2',
						children: [
							{
								id: 101,
								name: '二级级菜单1'
							},
							{
								id: 102,
								name: '二级级菜单2'
							},
							{
								id: 103,
								name: '二级级菜单3'
							}
						]
					},
					{
						id: 3,
						name: '一级菜单3'
					},
				],

				defaultProps2: {
					children: 'children',
					label: 'name'
				}
			}
		},
		
		methods: {
			handleNodeClick(data) {
				console.log(data);
			},

			handleChange(val) {
				console.log(val);
			}
		}
	}
</script>
