<template>
	<div class="index-main-box">
		<div class="index-main-bg"></div>
		<div class="notice-box" @click="$router.push('/notice')">
			<div class="text-box">
				<p :class={noticeMove}><span>{{dataListActive.notice}}</span></p>
			</div>
		</div>
		<div class="index-main">
			<div :class="[{EnglishActive:dataListActive.EnglishActive},'title1']">{{dataListActive.title1}}</div>
			<div class="title2">{{dataListActive.title2}}</div>
			<div class="nav-box clearfloat">
				<ul class="download-nav">
					<li>
						<a href="http://bgsgame.com/bgs.apk">
							<div class="android-icon"></div>
							<span>Android</span>
						</a>
					</li>
					<li>
						<div class="ios-icon"></div>
						<span>IOS</span>
					</li>
				</ul>
				<ul class="book-nav clearfloat">
					<li>
						<span class="book-download" @click="isBookLanguageShow">{{dataListActive.bookNav.bookDownload}}</span>
						<ul class="book-language" v-if="bookLanguageShow">
							<li>
								<a href="static/BlockgameSquare-whitepaper-c.pdf">中文</a>
							</li>
							<li>
								<a href="static/BlockgameSquare-whitepaper-e.pdf">English</a>
							</li>
						</ul>
					</li>
					<li>
						<span>{{dataListActive.bookNav.wallet}}</span>
					</li>
				</ul>
			</div>
			<div class="card-box">
				<div class="card-title1">
					Block Game SquareV1.0
				</div>
				<div class="card-title2">{{dataListActive.cardBox.cardTitle2}}</div>
				<ul class="clearfloat">
					<li>
						<div class="card-pic1 card-pic">
						</div>
						<b></b>
						<p>{{dataListActive.cardBox.li1}}</p>
					</li>
					<li>
						<div class="card-pic2 card-pic">
						</div>
						<b></b>
						<p>{{dataListActive.cardBox.li2}}</p>
					</li>
					<li>
						<div class="card-pic3 card-pic">
						</div>
						<b></b>
						<p>{{dataListActive.cardBox.li3}}</p>
					</li>
					<li>
						<div class="card-pic4 card-pic">
						</div>
						<p>{{dataListActive.cardBox.li4}}</p>
					</li>
				</ul>
			</div>
			<ul class="part-list">
				<li class="part1">
					<div class="part1-pic"></div>
					<div class="part1-bg"></div>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']">{{dataListActive.partList.li1.p1}}</p>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p2']">{{dataListActive.partList.li1.p2}}</p>
				</li>
				<li class="part2">
					<div class="part2-pic"></div>
					<div class="part2-bg"></div>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']">{{dataListActive.partList.li2.p1}}</p>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p2']">{{dataListActive.partList.li2.p2}}</p>
				</li>
				<li class="part3">
					<div class="part3-pic"></div>
					<div class="part3-bg"></div>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']">{{dataListActive.partList.li3.p1}}</p>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p2']">{{dataListActive.partList.li3.p2}}</p>
				</li>
				<li class="part4">
					<div class="part4-pic"></div>
					<div class="part4-bg"></div>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']">{{dataListActive.partList.li4.p1}}</p>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p2']">{{dataListActive.partList.li4.p2}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		props: ['languageType'],
		data() {
			return {
				noticeMove:false,
				bookLanguageShow: false,
				dataListActive: {},
				dataListC: {
					EnglishActive: false,
					notice:"",
					title1: '玩转DAPP从这里开始',
					title2: '为DAPP而生，有趣，安全，易用的区块链游戏广场',
					bookNav: {
						bookDownload: '白皮书下载',
						wallet: "钱包收益",
					},
					cardBox: {
						cardTitle2: "BGS是一个集合基于ETH、EOS等市面上主流公链开发的DAPP游戏分发平台",
						li1: "支持主流公链生态",
						li2: "玩DAPP操作繁琐？我帮你",
						li3: "DAPP币圈资讯早知道",
						li4: "开放包容的全球最大DAPP广场",
					},
					partList: {
						li1: {
							p1: "支持主流公链生态",
							p2: "Block Game Square V1.0上线钱包功能，从ETH到EOS，从办公室到街头，随时随地想玩就玩。",
						},
						li2: {
							p1: "玩DAPP操作繁琐？我帮你",
							p2: "不懂数字货币买卖？钱包创建操作繁琐？玩转DAPP，我们是专业的。",
						},
						li3: {
							p1: "DAPP&区块链资讯早知道",
							p2: "最新的DAPP日活数据，让你知道大家都喜欢玩什么。最新链圈资讯，让你了解行业趋势走向。",
						},
						li4: {
							p1: "开放包容的全球最大DAPP 分发平台",
							p2: "斥资开发DAPP，日活才勉强过百？这里有数千万互联网用户等待你的出现",
						},
					}
				},
				dataListE: {
					EnglishActive: true,
					notice:"",
					title1: 'Starting from here, enjoying DAPP games',
					title2: 'Born for the DAPP, interesting, safe, available DAPP game square',
					bookNav: {
						bookDownload: ' White paper Download',
						wallet: "Profit from wallet",
					},
					cardBox: {
						cardTitle2: "BGS is a game distribution platform which was developed by integrating DAPP based on the mainstream public chain in the market such as ETH and EOS",
						li1: "Fully support mainstream public chain ecosystem",
						li2: "Hard to play the DAPP? let us help you",
						li3: "Stay tuned on the latest news about the DAPP",
						li4: "The world's largest open and inclusive DAPP square",
					},
					partList: {
						li1: {
							p1: "Fully support mainstream public chain ecosystem",
							p2: "A collection of wallet functions in the BGS V1.0, from ETH to EOS, from office to street, you can enjoy the DAPP anytime and anywhere",
						},
						li2: {
							p1: "Hard to play the DAPP? let us help you",
							p2: "Do not understand digital currency trading? Hard to create a digital wallet? Trust us, we are professional",
						},
						li3: {
							p1: "Stay tuned on the latest news about the DAPP",
							p2: "The newest user daily live data will suggest you which DAPP you can choose. The latest news will tell you the direction of industry trends",
						},
						li4: {
							p1: "The world's largest open and inclusive DAPP square",
							p2: "Invest heavily in developing a DAPP, but just barely crosses 100 users? There are millions of Internet users waiting for you",
						},
					}
				}
			}
		},
		created() {
			if(this.languageType == 'english') {
				this.dataListActive = this.dataListE
				if(this.dataListActive.notice.length > 12) {
					this.noticeMove = true;
				}
			} else {
				this.dataListActive = this.dataListC
				if(this.dataListActive.notice.length > 6) {
					his.noticeMove = true;
				}
			}
		},
		mounted(){
			this.init();
		},
		watch: {
			languageType(val, oldval) {
				console.log(val);
				if(val == 'english') {
					this.dataListActive = this.dataListE
					if(this.dataListActive.notice.length > 12) {
					this.noticeMove = true;
				}
				} else {
					this.dataListActive = this.dataListC
					if(this.dataListActive.notice.length > 6) {
					his.noticeMove = true;
				}
				}
			}
		},
		methods: {
			isBookLanguageShow() {
				
				this.bookLanguageShow = !this.bookLanguageShow;
			},
			init() {
				this.$axios({
					method: 'get',
					url: '/api/notice/getNotice',
				}).then(res => {
					console.log(res);
					if(res.data.code == 0) {
						this.dataListC.notice = res.data.data[0].title;
						this.dataListE.notice = res.data.data[0].english_title;
						if(this.dataListActive.notice.length > 6) {
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
<style scoped>
	@import url("../assets/css/index.css");
	.index-main .title1.EnglishActive {
		font-size: 45px;
	}
	
	.part-list li .p1.EnglishActive {
		font-size: 30px;
		line-height: 40px;
	}
	
	.part-list .part4 .p2.EnglishActive {
		top: 230px;
	}
</style>