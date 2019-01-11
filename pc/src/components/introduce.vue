<template>
	<div class="introduce-main-box">
		<div class="introduce-main-bg"></div>
		<div class="introduce-main">
			<div class="part part1">
				<div class="introduce-title">
					<span>{{dataListActive.part1.introduceTitle}}</span>
					<b></b>
				</div>
				<div class="part1-pic1">
					<div class="part1-text">
						<p class="p1 p1-1" v-html="dataListActive.part1.part1Pic1.p11"></p>
						<p class="p2 p2-1" v-html="dataListActive.part1.part1Pic1.p21"></p>
						<p class="p1 p1-2" v-html="dataListActive.part1.part1Pic1.p12"></p>
						<p class="p2 p2-2" v-html="dataListActive.part1.part1Pic1.p22"></p>
						<p class="p1 p1-3" v-html="dataListActive.part1.part1Pic1.p13"></p>
						<p class="p2 p2-3" v-html="dataListActive.part1.part1Pic1.p23"></p>
						<p class="p1 p1-4" v-html="dataListActive.part1.part1Pic1.p14"></p>
						<p class="p2 p2-4" v-html="dataListActive.part1.part1Pic1.p24"></p>
						<p class="p1 p1-5" v-html="dataListActive.part1.part1Pic1.p15"></p>
						<p class="p2 p2-5" v-html="dataListActive.part1.part1Pic1.p25"></p>
						<p class="p1 p1-6" v-html="dataListActive.part1.part1Pic1.p16"></p>
						<p class="p2 p2-6" v-html="dataListActive.part1.part1Pic1.p26"></p>
					</div>
				</div>
				<div class="part1-content">
					<div class="content-left">
						<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']" v-html="dataListActive.part1.part1Content.contentLeft.p1"></p>
						<b></b>
						<p class="p2" v-html="dataListActive.part1.part1Content.contentLeft.p2">
						</p>
					</div>
					<div class="content-right">
						<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']" v-html="dataListActive.part1.part1Content.contentRight.p1"></p>
						<p :class="[{EnglishActive:dataListActive.EnglishActive},'p2']" v-html="dataListActive.part1.part1Content.contentRight.p2"></p>
						<p :class="[{EnglishActive:dataListActive.EnglishActive},'p3']" v-html="dataListActive.part1.part1Content.contentRight.p3"></p>
						<p :class="[{EnglishActive:dataListActive.EnglishActive},'p4']" v-html="dataListActive.part1.part1Content.contentRight.p4"></p>
					</div>
				</div>
			</div>
			<div class="part part2">
				<div class="introduce-title">
					<span>{{dataListActive.part2.title}}</span>
					<b></b>
				</div>
				<div class="part2-pic">
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p1']">{{dataListActive.part2.p1}}</p>
					<p :class="[{EnglishActive:dataListActive.EnglishActive},'p2']">{{dataListActive.part2.p2}}</p>
				</div>
			</div>
			<div class="part part3">
				<div class="introduce-title">
					<span>{{dataListActive.part3.title}}</span>
					<b></b>
				</div>
				<p>{{dataListActive.part3.p1}}</p>
				<div class="part3-pic"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Introduce',
		props: ['languageType'],
		data() {
			return {
				dataListActive: {},
				dataListC: {
					EnglishActive: false,
					part1: {
						introduceTitle: "进程规划",
						part1Pic1: {
							p11: "Q4 2018年",
							p21: "对接市面上基于ETH、EOS等主链上的DAPP尽量将以上主链的DAPP全部引入平台",
							p12: "Q1 2019年",
							p22: "DAPP平台上线<br />官网www.bgsgame.com/io上线<br />用户量突破100万，日活破万",
							p13: "Q2 2019年",
							p23: "BGS 2.0版本开发上线，引入波场（tron）<br />和小蚁（neo）公链，并接入相应DAPP，用<br />户量破500万,日活破10万",
							p14: "Q3 2019年",
							p24: "成立项目基金<br />孵化和资助全球DAPP方开发<br />更多更好的DAPP提供给游戏玩家",
							p15: "Q4 2019年",
							p25: "注册用户达千万<br />日活达百万",
							p16: "2020年",
							p26: "完善DAPP<br />赋能BGS新价值",
						},
						part1Content: {
							contentLeft: {
								p1: "BGS代币的分发",
								p2: "发行量：10亿，总量恒定，永不增发。<br /> 团队激励：20%，即2亿。将用于创始团队激励，持续<br /> 的BGS平台开发、运营与市值管理等。 <br /> 海外公开募集：30%，即3亿。用户是持币即分红模式。<br /> 空投奖励：5%，即0.5亿。是指给推广即分红模式。<br /> 挖矿奖励：45%，即4.5亿。消费即挖矿。采用游戏即<br /> 分红的模式，采用黄金比例减半衰减机制，挖完为<br /> 止。",
							},
							contentRight: {
								p1: "挖矿奖励",
								p2: "团队奖励",
								p3: "海外公开募资",
								p4: "空投奖励",
							}
						},
					},
					part2: {
						title: "分发平台",
						p1: "互联网用户",
						p2: "DAPP项目方",
					},
					part3: {
						title: "全球合伙人",
						p1: "在全世界设立8个超级合伙人，以更快的速度，链接全球各地的DAPP开发商。",
					},
				},
				dataListE: {
					EnglishActive: true,
					part1: {
						introduceTitle: "Process planning",
						part1Pic1: {
							p11: "2018 Q4",
							p21: "DAPP in the market based on ETH, EOS and other main chains, trying to bring all the DAPPs of the above main chains into the platform",
							p12: "2019 Q1",
							p22: "Launching DAPP platform and official website www.bgsgame.com/io, platform users exceeded 10 million,<br /> the daily active <br /> subscriber exceeded <br /> 10,000",
							p13: "2019 Q2",
							p23: "Adding the TRX&NEO main chains into the platform, platform users exceeded 50 million, the daily active subscriber exceeded 100,000",
							p14: "2019 Q3",
							p24: "Establishing a project fund and <br /> incubate global DAPP parties to develop more and better DAPPs for game player",
							p15: "2019 Q4",
							p25: "Registered users reach tens of millions and daily active subscriber reaches a million",
							p16: "2020",
							p26: "Empower a new value for BGS",
						},
						part1Content: {
							contentLeft: {
								p1: "BGS TOKEN DISTRIBUTION",
								p2: "Amount of distribution: 1 billion, the amount is constant.<br />Team incentive: 20%, namely 0.2 billion. It will be applied into founding team incentive, constant BGS platform development, operation and market value management, etc <br />Overseas public offering: 30%, namely 0.3 billion. Once users hold tokens they can join in sharing dividends.<br />Air-drop reward: 5%, namely 0.05 billion. For promotion, and participation in profit.Mining reward: 45%, namely 0.45 billion. Consumption means mining. Adopt the model that game means participation in profit, golden ratio halving attenuation mechanism, until it is dug out.",
							},
							contentRight: {
								p1: "Mining reward",
								p2: "Team incentive",
								p3: "Overseas public offering",
								p4: "Air-drop reward",
							}
						},
					},
					part2: {
						title: "Distribution Platform",
						p1: "Internet user",
						p2: "DAPP Developers",
					},
					part3: {
						title: "Global super partners",
						p1: "8 super partners are established worldwide, thus to link with global DAPP developers faster",
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
		watch: {
			languageType(val, oldval) {
				console.log(val);
				if(val == 'english') {
					this.dataListActive = this.dataListE
				} else {
					this.dataListActive = this.dataListC
				}
			}
		}

	}
</script>

<style scoped="scoped">
	@import url("../assets/css/introduce.css");
</style>