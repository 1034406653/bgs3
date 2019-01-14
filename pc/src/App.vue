<template>
	<div id="app">
		<div class="header clearfloat">
			<div class="logo"></div>
			<ul class="nav clearfloat">
				<router-link tag="li" :to="{ name: 'Home'}">{{dataListActive.header.home}}</router-link>
				<router-link tag="li" :to="{ name: 'Introduce'}">{{dataListActive.header.introduce}}</router-link>
				<li @click="languageChange">{{languageType=="chinese"?"E":"中"}}</li>
			</ul>
		</div>
		<router-view :languageType='languageType' />
		<div class="footer">
			<div class="footer-contact">
				<ul class="footer-iocn-list">
					<li>
						<a href="https://twitter.com/blockgamesquare"><img src="@/assets/img/footer-icon1.png" style="width: 33px; height: 27px;margin-top: 9px;"/></a>
						
					</li>
					<li>
						<a href="https://www.facebook.com/blockgame.square"><img src="@/assets/img/footer-icon2.png" style="width: 18px; height: 33px;margin-top: 6px;"/></a>
						
					</li>
					<li>
						<a href="https://www.weibo.com/blockgamesquare"><img src="@/assets/img/footer-icon3.png"  style="width: 39px; height: 31px;margin-top: 7px;"/></a>
					</li>
				</ul>
				<div class="weixin-qrcode"></div>
				<span class="weixinlabel">{{dataListActive.footer.wechat}}</span>
				<span class="dianbaolabel">{{dataListActive.footer.telegram}}</span>
				<p>t.m/blockgamesquare</p>
				<div class="navFeedBack" @click="$router.push('/feedback')">
					{{dataListActive.footer.feedback}}
				</div>
			</div>
			<p>
				<span>{{dataListActive.footer.bottom}}</span>&nbsp;&nbsp;&nbsp;<span>Copyright © 2018 BLOCKGAME SQUARE All Right Reserved.</span>
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'App',
		data() {
			return {
				languageType: 'chinese',
				qrcodeSow: false,
				isHomeActive: true,
				dataListActive: {

				},
				dataListC: {
					header: {
						home: "首页",
						introduce: "项目介绍",
					},
					footer: {
						feedback:"反馈意见",
						wechat:"官方微信",
						telegram:"官方电报群:",
						bottom:"本网站所有权属于新加坡庞加莱基金会所有,保留所有权利",
					}
				},
				dataListE: {
					header: {
						home: "HOME",
						introduce: "Project Intro",
					},
					footer: {
						feedback:"Customer Comment",
						wechat:"Wechat",
						telegram:"Telegram:",
						bottom:"本网站所有权属于新加坡庞加莱基金会所有,保留所有权利",
					}
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
			isQrcodeSow() {
				this.qrcodeSow = !this.qrcodeSow;
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
		},

	}
</script>
<style>
	@import url("assets/css/base.css");
	@import url("assets/css/comment.css");
</style>