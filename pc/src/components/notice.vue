<template>
	<div class="notice-page">
		<div class="header-title"><span>公告</span><b></b></div>
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

<style>
	.notice-page {
		width: 1000px;
		margin: 0 auto;
		height: auto;
		min-height: 800px;
	}
	
	.notice-page .header-title {
		width: 100%;
		height: 90px;
		line-height: 60px;
		padding-top: 10px;
		color: #333;
		font-size: 32px;
		text-align: center;
		font-weight: bold;
		margin-bottom: 30px;
	}
	.notice-page .header-title span{
		display: block;
		text-align: center;
	}
	.notice-page .header-title b{
		display: block;
		margin: 0 auto;
		width: 40px;
		height: 4px;
		background: orange;
	}
	
	.notice-page ul {
		width: 100%;
		height: auto;
		padding: 0 40px;
	}
	
	.notice-page li {
		width: 100%;
		height: auto;
	}
	
	.notice-tittle {
		width: 100%;
		font-size: 28px;
		line-height: 30px;
		color: rgba(51, 51, 51, 1);
		padding-bottom: 16px;
		overflow: hidden;
	}
	
	.notice-tittle img {
		width: 23px;
		height: 23px;
		margin-right: 16px;
		float: left;
		margin-top: 4px;
	}
	
	.notice-tittle span {
		float: left;
		width: calc( 100% - 40px);
	}
	
	.notice-time {
		margin-left: 40px;
		width: calc( 100% - 40px);
		height: 40px;
		font-size: 22px;
		color: rgba(102, 102, 102, 1);
		line-height: 24px;
		border-bottom: 1px solid rgba(198, 198, 198, 1);
	}
	
	.notice-page .content-box {
		text-align: left;
		color: #333;
		font-size: 26px;
		line-height: 36px;
		margin-left: 40px;
		width: calc( 100% - 40px);
		padding-top: 20px;
		padding-bottom: 80px;
	}
</style>