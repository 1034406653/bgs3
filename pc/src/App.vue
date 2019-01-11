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
				<div class="weixin-qrcode"></div>
				<span class="weixinlabel">官方微信</span>
				<span class="dianbaolabel">官方电报群:</span>
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

					}
				},
				dataListE: {
					header: {
						home: "HOME",
						introduce: "Project Intro",
					},
					footer: {

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