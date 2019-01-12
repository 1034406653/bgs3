<template>
	<div class="feedback-page">
		<div class="header-title"><span>{{dataListActive.title}}</span><b></b></div>
		<div class="hintText"><span>{{dataListActive.hintText}}</span><b></b></div>
		<div class="input-box">
			<span>{{dataListActive.name}}</span>
			<input type="text" v-model="pFeedbackData.name" />
			<p><b>{{dataListActive.unrequired}}</b></p>
		</div>
		<div class="input-box">
			<span>{{dataListActive.phone}}</span>
			<input type="text" v-model="pFeedbackData.mobile" />
			<p><b>{{dataListActive.unrequired}}</b></p>
		</div>
		<div class="input-box">
			<span>{{dataListActive.theme}}</span>
			<input type="text" v-model="pFeedbackData.title" />
			<p><b>{{dataListActive.required}}</b><i>*</i></p>
		</div>
		<div class="input-box">
			<span>{{dataListActive.idear}}</span>
			<textarea v-model="pFeedbackData.details"></textarea>
			<p><b>{{dataListActive.required}}</b><i>*</i></p>
		</div>
		<div class="submitBtn" :class='{submitBtnActive}' @click="handleSubmit">
			{{dataListActive.submit}}
		</div>
		<div class="toast-box" v-show="toastShow">
			<p v-html='dataListActive.toast'></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Feedback',
		props: ['languageType'],
		data() {
			return {
				timer: null,
				submitBtnActive: false,
				toastShow: false,
				pFeedbackData: {
					name: "",
					mobile: "",
					title: "",
					details: "",
				},
				dataListActive: {},
				dataListC: {
					EnglishActive: false,
					title: "客户反馈",
					hintText: "为更好地为您提供服务，如您有任何反馈意见或建议，请通过以下方式发送给我们。我们会仔细阅读您的意见。您的反馈意见会被严格保密。",
					name: "姓名：",
					phone: "手机：",
					theme: "主题：",
					idear: "意见：",
					required: "必填",
					unrequired: "选填",
					submit: "提交建议",
					toast: "提交成功<br />感谢您的反馈意见，<br />我们会尽快处理。",
				},
				dataListE: {
					EnglishActive: true,
					title: "Customer Comment",
					hintText: "In order to provide better service for you, please reply any possible feedback or suggests if you have. We’ll take care of it carefully.Your comments will be strictly kept confidential.",
					name: "Name:",
					phone: "Phone:",
					theme: "Comments:",
					idear: "Subject:",
					required: "required",
					unrequired: "optional",
					submit: "Submit",
					toast: "提交成功<br />感谢您的反馈意见，<br />我们会尽快处理。",
				},
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
				if(val == 'english') {
					this.dataListActive = this.dataListE;
				} else {
					this.dataListActive = this.dataListC;
				}
			},
			pFeedbackData: { //深度监听，可监听到对象、数组的变化
				handler(val, oldVal) {
					if(val.title.length > 0 && val.details.length > 0) {
						this.submitBtnActive = true;
					} else {
						this.submitBtnActive = false;
					}
				},
				deep: true
			}
		},
		methods: {
			handleSubmit() {
				if(this.submitBtnActive) {
					this.$axios({
						method: 'post',
						url: '/api/feedback/addFeedback',
						params: this.pFeedbackData,
					}).then(res => {
						if(res.data.code == 0) {
							this.successShow();
						}
					}).catch(res => {
						console.log(res)
					});
				}
			},
			successShow() {
				this.toastShow = true;
				this.timer = setTimeout(() => {
					this.toastShow = false;
					this.$router.push('/home');
				}, 3000);
			}
		}
	}
</script>

<style>
	.feedback-page {
		width: 800px;
		margin: 0 auto;
		height: auto;
		min-height: 800px;
		padding-bottom: 70px;
	}
	
	.feedback-page .header-title {
		width: 100%;
		height: 64px;
		line-height: 60px;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		margin-top: 60px;
		font-size: 42px;
		text-align: center;
		margin-bottom: 80px;
	}
	
	.feedback-page .header-title span {
		display: block;
		text-align: center;
		margin-bottom: 16px;
	}
	
	.feedback-page .header-title b {
		display: block;
		margin: 0 auto;
		width: 101px;
		height: 6px;
		background: rgba(255, 158, 16, 1);
		border-radius: 3px;
	}
	
	.hintText {
		width: 100%;
		height: auto;
		line-height: 24px;
		padding-bottom: 54px;
		font-size: 18px;
		height: auto;
		color: #333;
	}
	
	.feedback-page .input-box {
		width: 100%;
		height: auto;
		padding-bottom: 40px;
		overflow: hidden;
	}
	
	.feedback-page .input-box span {
		float: left;
		width: 130px;
		line-height: 48px;
		font-size: 24px;
		color: rgba(51, 51, 51, 1);
	}
	
	.feedback-page .input-box input {
		float: left;
		width: calc(100% - 220px);
		height: 48px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 5px 11px 1px rgba(255, 114, 25, 0.19);
		border-radius: 4px;
		font-size: 20px;
		color: #666;
		padding: 0 20px;
	}
	
	.feedback-page .input-box textarea {
		float: left;
		width: calc(100% - 220px);
		height: 360px;
		line-height: 28px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 5px 11px 1px rgba(255, 114, 25, 0.19);
		border-radius: 4px;
		border: none;
		outline: none;
		padding: 10px 20px;
		font-size: 20px;
		color: #666;
	}
	
	.feedback-page .input-box p {
		float: left;
		width: 90px;
		font-size: 16px;
		line-height: 40px;
		padding-left: 10px;
		color: #666;
	}
	
	.feedback-page .input-box i {
		color: red;
		margin-left: 8px;
	}
	
	.hint-box {
		width: 100%;
		height: 20px;
	}
	
	.toast-box {
		width: 290px;
		height: 180px;
		font-size: 20px;
		line-height: 36px;
		color: white;
		background: rgba(0, 0, 0, 0.8);
		border-radius: 10px;
		position: fixed;
		top: 180px;
		left: 50%;
		margin-left: -145px;
		text-align: center;
		padding-top: 30px;
	}
	
	.submitBtn {
		width: 180px;
		margin: 10px auto;
		text-align: center;
		margin-bottom: 10px;
		height: 60px;
		background: linear-gradient(-90deg, #999, #ddd);
		border-radius: 30px;
		cursor: pointer;
		font-weight: 600;
		color: #fff;
		font-size: 20px;
		line-height: 60px;
	}
	
	.submitBtnActive {
		cursor: pointer;
		background: linear-gradient(-90deg, rgba(255, 99, 22, 1), rgba(255, 188, 42, 1));
	}
</style>