<template>
	<div class="container">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide page1">
					<div class="notice-box" @click="$router.push('/notice')">
						<div class="text-box">
							<p :class={noticeMove}><span>{{dataListActive.page1.notice}}</span></p>
						</div>
					</div>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']">{{dataListActive.page1.p1}}</p>
					<p class="p2">{{dataListActive.page1.p2}}</p>
					<div class="btn app-download">
						<span @click="navDownload">{{dataListActive.page1.appDownload}}</span>
					</div>
					<div class="btn book-download">
						<span :class="[{EnglishActive:dataListActive.EnglishActive}]" @click="bookLanguageShow=!bookLanguageShow">{{dataListActive.page1.bookDownload}}</span>
						<a href="static/pdf/web/viewer.html?file=BlockgameSquare-whitepaper-c.pdf" v-show="bookLanguageShow">中文</a>
						<a href="static/pdf/web/viewer.html?file=BlockgameSquare-whitepaper-e.pdf" v-show="bookLanguageShow">English</a>
					</div>
					<img src='../../static/img/page1-pic1.png' class="page1-pic1" />
					<img src="../../static/img/page-bg.png" class="page-bg" />
					<div class="page-bg2"></div>
					<img src="../../static/img/down-icon.png" class="next-page" />
				</div>
				<div class="swiper-slide page2">
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']" v-html="dataListActive.page2.p1"></p>
					<p class="p2" v-html="dataListActive.page2.p2"></p>
					<img src='../../static/img/page2-pic1.png' class="page2-pic1" />
					<img src="../../static/img/page-bg.png" class="page-bg" />
					<div class="page-bg2"></div>
					<img src="../../static/img/down-icon.png" class="next-page" />
				</div>
				<div class="swiper-slide page3">
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']" v-html="dataListActive.page3.p1"></p>
					<p class="p2" v-html="dataListActive.page3.p2"></p>
					<img src='../../static/img/page3-pic1.png' class="page3-pic1" />
					<img src="../../static/img/page-bg.png" class="page-bg" />
					<div class="page-bg2"></div>
					<img src="../../static/img/down-icon.png" class="next-page" />
				</div>
				<div class="swiper-slide page4">
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']" v-html="dataListActive.page4.p1"></p>
					<p class="p2" v-html="dataListActive.page4.p2"></p>
					<img src='../../static/img/page4-pic1.png' class="page4-pic1" />
					<img src="../../static/img/page-bg.png" class="page-bg" />
					<div class="page-bg2"></div>
					<img src="../../static/img/down-icon.png" class="next-page" />
				</div>
				<div class="swiper-slide page5">
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']" v-html="dataListActive.page5.p1"></p>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p2']" v-html="dataListActive.page5.p2"></p>
					<div class="btn app-download">
						<span @click="navDownload" v-html="dataListActive.page5.appDownload"></span>
					</div>
					<img src='../../static/img/page5-pic1.png' class="page5-pic1" />
					<img src="../../static/img/page-bg.png" class="page-bg" />
					<div class="page-bg2"></div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		name: 'Home',
		props: ['languageType'],
		data() {
			return {
				noticeMove: false,
				bookLanguageShow: false,
				dataListActive: {},
				dataListC: {
					EnglishActive: false,
					page1: {
						notice: "",
						p1: "玩转DAPP从这里开始",
						p2: "为DAPP而生，有趣，安全，易用的区块链游戏广场",
						appDownload: "APP下载",
						bookDownload: "白皮书下载",
						languageC: "中文",
						languageE: "英文",
					},
					page2: {
						p1: "全面支持主流公链生态",
						p2: "Block Game Square V1.0上线钱包功能，从ETH到<br /> EOS，从办公室到街头，随时随地想玩就玩。",
					},
					page3: {
						p1: "玩DAPP操作繁琐？我帮你",
						p2: "不懂数字货币买卖？钱包创建操作繁琐？玩转DAPP，<br />我们是专业的。",
					},
					page4: {
						p1: "DAPP&区块链资讯早知道",
						p2: "最新的DAPP日活数据，让你知道大家都喜欢玩什么。<br />最新链圈资讯，让你了解行业趋势走向。",
					},
					page5: {
						p1: "开放包容的全球最大DAPP 分发平台",
						p2: "斥资开发DAPP，日活才勉强过百？这里有数千万互联<br />网用户等待你的出现",
						appDownload: "APP下载",
					},
				},
				dataListE: {
					EnglishActive: true,
					page1: {
						notice: "",
						p1: "Starting from here, enjoying DAPP games",
						p2: "Born for the DAPP, interesting, safe, available DAPP game square",
						appDownload: "APP Download",
						bookDownload: "White paper Download",
						languageC: "中文",
						languageE: "English",
					},
					page2: {
						p1: "Fully support mainstream public chain ecosystem",
						p2: "A collection of wallet functions in the BGS V1.0, from ETH to EOS, from office to street, you can enjoy the DAPP anytime and anywhere",
					},
					page3: {
						p1: "Hard to play the DAPP? let us help you",
						p2: "Do not understand digital currency trading? Hard to create a digital wallet? Trust us, we are professional",
					},
					page4: {
						p1: "Stay tuned on the latest news about the DAPP",
						p2: "The newest user daily live data will suggest you which DAPP you can choose. The latest news will tell you the direction of industry trends",
					},
					page5: {
						p1: "The world's largest open and inclusive DAPP square",
						p2: "Invest heavily in developing a DAPP, but just barely crosses 100 users? There are millions of Internet users waiting for you",
						appDownload: "APP Download",
					},
				}

			}
		},
		mounted() {
			this.init();
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'vertical',
			})

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
					if(this.dataListActive.page1.notice.length > 12) {
						this.noticeMove = true;
					}else{
						this.noticeMove = false;
					}
				} else {
					this.dataListActive = this.dataListC;
					if(this.dataListActive.page1.notice.length > 6) {
						this.noticeMove = true;
					}else{
						this.noticeMove = false;
					}
				}
			}
		},
		methods: {
			navDownload() {
				this.$router.push({
					path: "download"
				})
			},
			init() {
				this.$axios({
					method: 'get',
					url: '/api/notice/getNotice',
				}).then(res => {
					if(res.data.code == 0) {
						this.dataListC.page1.notice = res.data.data[0].title;
						this.dataListE.page1.notice = res.data.data[0].english_title;
						if(this.dataListActive.page1.notice.length > 6) {
							this.noticeMove = true;
						}
					}
				}).catch(res => {
					console.log(res)
				});
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped" lang="scss">
	.container {
		width: 100%;
		height: calc( 100% - 88px);
		.swiper-container {
			width: 100%;
			height: 100%;
			overflow: hidden;
			.swiper-slide {
				position: relative;
				overflow: hidden;
				.notice-box {
					position: absolute;
					right: 40px;
					top: 38px;
					width: 195px;
					height: 24px;
					background: url(../assets/img/home-notice-bg.png);
					background-size: 100% 100%;
					.text-box {
						width: 155px;
						height: 24px;
						position: absolute;
						left: 31px;
						bottom: 8px;
						overflow: hidden;
						p {
							position: absolute;
							left: 0;
							top: 0;
							width: 155px;
							height: 24px;
							line-height: 24px;
							font-size: 24px;
							font-family: PingFang-SC-Medium;
							font-weight: bold;
							white-space: nowrap;
							text-align: center;
							color: rgba(120, 26, 7, 1);
							/* Safari 和 Chrome */
							span {
								width: auto;
								height: 24px;
								line-height: 24px;
							}
						}
						.noticeMove {
							width: auto;
							text-align: left;
							animation: noticeMove 5s linear;
							-webkit-animation: noticeMove 5s linear infinite;
						}
					}
				}
				.p1 {
					position: absolute;
					text-align: center;
					left: 50%;
					color: #333;
					font-weight: 600;
					font-size: 52px;
				}
				.p2 {
					position: absolute;
					left: 50%;
					font-size: 24px;
					line-height: 24px;
				}
				.btn {
					width: 386px;
					height: 130px;
					background: url(../assets/img/home-part1-btn-bg.png);
					background-size: 100% 100%;
					text-align: center;
					position: absolute;
					left: 50%;
					padding-top: 8px;
					margin-left: -193px;
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
					.EnglishActive {
						font-size: 28px;
					}
				}
				@keyframes nextPagemove {
					0% {
						opacity: 0.2;
						transform: translateY(0px);
					}
					38% {
						opacity: 1;
						transform: translateY(20px);
					}
					100% {
						opacity: 0;
						transform: translateY(60px);
					}
				}
				.next-page {
					width: 50px;
					position: absolute;
					bottom: 70px;
					left: 50%;
					margin-left: -25px;
					z-index: 100;
					animation: nextPagemove 3s infinite;
					-webkit-animation: nextPagemove 3s infinite;
					/* Safari 和 Chrome */
				}
			}
			.page1 {
				.p1 {
					width: 560px;
					margin-left: -280px;
					height: 52px;
					line-height: 52px;
					top: 188px;
				}
				.EnglishActive {
					top: 160px;
					line-height: 40px;
					font-size: 36px;
				}
				.p2 {
					margin-left: -285px;
					width: 570px;
					text-align: center;
					line-height: 24px;
					top: 262px;
				}
				.app-download {
					top: 380px;
				}
				.book-download {
					top: 520px;
					z-index: 100;
					a {
						position: absolute;
						width: 160px;
						height: 50px;
						line-height: 46px;
						text-align: center;
						color: rgba(255, 166, 32, 1);
						border: 2px solid rgba(255, 166, 32, 1);
						border-radius: 16px;
						left: 20px;
						top: 110px;
						font-size: 24px;
					}
					a:last-child {
						left: 200px;
					}
				}
				.page1-pic1 {
					width: 483px;
					position: absolute;
					left: 50%;
					margin-left: -242px;
					top: 694px;
					background-size: 100% 100%;
					z-index: 10;
				}
			}
			.page2 {
				.p1 {
					width: 530px;
					margin-left: -265px;
					height: 52px;
					line-height: 52px;
					top: 187px;
				}
				.EnglishActive {
					top: 160px;
					line-height: 40px;
					font-size: 36px;
				}
				.p2 {
					margin-left: -285px;
					width: 570px;
					text-align: center;
					line-height: 36px;
					top: 265px;
				}
				.page2-pic1 {
					width: 690px;
					position: absolute;
					left: 50%;
					margin-left: -345px;
					top: 384px;
					z-index: 10;
				}
			}
			.page3 {
				.p1 {
					width: 620px;
					margin-left: -310px;
					height: 52px;
					line-height: 52px;
					top: 187px;
				}
				.EnglishActive {
					top: 160px;
					line-height: 40px;
					font-size: 36px;
				}
				.p2 {
					margin-left: -288px;
					width: 576px;
					text-align: center;
					line-height: 36px;
					top: 265px;
				}
				.page3-pic1 {
					width: 690px;
					position: absolute;
					left: 50%;
					margin-left: -345px;
					top: 384px;
					z-index: 10;
				}
			}
			.page4 {
				.p1 {
					width: 620px;
					margin-left: -310px;
					height: 52px;
					line-height: 52px;
					top: 187px;
				}
				.EnglishActive {
					top: 160px;
					line-height: 40px;
					font-size: 36px;
				}
				.p2 {
					margin-left: -288px;
					width: 576px;
					text-align: center;
					line-height: 36px;
					top: 265px;
				}
				.page4-pic1 {
					width: 690px;
					position: absolute;
					left: 50%;
					margin-left: -345px;
					top: 384px;
					z-index: 10;
				}
			}
			.page5 {
				.p1 {
					width: 634px;
					margin-left: -317px;
					height: 52px;
					line-height: 72px;
					top: 172px;
				}
				.EnglishActive.p1 {
					line-height: 40px;
					font-size: 36px;
				}
				.p2 {
					margin-left: -295px;
					width: 590px;
					text-align: center;
					line-height: 36px;
					top: 336px;
				}
				.EnglishActive.p2 {
					top: 300px;
				}
				.app-download {
					top: 450px;
					z-index: 11;
				}
				.page5-pic1 {
					width: 690px;
					position: absolute;
					left: 50%;
					margin-left: -345px;
					top: 610px;
					z-index: 10;
				}
			}
		}
	}
	
	.page-bg {
		position: absolute;
		left: 0;
		width: 100%;
		top: 664px;
	}
	
	.page-bg2 {
		position: absolute;
		left: 0;
		width: 100%;
		bottom: 0;
		height: calc( 100% - 1020px);
		background: #fff6ef;
	}
</style>