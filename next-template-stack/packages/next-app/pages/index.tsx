import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Link from 'next/link'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	link: {
		color: 'blue',
	},
	textContainer: {
		alignItems: 'center',
		marginTop: 16,
	},
	text: {
		alignItems: 'center',
		fontSize: 24,
		marginBottom: 24,
  },
})

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <View style={styles.textContainer}>
        <Link style={styles.link} href="/page/about">
          Check Api :D
        </Link>
      </View>
    </View>
	)
}
