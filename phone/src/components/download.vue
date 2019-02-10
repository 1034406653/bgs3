<template>
	<div class="download-page">
		<div class="download-page-content">
			<img src="../assets/img/download-logo.png" class="logo" />
			<p class="p1">BGS V1.0.0</p>
			<p class="p2">Block Game Square</p>
			<p class="p3" v-html='dataListActive.p3'></p>
			<div class="QR-code-box">
				<img src="../assets/img/download-downloadPage.png" />
			</div>
			<div class="btn android-btn">
				<div @click="handleAndroidDownload">
					<img src="../assets/img/download-android-icon.png" />
					<span>Android</span>
				</div>
			</div>
			<div class="btn ios-btn">
				<a href="itms-services://?action=download-manifest&url=https://dl.bgsgame.com/main.plist">
					<img src="../assets/img/download-ios-icon.png" />
					<span>iOS</span>
				</a>
			</div>
			<p class="p4" v-html="dataListActive.p4" @click="courseShow=true"></p>
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
		<div class="courseBox" v-if="courseShow">
			<b @click="courseShow=false"></b>
			<img src="@/assets/img/download_course.png" />
		</div>
		<div class="androidShadow" v-if="androidShadowShow">
			<img src="@/assets/img/downloadAndroidShadow.png" />
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
				androidShadowShow: false,
				dataListActive: {},
				dataListC: {
					EnglishActive: false,
					p3: "BGS是一个集合基于ETH、EOS等市面上主流公链 开发的DAPP游戏分发平台",
					p4: "苹果安装简易教程",
					footerSpan1: "官方微信",
					footerSpan2: "官方电报群:",
				},
				dataListE: {
					EnglishActive: true,
					p3: "BGS is a game distribution platform which was developed by integrating DAPP based on the mainstream public chain in the market such as ETH and EOS",
					p4: "Apple Installation Tutorial",
					footerSpan1: "Wechat",
					footerSpan2: "Telegram:",
				},
				courseShow: false,
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
			handleAndroidDownload() {
				var ua = window.navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == 'micromessenger') {
					this.androidShadowShow=true;
				} else {
					window.location.href='http://bgsgame.com/bgs.apk';
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.download-page {
		width: 100%;
		height: auto;
		position: relative;
		text-align: center;
		.courseBox {
			position: absolute;
			width: 100%;
			height: auto;
			left: 0;
			top: -88px;
			img {
				display: block;
				width: 100%;
				height: auto;
			}
			b {
				position: absolute;
				left: 40px;
				top: 40px;
				width: 130px;
				height:120px;
			}
		}
		.androidShadow {
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: rgba(0,0,0,0.5);
			img {
				display: block;
				width: 80%;
				float: right;
				height: auto;
			}
		}
		.download-page-content {
			width: 100%;
			min-height: calc( 100% - 120px);
			overflow: auto;
			padding-top: 67px;
			.logo {
				width: 141px;
				height: 141px;
				margin: 0 auto;
			}
			.p1 {
				width: 110px;
				line-height: 20px;
				font-size: 20px;
				color: #999;
				margin: 0 auto;
				padding-top: 14px;
			}
			.p2 {
				width: 520px;
				line-height: 52px;
				font-size: 52px;
				color: #333;
				margin: 0 auto;
				padding-top: 38px;
			}
			.p3 {
				width: 550px;
				line-height: 30px;
				font-size: 24px;
				color: #333;
				margin: 0 auto;
				padding-top: 18px;
				padding-bottom: 36px;
			}
			.p4 {
				width: 100%;
				height: auto;
				line-height: 24px;
				font-size: 24px;
				color: #FF6316;
				margin: 0 auto;
				text-decoration: underline;
				text-align: center;
				padding-bottom: 130px;
			}
			.QR-code-box {
				width: 233px;
				height: 233px;
				border: 4px solid rgba(255, 148, 61, 1);
				border-radius: 10px;
				margin: 0 auto;
				margin-bottom: 28px;
				position: relative;
				img {
					width: 209px;
					height: 209px;
					position: absolute;
					left: 50%;
					margin-left: -104px;
					top: 9px;
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
				a {
					display: block;
					margin: 0 auto;
					width: 378px;
					height: 88px;
					border-radius: 40px;
					line-height: 88px;
					color: #fff;
					font-size: 32px;
					font-weight: 600;
					overflow: hidden;
					img {
						float: left;
					}
					span {
						float: left;
					}
				}
				div {
					display: block;
					margin: 0 auto;
					width: 378px;
					height: 88px;
					border-radius: 40px;
					line-height: 88px;
					color: #fff;
					font-size: 32px;
					font-weight: 600;
					overflow: hidden;
					img {
						float: left;
					}
					span {
						float: left;
					}
				}
			}
			.android-btn {
				a {
					img {
						width: 35px;
						height: 42px;
						margin-left: 100px;
						margin-right: 20px;
						margin-top: 22px;
					}
				}
				div {
					img {
						width: 35px;
						height: 42px;
						margin-left: 100px;
						margin-right: 20px;
						margin-top: 22px;
					}
				}
			}
			.ios-btn {
				a {
					img {
						width: 33px;
						height: 41px;
						margin-left: 135px;
						margin-right: 20px;
						margin-top: 22px;
					}
				}
				div {
					img {
						width: 33px;
						height: 41px;
						margin-left: 135px;
						margin-right: 20px;
						margin-top: 22px;
					}
				}
			}
		}
	}
</style>