<template>
	<div class="notice-page">
		<div class="header-title">
			公告
		</div>
		<ul>
			<li v-for="item in dataListActive.noticeList">
				<div class="notice-tittle"><span><img src="@/assets/img/notice-icon.png"/>{{item.title}}</span></div>
				<div class="notice-time">
					<span>{{item.time}}</span><span> | </span> <span>区块链广场</span>
				</div>
				<div class="content-box">
					<div v-html="item.content"></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Notice',
		props: ['languageType'],
		data() {
			return {
				dataListActive: {},
				dataListC: {
					EnglishActive: false,
					noticeList: [{
						time: 11111,
						title: "1465416",
						content: "145454165"
					}],
				},
				dataListE: {
					EnglishActive: true,
					noticeList: [],
				}
			}
		},
		mounted() {
			this.init();
		},
		created() {
			if(this.languageType == 'english') {
				this.dataListActive = this.dataListE
			} else {
				this.dataListActive = this.dataListC
			}
		},
		watch: {
			languageType(val, oldval) {
				if(val == 'english') {
					this.dataListActive = this.dataListE;
				} else {
					this.dataListActive = this.dataListC;
				}
			}
		},
		methods: {
			init() {
				this.$axios({
					method: 'get',
					url: '/api/notice/getNotice',
				}).then(res => {
					if(res.data.code == 0) {
						res.data.data.forEach((x, i) => {
							this.dataListC.noticeList[i] = {};
							this.dataListC.noticeList[i].time = x.time;
							this.dataListC.noticeList[i].title = x.title;
							this.dataListC.noticeList[i].content = x.content;
							this.dataListE.noticeList[i] = {};
							this.dataListE.noticeList[i].time = x.time;
							this.dataListE.noticeList[i].title = x.english_title;
							this.dataListE.noticeList[i].content = x.english_content;
						})
						console.log(this.dataListC);
						console.log(this.dataListE);
						console.log(this.dataListActive);
						if(this.languageType == 'english') {
							this.$set(this.dataListActive, this.dataListE)
						} else {
							this.$set(this.dataListActive, this.dataListC)
						}
					}
				}).catch(res => {
					console.log(res)
				});
			}
		}
	}
</script>

<style lang="scss">
	.notice-page {
		width: 100%;
		height: auto;
		.header-title {
			width: 100%;
			height: 70px;
			line-height: 60px;
			padding-top: 10px;
			color: #FF9E0F;
			font-size: 32px;
			text-align: center;
			font-weight: bold;
		}
		ul {
			width: 100%;
			height: auto;
			padding: 0 40px;
			li {
				width: 100%;
				height: auto;
				.notice-tittle {
					width: 100%;
					font-size: 28px;
					line-height: 30px;
					color: rgba(51, 51, 51, 1);
					padding-bottom: 16px;
					overflow: hidden;
					img {
						width: 23px;
						height: 23px;
						margin-right: 16px;
						float: left;
						margin-top: 4px;
					}
					span {
						float: left;
						width: calc( 100% - 40px);
					}
				}
				.notice-time {
					width: 100%;
					height: 40px;
					font-size: 22px;
					color: rgba(102, 102, 102, 1);
					line-height: 24px;
					border-bottom: 1px solid rgba(198,198,198,1);
				}
				.content-box {
					text-align: left;
					color: #333;
					font-size: 26px;
					line-height: 36px;
					padding-top: 20px;
					padding-bottom: 40px;
				}
			}
		}
	}
</style>