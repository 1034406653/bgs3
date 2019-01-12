<template>
	<div class="introduce-page">
		<div class="part part1">
			<div class="title">
				<p v-html="dataListActive.part1.title"></p>
				<b></b>
			</div>
			<div class="part1-main">
				<div class="center-border"></div>
				<img src="../../static/img/introduce-circle-1.png" class="circle1 circle-1" />
				<img src="../../static/img/introduce-circle-2.png" class="circle2 circle-2" />
				<img src="../../static/img/introduce-circle-1.png" class="circle3 circle-1" />
				<img src="../../static/img/introduce-circle-2.png" class="circle4 circle-2" />
				<img src="../../static/img/introduce-circle-1.png" class="circle5 circle-1" />
				<img src="../../static/img/introduce-circle-2.png" class="circle6 circle-2" />
				<!--p1左侧标题-->
				<p class="p1 p1-1" v-html="dataListActive.part1.p11"></p>
				<p class="p1 p1-2" v-html="dataListActive.part1.p12"></p>
				<p class="p1 p1-3" v-html="dataListActive.part1.p13"></p>
				<!--p2左侧内容-->
				<p class="p2 p2-1" v-html="dataListActive.part1.p21"></p>
				<p class="p2 p2-2" v-html="dataListActive.part1.p22"></p>
				<p class="p2 p2-3" v-html="dataListActive.part1.p23"></p>
				<!--p3右侧标题-->
				<p class="p3 p3-1" v-html="dataListActive.part1.p31"></p>
				<p class="p3 p3-2" v-html="dataListActive.part1.p32"></p>
				<p class="p3 p3-3" v-html="dataListActive.part1.p33"></p>
				<!--p4右侧内容-->
				<p class="p4 p4-1" v-html="dataListActive.part1.p41"></p>
				<p class="p4 p4-2" v-html="dataListActive.part1.p42"></p>
				<p class="p4 p4-3" v-html="dataListActive.part1.p43"></p>
			</div>
		</div>
		<div class="part part2">
			<div class="title">
				<p v-html="dataListActive.part2.title"></p>
				<b></b>
			</div>
			<div class="part2-pic1">
				<p v-html="dataListActive.part2.picText.p1" class="p1"></p>
				<p v-html="dataListActive.part2.picText.p2" class="p2"></p>
				<p v-html="dataListActive.part2.picText.p3" :class="[{EnglishActive:dataListActive.EnglishActive},'p3']"></p>
				<p v-html="dataListActive.part2.picText.p4" class="p4"></p>
			</div>
			<p v-html="dataListActive.part2.p11"></p>
		</div>
		<div class="part part3">
			<div class="title">
				<p v-html="dataListActive.part3.title"></p>
				<b></b>
			</div>
			<div class="part3-pic1"></div>
		</div>
		<div class="part part4">
			<div class="title">
				<p v-html="dataListActive.part4.title"></p>
				<b></b>
			</div>
			<p v-html="dataListActive.part4.p11"></p>
			<div class="part4-pic1"></div>
		</div>
		<div class="btn">
			<span class="app-download" @click="navDownload" v-html="dataListActive.appDownload">下载APP</span>
		</div>
		<div class="footer">
			<ul class="footer-iocn-list">
				<li>
					<a href="https://twitter.com/blockgamesquare"><img src="@/assets/img/footer-icon1.png" style="width: 33px; height: 27px;margin-top: 9px;" /></a>

				</li>
				<li>
					<a href="https://www.facebook.com/blockgame.square"><img src="@/assets/img/footer-icon2.png" style="width: 18px; height: 33px;margin-top: 6px;" /></a>

				</li>
				<li>
					<a href="https://www.weibo.com/blockgamesquare"><img src="@/assets/img/footer-icon3.png" style="width: 39px; height: 31px;margin-top: 7px;" /></a>
				</li>
			</ul>
			<div class="footer-contact">
				<div class="weixin-qrcode"></div>
				<span class="weixinlabel">{{dataListActive.footerSpan1}}</span>
				<span class="dianbaolabel">{{dataListActive.footerSpan2}}</span>
				<p>t.m/blockgamesquare</p>
			</div>
			<p>
				<span>Copyright © 2018 BLOCKGAME SQUARE All Right Reserved.</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Download',
		props: ['languageType'],
		data() {
			return {
				wxQrcodeShow: false,
				dataListActive: {},
				dataListC: {
					EnglishActive: false,
					part1: {
						title: "进程规划",
						p11: "Q4 2018年",
						p12: "Q2 2019年",
						p13: "Q4 2019年",
						p21: "对接市面上基于ETH、EOS <br />等主链的DAPP <br /> 尽量将以上主链的DAPP <br />全部引入平台",
						p22: "DAPP迭代开发，引入传统互联<br /> 网小游戏平台<br /> 用户量突破500万<br /> 日活破10万",
						p23: "注册用户达到千万<br /> 日活达到百万级",
						p31: "Q1 2019年",
						p32: "Q3 2019年",
						p33: "2020年",
						p41: "DAPP平台上线<br /> 官网www.bgsgame.com/io上线<br /> 用户量突破100万，日活破万",
						p42: "成立项目基金<br /> 孵化和资助全球DAPP方开发<br /> 更多更好的DAPP提供给游戏玩家",
						p43: "完善DAPP<br /> 赋能BGS新价值",
					},
					part2: {
						title: "BGS代币的分发",
						p11: "发行量：10亿，总量恒定，永不增发。<br /> 团队激励：20%，即2亿。将用于创始团队激励，持续的BGS <br />平台开发、运营与市值管理等。<br /> 海外公开募集：30%，即3亿。用户是持币即分红模式。<br /> 空投奖励：5%，即0.5亿。是指给推广即分红模式。<br /> 挖矿奖励：45%，即4.5亿。消费即挖矿。采用游戏即分红的<br />模式，采用黄金比例减半衰减机制，挖完为止。",
						picText: {
							p1: "挖矿奖励",
							p2: "团队奖励",
							p3: "海外公开募资",
							p4: "空投奖励",
						}
					},
					part3: {
						title: "分发平台",
					},
					part4: {
						title: "全球合伙人",
						p11: "在全世界设立8个超级合伙人，以更快的速度，<br /> 链接全球各地的DAPP开发商。",
					},
					appDownload: "APP下载",
					footerSpan1: "官方微信",
					footerSpan2: "官方电报群:",
				},
				dataListE: {
					EnglishActive: true,
					part1: {
						title: "Process planning",
						p11: "2018 Q4",
						p12: "2019 Q2",
						p13: "2019 Q4",
						p21: "DAPP in the market based on ETH, EOS and other main chains, trying to bring all the DAPPs of the above main chains into the platform",
						p22: "Adding the TRX&NEO main chains into the platform, platform users exceeded 50 million, the daily active subscriber exceeded 100,000",
						p23: "Registered users reach tens of millions and daily active subscriber reaches a million",
						p31: "2019 Q1",
						p32: "2019 Q3",
						p33: "2020",
						p41: "Launching DAPP platform and official website www.bgsgame.com/io, platform users exceeded 10 million,the daily active subscriber exceeded 10,000",
						p42: "Establishing a project fund and incubate global DAPP parties to develop more and better DAPPs for game playe",
						p43: "Empower a new value for BGS",
					},
					part2: {
						title: "BGS TOKEN DISTRIBUTION",
						p11: "Amount of distribution: 1 billion, the amount is constant.Team incentive: 20%, namely 0.2 billion. It will be applied into founding team incentive, constant BGS platform development, operation and market value management, etc <br /> Overseas public offering: 30%, namely 0.3 billion. Once users hold tokens they can join in sharing dividends.Air-drop reward: 5%, namely 0.05 billion. For promotion, and participation in profit.Mining reward: 45%, namely 0.45 billion. Consumption means mining. Adopt the model that game means ",
						picText: {
							p1: "Mining reward",
							p2: "Team incentive",
							p3: "Overseas public offering",
							p4: "Air-drop reward",
						}
					},
					part3: {
						title: "Distribution Platform",
						p1: "Internet user",
						p2: "DAPP Developers",
					},
					part4: {
						title: "Global super partners",
						p11: "8 super partners are established worldwide, thus to link with global DAPP developers faster",
					},
					appDownload: "APP Download",
					footerSpan1: "官方微信",
					footerSpan2: "官方电报群:",
				}

			}
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
				console.log(val);
				if(val == 'english') {
					this.dataListActive = this.dataListE
				} else {
					this.dataListActive = this.dataListC
				}
			}
		},
		methods: {
			isWxQrcodeShow() {
				this.wxQrcodeShow = !this.wxQrcodeShow
			},
			navDownload() {
				this.$router.push({
					path: "download"
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.introduce-page {
		width: 100%;
		height: auto;
		position: relative;
		.part {
			width: 100%;
			height: auto;
			position: relative;
			.title {
				width: 100%;
				height: 46px;
				text-align: center;
				p {
					width: 100%;
					height: 40px;
					line-height: 28px;
					font-size: 28px;
					color: #333;
					text-align: center;
					margin-top: 0;
					margin-bottom: 0;
					padding: 0;
				}
				b {
					width: 101px;
					height: 6px;
					background: rgba(255, 158, 16, 1);
					border-radius: 3px;
					display: block;
					margin: 0 auto;
				}
			}
		}
		.part1 {
			padding-top: 80px;
			height: 880px;
			.part1-main {
				margin-top: 28px;
				position: relative;
				.center-border {
					position: absolute;
					width: 8px;
					height: 563px;
					background: rgba(255, 158, 16, 1);
					border-radius: 3px;
					left: 50%;
					margin-left: -4px;
					top: 61px;
				}
				.circle-1 {
					position: absolute;
					width: 53px;
					height: 51px;
					left: 50%;
					margin-left: -26px;
				}
				.circle-2 {
					position: absolute;
					width: 43px;
					height: 44px;
					left: 50%;
					margin-left: -21px;
				}
				.circle1 {
					top: 23px;
				}
				.circle2 {
					top: 127px;
				}
				.circle3 {
					top: 223px;
				}
				.circle4 {
					top: 326px;
				}
				.circle5 {
					top: 422px;
				}
				.circle6 {
					top: 526px;
				}
				.p1 {
					position: absolute;
					right: 50%;
					margin-right: 60px;
					text-align: right;
					width: 140px;
					line-height: 24px;
					color: #333;
					font-size: 24px;
					font-weight: 600;
				}
				.p1-1 {
					top: 35px;
				}
				.p1-2 {
					top: 238px;
				}
				.p1-3 {
					top: 439px;
				}
				.p2 {
					position: absolute;
					right: 50%;
					margin-right: 60px;
					text-align: right;
					width: 300px;
					line-height: 26px;
					color: #666;
					font-size: 20px;
				}
				.p2-1 {
					top: 69px;
				}
				.p2-2 {
					top: 272px;
				}
				.p2-3 {
					top: 473px;
				}
				.p3 {
					position: absolute;
					left: 50%;
					margin-left: 60px;
					text-align: left;
					width: 140px;
					line-height: 24px;
					color: #333;
					font-size: 24px;
					font-weight: 600;
				}
				.p3-1 {
					top: 139px
				}
				.p3-2 {
					top: 338px
				}
				.p3-3 {
					top: 535px
				}
				.p4 {
					position: absolute;
					left: 50%;
					margin-left: 60px;
					text-align: left;
					width: 300px;
					line-height: 26px;
					color: #666;
					font-size: 20px;
				}
				.p4-1 {
					top: 173px
				}
				.p4-2 {
					top: 372px
				}
				.p4-3 {
					top: 569px
				}
			}
		}
		.part2 {
			padding-top: 20px;
			.part2-pic1 {
				width: 690px;
				height: 330px;
				margin: 0 auto;
				margin-top: 40px;
				background: url(../assets/img/part2-pic1.png);
				background-size: 100% 100%;
				position: relative;
			}
			.part2-pic1 {
				p {
					position: absolute;
					width: auto;
					color: #333;
					font-size: 16px;
					line-height: 16px;
					padding: 0;
					margin: 0;
				}
				p.p1 {
					left: 110px;
					top: 46px;
				}
				p.p2 {
					left: 464px;
					top: 40px;
				}
				p.p3 {
					left: 128px;
					top: 251px;
				}
				p.p3.EnglishActive {
					left: 60px;
				}
				p.p4 {
					left: 468px;
					top: 274px;
				}
			}
			p {
				width: 572px;
				margin: 0 auto;
				line-height: 30px;
				color: #666;
				font-size: 20px;
				text-align: left;
				padding-top: 30px;
				padding-bottom: 80px;
			}
		}
		.part3 {
			.part3-pic1 {
				width: 682px;
				height: 456px;
				margin: 0 auto;
				margin-top: 6px;
				margin-bottom: 28px;
				background: url(../assets/img/part3-pic1.png);
				background-size: 100% 100%;
			}
		}
		.part4 {
			p {
				width: 420px;
				line-height: 30px;
				font-size: 20px;
				color: #595757;
				margin: 0 auto;
				margin-top: 24px;
				margin-bottom: 76px;
			}
			.part4-pic1 {
				width: 690px;
				height: 378px;
				margin: 0 auto;
				background: url(../assets/img/part4-pic1.png);
				background-size: 100% 100%;
			}
		}
		.btn {
			width: 386px;
			height: 130px;
			background: url(../assets/img/home-part1-btn-bg.png);
			background-size: 100% 100%;
			text-align: center;
			margin: 0 auto;
			padding-top: 8px;
			margin-top: 24px;
			margin-bottom: 60px;
			span {
				display: block;
				margin: 0 auto;
				width: 378px;
				height: 88px;
				border-radius: 40px;
				line-height: 88px;
				color: #fff;
				font-size: 32px;
				font-weight: 600;
			}
		}
	}
</style>