<template>
	<div class="bg-color-white pd-tb20 pd-lr20">
		<!-- 进度条 begin -->
		<div class="mg-b30 pd-l20 pd-r20 step-form-menu">
			<div class="clear h50 pos-relative step-list">
				<div class="w100p h2 pos-abs pos-c h-line">
					<div class="fl h100p progress-bar" :class="barWidth"></div>
				</div>
				<div class="w26 h26 text-center pos-abs step-menu-item step-menu-item-1"
						 :class="[stepData[0].active ? 'is-active' : '',stepData[0].success ? 'is-success' : '']"
						 @click="stepHere(stepData[0].id)">
					<div class="w100 h52 pos-abs pos-t0" v-if="!stepData[0].success" style="margin-left: -50px; left: 50%;">
						<div class="w26 h26 lh26 block-center text-center pos-relative num">
							{{stepData[0].id+1}}
							<i class="w100p h100p pos-abs pos-c icon-circle-o" v-if="!stepData[0].success"></i>
							<i class="f26 w100p h100p pos-abs pos-c el-icon-circle-check-outline" v-if="stepData[0].success"></i>
						</div>
						<div class="h26 lh26 text">{{stepData[0].name}}</div>
					</div>
				</div>
				
				<div class="w26 h26 text-center pos-abs step-menu-item step-menu-item-2"
						 :class="[stepData[1].active ? 'is-active' : '',stepData[1].success ? 'is-success' : '']"
						 @click="stepHere(stepData[1].id)">
					
					<div class="w100 h52 pos-abs pos-t0" v-if="!stepData[1].success" style="margin-left: -50px; left: 50%;">
						<div class="w26 h26 lh26 block-center text-center pos-relative num">
							{{stepData[1].id+1}}
							<i class="w100p h100p pos-abs pos-c icon-circle-o" v-if="!stepData[1].success"></i>
							<i class="f26 w100p h100p pos-abs pos-c el-icon-circle-check-outline" v-if="stepData[1].success"></i>
						</div>
						<div class="h26 lh26 text">{{stepData[1].name}}</div>
					</div>
				
				</div>
				<div class="w26 h26 text-center pos-abs step-menu-item step-menu-item-3"
						 :class="[stepData[2].active ? 'is-active' : '',stepData[2].success ? 'is-success' : '']"
						 @click="stepHere(stepData[2].id)">
					
					<div class="w100 h52 pos-abs pos-t0 pos-l50p" v-if="!stepData[2].success" style="margin-left: -50px; left: 50%;">
						<div class="w26 h26 lh26 block-center text-center pos-relative num">
							{{stepData[2].id+1}}
							<i class="w100p h100p pos-abs pos-c icon-circle-o" v-if="!stepData[2].success"></i>
							<i class="f26 w100p h100p pos-abs pos-c el-icon-circle-check-outline" v-if="stepData[2].success"></i>
						</div>
						<div class="h26 lh26 text">{{stepData[2].name}}</div>
					</div>
				
				</div>
				
				
				
				<div class="w26 h26 text-center pos-abs step-menu-item step-menu-item-4"
						 :class="[stepData[3].active ? 'is-active' : '',stepData[3].success ? 'is-success' : '']"
						 @click="stepHere(stepData[3].id)">
					
					<div class="w100 h52 pos-abs pos-t0 pos-l50p" v-if="!stepData[3].success" style="margin-left: -50px; left: 50%;">
						<div class="w26 h26 lh26 block-center text-center pos-relative num">
							{{stepData[3].id+1}}
							<i class="w100p h100p pos-abs pos-c icon-circle-o" v-if="!stepData[3].success"></i>
							<i class="f26 w100p h100p pos-abs pos-c el-icon-circle-check-outline" v-if="stepData[3].success"></i>
						</div>
						<div class="h26 lh26 text">{{stepData[3].name}}</div>
					</div>
				</div>
				<div class="w26 h26 lh26 text-center pos-abs step-menu-item step-menu-item-5"
						 :class="[stepData[4].active ? 'is-active' : '',stepData[4].success ? 'is-success' : '']"
						 @click="stepHere(stepData[4].id)">
					
					<div class="w100 h52 pos-abs pos-t0 pos-l50p" v-if="!stepData[4].success" style="margin-left: -50px; left: 50%;">
						<div class="w26 h26 lh26 block-center text-center pos-relative num">
							{{stepData[4].id+1}}
							<i class="w100p h100p pos-abs pos-c icon-circle-o" v-if="!stepData[4].success"></i>
							<i class="f26 w100p h100p pos-abs pos-c el-icon-circle-check-outline" v-if="stepData[4].success"></i>
						</div>
						<div class="h26 lh26 text">{{stepData[4].name}}</div>
					</div>
				</div>
				<div class="w26 h26 lh26 text-center pos-abs step-menu-item step-menu-item-6"
						 :class="[stepData[5].active ? 'is-active' : '',stepData[5].success ? 'is-success' : '']"
						 @click="stepHere(stepData[5].id)">
					
					<div class="w100 h52 pos-abs pos-t0 pos-l50p" v-if="!stepData[5].success" style="margin-left: -50px; left: 50%;">
						<div class="w26 h26 lh26 block-center text-center pos-relative num">
							{{stepData[5].id+1}}
							<i class="w100p h100p pos-abs pos-c icon-circle-o" v-if="!stepData[5].success"></i>
							<i class="f26 w100p h100p pos-abs pos-c el-icon-circle-check-outline" v-if="stepData[5].success"></i>
						</div>
						<div class="h26 lh26 text">{{stepData[5].name}}</div>
					</div>
				</div>
				<div class="w26 h26 lh26 text-center pos-abs step-menu-item step-menu-item-7"
						 :class="[stepData[6].active ? 'is-active' : '',stepData[6].success ? 'is-success' : '']"
						 @click="stepHere(stepData[6].id)">
					
					<div class="w100 h52 pos-abs pos-t0 pos-l50p" v-if="!stepData[6].success" style="margin-left: -50px; left: 50%;">
						<div class="w26 h26 lh26 block-center text-center pos-relative num">
							{{stepData[6].id+1}}
							<i class="w100p h100p pos-abs pos-c icon-circle-o" v-if="!stepData[6].success"></i>
							<i class="f26 w100p h100p pos-abs pos-c el-icon-circle-check-outline" v-if="stepData[6].success"></i>
						</div>
						<div class="h26 lh26 text">{{stepData[6].name}}</div>
					</div>
				</div>
			
			</div>
		</div>
		<!-- 进度条 end -->
	</div>
