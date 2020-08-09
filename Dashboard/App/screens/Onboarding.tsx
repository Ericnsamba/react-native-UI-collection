import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ImageBackground, Platform, Dimensions, Pressable } from 'react-native';
import * as Theme from '../theme/Theme';
const { width, height } = Dimensions.get('window');

export default class Onboarding extends Component {
	render() {
		const imageLink = { uri: "https://images.unsplash.com/photo-1577854807863-e13e704c97c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" }
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<ImageBackground source={imageLink}
						style={styles.bgImage}>
						<View style={{ justifyContent: 'center', flex: 1 }}>
							<Text style={styles.welcomeText}>Dashboard</Text>
							<Text style={[styles.text, styles.headerTopText]}>For ordinary people</Text>
							<View style={styles.imageOverlay} />
						</View>

					</ImageBackground>
				</View>

				<View style={styles.footer}>
					<View style={{ top: -40 }}>
						<Text style={styles.headingText}>Welcome to Dashboard</Text>
						<Text style={styles.text}>A platform for ordinary people with ideas that can can the world. Meet people, join groups, chat online and be a part of creating next big thing.</Text>
					</View>
					<Pressable
						onPress={() => this.props.navigation.navigate('Login',)
						}
						style={({ pressed }) => [
							{
								opacity: pressed ? 0.7 : 1,
								backgroundColor: pressed ? Theme.colors.blue50 : Theme.colors.blue100,
							},
							styles.button,
							,
						]}
					>
						<Text style={styles.buttonText}>Next</Text>
					</Pressable>
				</View>


			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	header: {
		flex: Platform.OS === 'ios' ? 2 : 5,
		backgroundColor: Theme.colors.white,
		borderBottomRightRadius: 60,
		overflow: 'hidden',
	},
	bgImage: {
		flex: 1,
		width: width,

	},
	imageOverlay: {
		backgroundColor: Theme.colors.blue100,
		flex: 1,
		opacity: 0.7,
		justifyContent: 'center',
	},
	welcomeText: {
		textAlign: 'center',
		fontSize: 34,
		marginVertical: 10,
		color: Theme.colors.white,
		fontWeight: '900',
		position: 'absolute',
		zIndex: 99,
		alignSelf: 'center'
	},
	headerTopText: {
		color: Theme.colors.white,
		position: 'absolute',
		zIndex: 99,
		alignSelf: 'center',
		bottom: '40%',
	},
	headingText: {
		textAlign: 'center',
		fontSize: 24,
		marginVertical: 20,
		color: Theme.colors.blue100,
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		marginBottom: 20,
		color: Theme.colors.blue100,

	},
	footer: {
		height: 300,
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: Theme.colors.white,
		justifyContent: 'center',
		alignItems: 'center',

	},
	button: {
		width: 240,
		height: 60,
		borderRadius: 30,
		justifyContent: 'center',
	},
	buttonText: {
		color: Theme.colors.white,
		textAlign: 'center',
		fontSize: 16
	},

});
