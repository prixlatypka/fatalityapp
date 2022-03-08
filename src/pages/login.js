import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Box, Button, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"login"} />
		<Helmet>
			<title>
				Андрей лох 1
			</title>
		</Helmet>
		<Text
			margin="60x 0px 0px 0px"
			color="#ffffff"
			font="30px Gilroy"
			text-align="center"
			sm-text-align="left"
			sm-padding="20px 0px 0px 30px"
			padding="30px 0px 0px 0px"
		>
			Войдите, или пройдите{" "}
			<br />
			регистрацию
		</Text>
		<Text
			margin="20px 0px 0px 0px"
			font="20px Gilroy"
			color="#424242"
			text-align="center"
			sm-margin="20px 0px 0px 30px"
			sm-text-align="left"
		>
			Введите свои данные ниже,{" "}
			<br />
			или войдите при помощи аккаунта Google
		</Text>
		<Box
			min-width="x"
			min-height="px"
			height="65px"
			width="100%"
			display="flex"
			justify-content="center"
			margin="50px 0px 0px 0px"
		>
			<Input
				placeholder-color="LightGray"
				background="#111012"
				placeholder="Введите адрес электронной почты"
				width="380px"
				height="65px"
				border-radius="10px"
				border-color="rgba(228, 232, 236, 0)"
				font="15px Gilroy"
				color="#ffffff"
			/>
		</Box>
		<Box
			min-width="x"
			min-height="px"
			height="65px"
			width="100%"
			display="flex"
			justify-content="center"
			margin="15px 0px 0px 0px"
		>
			<Input
				placeholder-color="LightGray"
				placeholder="Введите пароль"
				width="380px"
				height="65px"
				border-radius="10px"
				border-color="rgba(228, 232, 236, 0)"
				background="#111012"
				font="15px Gilroy"
				color="#ffffff"
				type="password"
			/>
		</Box>
		<Box
			min-width="px"
			min-height="x"
			height="65px"
			width="100%"
			display="flex"
			justify-content="center"
			margin="40px 0px 0px 0px"
		>
			<Button
				width="380px"
				height="65px"
				border-radius="10px"
				font="20px Gilroy"
				background="#8E61DC"
				href="/index"
			>
				Войти
			</Button>
		</Box>
		<Box
			min-width="px"
			min-height="x"
			height="65px"
			width="100%"
			display="flex"
			justify-content="center"
			margin="15px 0px 0px 0px"
		>
			<Button
				width="380px"
				height="65px"
				font="20px Gilroy"
				border-radius="10px"
				background="rgba(142, 97, 220, 0)"
				border-width="2px"
				border-style="solid"
				border-color="#424242"
				href="/index1"
				disabled={false}
				type="button"
			>
				Регистрация
			</Button>
		</Box>
		<Text margin="15px 0px 0px 0px" text-align="center" font="20px Gilroy" color="#424242">
			или
		</Text>
		<Box
			min-height="px"
			width="100%"
			height="50px"
			display="flex"
			justify-content="center"
			margin="15px 0px 0px 0px"
		>
			<Image src="https://uploads.quarkly.io/6225db994badae0018f198e0/images/google%20logo.png?v=2022-03-07T10:31:58.954Z" display="block" width="50px" height="50px" />
		</Box>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6225db994badae0018f198de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});