</template>

<script>
	export default {
		name: "step",
		
		data() {
			return {
				barWidth: 'w0',
				stepNum: 0,
				stepData: [
					{
						id: 0,
						name: '第1步',
						active: true,
						success: false
					},
					{
						id: 1,
						name: '第2步',
						active: false,
						success: false
					},
					{
						id: 2,
						name: '第3步',
						active: false,
						success: false
					},
					{
						id: 3,
						name: '第4步',
						active: false,
						success: false
					},
					{
						id: 4,
						name: '第5步',
						active: false,
						success: false
					},
					{
						id: 5,
						name: '第6步',
						active: false,
						success: false
					},
					{
						id: 6,
						name: '第7步',
						active: false,
						success: false
					}
				],
			}
		},
		
		methods: {
			//跳转到上一步
			prev() {
				if (this.stepNum > 0) {
					this.stepNum--;
					this.changeStepData(this.stepNum);
				}
			},

			//跳转到下一步
			next() {
				if (this.stepNum < 6) {
					this.stepNum++;
					this.changeStepData(this.stepNum);
				}
			},

			//跳转到指定步骤(供父组件使用)
			stepHere (id) {
				this.stepNum = id;
				this.changeStepData(this.stepNum);
			},

			//跳转到指定的配置进度页
			changeStepData (num) {
				let i = 0;
				for (i in this.stepData) {
					if (this.stepData[i].id <= num) {
						this.stepData[i].active = true;
					} else {
						this.stepData[i].active = false;
					}
				}
				if (num === 6) {
					this.barWidth = 'w100p'
				}
				else if (num === 5) {
					this.barWidth = 'w83p'
				}
				else if (num === 4) {
					this.barWidth = 'w67p'
				}
				else if (num === 3) {
					this.barWidth = 'w50p'
				}
				else if (num === 2) {
					this.barWidth = 'w33p'
				}
				else if (num === 1) {
					this.barWidth = 'w17p'
				}
				else {
					this.barWidth = 'w0'
				}
			},
		}
	}
</script>

<style>
	.step-form-menu .step-list .h-line { background: #c5c5c5; }
	.step-form-menu .step-list .progress-bar { background: #409eff; transition-duration: .5s; }
	.step-form-menu .step-menu-item { background: #fff; cursor: pointer; margin-top: -13px; margin-left: -13px; top: 50%; z-index: 10; }
	.step-form-menu .step-menu-item .icon-circle-o { border: 2px solid #c5c5c5; border-radius: 50%; transition-duration: .5s; }
	.step-form-menu .step-menu-item span { color: #c5c5c5; }
	.step-form-menu .step-menu-item i { color: #c5c5c5; }
	.step-form-menu .step-menu-item-1 { left: 0; }
	.step-form-menu .step-menu-item-2 { left: 17%; }
	.step-form-menu .step-menu-item-3 { left: 33%; }
	.step-form-menu .step-menu-item-4 { left: 50%; }
	.step-form-menu .step-menu-item-5 { left: 67%; }
	.step-form-menu .step-menu-item-6 { left: 83%; }
	.step-form-menu .step-menu-item-7 { left: 100%; }
	.step-form-menu .step-list .is-active span { color: #409eff; }
	.step-form-menu .step-list .is-active .icon-circle-o { border: 2px solid #409eff; }
	.step-form-menu .step-list .is-success .el-icon-circle-check-outline { color: #67c23a; }
	.step-form-menu .step-list .num { color: #c5c5c5; }
	.step-form-menu .step-list .text { color: #c5c5c5; }
	.step-form-menu .step-list .is-active .num { color: #409eff; }
	.step-form-menu .step-list .is-active .text { color: #409eff; }
</style>
