import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ImageBackground } from 'react-native';
import * as Theme from '../theme/Theme';
const { width, height } = Dimensions.get('window');


export default class Profile extends Component {
	constructor(props: Readonly<{}>) {
		super(props)
	}
	render() {
		const imageLink = { uri: "https://images.unsplash.com/photo-1577854807863-e13e704c97c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" }
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerInner}>
						<View style={styles.topIcons}>
							<Ionicons name="ios-settings" size={30} color={Theme.colors.blue20} />
							<Ionicons name="ios-notifications" size={30} color={Theme.colors.blue20} />
						</View>
						<View style={styles.photoContainer}>
							<ImageBackground source={imageLink} style={styles.photo} >
								<View style={styles.onlineLight} />
							</ImageBackground>
						</View>
						<View style={styles.nameAndEmail}>
							<Text style={styles.welcomeText}>Eric Manassee</Text>
							<Text style={styles.emailText}>eric.manssee@gmail.com </Text>
						</View>
						<View style={styles.bio}>
							<Text style={styles.emailText}>
								This is my bio and thank you for tsking time to read it as it means a lot to me.</Text>
						</View>
					</View>
				</View>
				<View style={styles.footer}>
					<View style={styles.innerFooter}>
						<View style={styles.listContainer}>
							<View style={styles.icon}>
							<Ionicons name="ios-location-sharp" size={30} color={Theme.colors.blue100} />
							</View>
							<View style={styles.cardInfo}>
								<Text style={[styles.cardText, {fontWeight: '700',}]}>Location</Text>
								<Text style={styles.cardText}>Cape Town </Text>
							</View>
						</View>
						<View style={styles.listContainer}>
							<View style={styles.icon}>
							<Ionicons name="ios-location-sharp" size={30} color={Theme.colors.blue100} />
							</View>
							<View style={styles.cardInfo}>
								<Text style={[styles.cardText, {fontWeight: '700',}]}>location</Text>
								<Text style={styles.cardText}>Cape Town </Text>
							</View>
						</View>
						<View style={styles.listContainer}>
							<View style={styles.icon}>
							<Ionicons name="ios-location-sharp" size={30} color={Theme.colors.blue100} />
							</View>
							<View style={styles.cardInfo}>
								<Text style={[styles.cardText, {fontWeight: '700',}]}>location</Text>
								<Text style={styles.cardText}>Cape Town </Text>
							</View>
						</View>
					</View>
				</View>

			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Theme.colors.blue100,
	},
	header: {
		flex: 1.3,

		backgroundColor: Theme.colors.white,
		justifyContent: 'center',
	},
	headerInner: {
		flex: 1,
		borderBottomRightRadius: 60,
		overflow: 'hidden',
		backgroundColor: Theme.colors.blue100,
		justifyContent: 'center',
	},
	topIcons: {
		justifyContent: 'space-between',
		top: 50,
		width: width - 60,
		alignSelf: 'center',
		flexDirection: 'row',
		position: 'absolute'

	},
	icon: {
		backgroundColor: Theme.colors.blue50,
		width: 50,
		height: 50,
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	photo: {
		width: 116,
		height: 116,
	},
	photoContainer: {
		width: 116,
		height: 116,
		borderRadius: 30,
		alignSelf: 'center',
		overflow: 'hidden'

	},
	onlineLight: {
		width: 30,
		height: 30,
		borderRadius: 30,
		backgroundColor: Theme.colors.green,
		borderColor: Theme.colors.blue100,
		borderWidth: 4,
		alignSelf: 'flex-end',
		marginEnd: 5,

	},
	bio: {
		justifyContent: 'center',
		top: 60,
		borderTopWidth: 1,
		width: width - 80,
		alignSelf: 'center',
		paddingTop: 20,
		borderColor: Theme.colors.white,

	},
	nameAndEmail: {
		justifyContent: 'center',
		top: 40,
	},
	emailText: {
		color: Theme.colors.blue20,
		fontSize: 14,
		textAlign: 'center',
	},
	welcomeText: {
		textAlign: 'center',
		fontSize: 34,
		marginVertical: 10,
		color: Theme.colors.white,
		fontWeight: '900',
		alignSelf: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
	},
	subHeader: {
		fontSize: 26,
		textAlign: 'center',
		// marginVertical: 10,
		color: Theme.colors.white,
		fontWeight: '700',
		alignSelf: 'center',
		top: 70,
		borderBottomColor: 'white',
	},
	headerTopText: {
		color: Theme.colors.white,
		position: 'absolute',
		zIndex: 99,
		alignSelf: 'center',
	},
	headingText: {
		textAlign: 'center',
		fontSize: 24,
		marginVertical: 20,
		color: Theme.colors.blue100,
	},

	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		top: 40
	},
	button: {
		width: width - 80,
		height: 60,
		borderRadius: 30,
		backgroundColor: Theme.colors.blue20,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginBottom: 20,
	},
	buttonText: {
		color: Theme.colors.blue100,
		textAlign: 'center',
		fontSize: 16,
		paddingLeft: 20
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		marginBottom: 20,
		color: Theme.colors.blue100,
	},
	footer: {
		flex: 1,
		backgroundColor: Theme.colors.blue100,
		justifyContent: 'center',
	},
	innerFooter: {
		flex: 1,
		backgroundColor: Theme.colors.white,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius: 60,
	},
	signTextContainer: {
		justifyContent: 'center',
		alignSelf: 'center',
		marginVertical: 40,
		flexDirection: 'row'
	},
	signText: {
		fontWeight: 'normal',
		fontSize: 16,
		color: Theme.colors.white,
	},
	signTextLink: {
		fontWeight: '700',
		marginHorizontal: 10,
		fontSize: 16,
		color: Theme.colors.green,

	},
	termsText: {
		fontWeight: 'normal',
		fontSize: 10,
	},
	termsTextLink: {
		fontWeight: 'normal',
		fontSize: 10,
		paddingVertical: 6,
		textDecorationLine: "underline"
	},
	listContainer: {
		backgroundColor: Theme.colors.blue20,
		borderRadius: 12,
		height: 71,
		width: width - 80,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	cardInfo: {
		backgroundColor: Theme.colors.blue20,
		width: 217,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
	},
	cardText: {
		color: Theme.colors.blue100,
		fontSize: 14,
		textAlign: 'left',
		paddingLeft: 6
	}

});
