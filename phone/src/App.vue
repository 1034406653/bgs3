<template>
	<div id="app">
		<div class="header clearfloat">
			<div class="logo" @click="navHome"></div>
			<div class="header-nav">
				<div class="header-nav-btn-box">
					<div class="header-nav-btn" @click='isNavBoxShow'></div>
				</div>
				<div class="languageBtn" @click="languageChange">{{languageType=='chinese'?'E':'中'}}</div>
				<div  :class="[{EnglishActive:dataListActive.EnglishActive},'nav-box']" v-if="navBoxShow">
					<b></b>
					<ul>
						<li class="navtoIntroduce" @click="navIntroduce">
							<div class="header-nav-icon header-nav-icon1">
							</div>
							<span>{{dataListActive.header.introduce}}</span>
						</li>
						<li>
							<div class="header-nav-icon header-nav-icon2">
							</div>
							<span>{{dataListActive.header.wallet}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<router-view :languageType="languageType" />
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				languageType: 'chinese',
				navBoxShow: false,
				dataListActive: {},
				dataListC: {
					EnglishActive: false,
					header: {
						wallet: "钱包收益",
						introduce: "项目介绍",
					},
				},
				dataListE: {
					EnglishActive: true,
					header: {
						wallet: "Profit from wallet",
						introduce: "Project Intro",
					},
					
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
		methods: {
			isNavBoxShow() {
				this.navBoxShow = !this.navBoxShow;
			},
			navHome() {
				this.$router.push({
					path: "/"
				})
			},
			navIntroduce() {
				this.$router.push({
					path: "/introduce"
				})
			},
			languageChange() {
				if(this.languageType == 'chinese') {
					this.languageType = 'english'
					this.dataListActive = this.dataListE
				} else {
					this.languageType = 'chinese'
					this.dataListActive = this.dataListC
				}
			}
		}
	}
</script>

<style lang="scss" type="text/css">
	#app {
		width: 100%;
		height: 100%;
	}
	
	.header {
		width: 100%;
		height: 88px;
		background: #fffdfa;
		box-shadow: 0px 1px 10px 0px rgba(4, 0, 0, 0.17);
		position: relative;
		.logo {
			width: 229px;
			height: 46px;
			margin-left: 30px;
			margin-top: 21px;
			float: left;
			background: url(assets/img/Logo@2x.png);
			background-size: 100% 100%;
		}
		.languageBtn {
			position: absolute;
			right: 100px;
			width: 50px;
			height: 50px;
			text-align: center;
			line-height: 50px;
			top: 20px;
			font-size: 28px;
			color: rgba(255, 166, 32, 1);
		}
		.header-nav {
			float: right;
			width: 84px;
			height: 88px;
			position: relative;
			padding-right: 10px;
			padding-top: 24px;
			.header-nav-btn-box {
				width: 50px;
				height: 40px;
				padding-top: 6px;
				cursor: pointer;
				.header-nav-btn {
					width: 34px;
					height: 28px;
					margin: 0 auto;
					background: url(assets/img/header-nav-btn.png);
					background-size: 100% 100%;
				}
			}
			.nav-box {
				width: 175px;
				height: auto;
				overflow: hidden;
				position: absolute;
				right: 30px;
				top: 80px;
				z-index: 1000;
				b {
					display: block;
					margin-left: 140px;
					width: 0;
					height: 0;
					border-left: 8px solid transparent;
					border-right: 8px solid transparent;
					border-top: 14px solid transparent;
					border-bottom: 14px solid #FF952E;
				}
				ul {
					width: 100%;
					padding: 0 12px;
					height: 120px;
					background: #FF952E;
					li {
						width: 100%;
						height: 60px;
						line-height: 58px;
						border-bottom: 1px solid #fff;
						color: #fff;
						overflow: hidden;
						.header-nav-icon {
							width: 28px;
							height: 32px;
							float: left;
							margin-top: 12px;
						}
						.header-nav-icon1 {
							background: url(assets/img/header-nav-icon1.png);
							background-size: 100% 100%;
						}
						.header-nav-icon2 {
							background: url(assets/img/header-nav-icon2.png);
							background-size: 100% 100%;
						}
						span {
							float: left;
							line-height: 58px;
							font-size: 24px;
							padding-left: 12px;
						}
					}
					li:last-child {
						border: none;
						img {
							width: 28px;
							height: 23px;
							float: left;
							margin-top: 18px;
						}
						span {
							padding-left: 14px;
						}
					}
				}
			}
			.EnglishActive{
				width: 250px;
				b{
					margin-left: 210px;
				}
			}
		}
	}
	
	.footer {
		width: 100%;
		height: 120px;
		background: rgba(255, 158, 16, 1);
		overflow: hidden;
		.footer-contact {
			width: 510px;
			height: 54px;
			line-height: 54px;
			color: #fff;
			font-size: 20px;
			margin: 0 auto;
			margin-top: 18px;
			margin-bottom: 12px;
			.weixin-qrcode {
				float: left;
				width: 54px;
				height: 54px;
				background: url(assets/img/footer-6-wx-qrcode.png);
				background-size: 100% 100%;
				margin-right: 14px;
			}
			span.weixinlabel {
				margin-right: 30px;
			}
			p {
				float: left;
				line-height: 54px;
				padding-left: 6px;
				font-size: 20px;
			}
			span {
				float: left;
			}
		}
		p {
			text-align: center;
			color: white;
			font-size: 14px;
			line-height: 20px;
			span {
				display: inline-block;
				padding: 0 20px;
			}
		}
		.QR-code {
			width: 131px;
			height: 131px;
			position: absolute;
			bottom: 86px;
			left: 13px;
			border: 4px solid rgba(255, 158, 16, 1);
			border-radius: 10px;
			background: #fff;
			img {
				width: 115px;
				height: 115px;
				margin: 3px;
			}
		}
	}
</style>