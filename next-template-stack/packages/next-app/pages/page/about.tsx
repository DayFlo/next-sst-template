import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	text: {
		alignItems: 'center',
		fontSize: 24,
		marginBottom: 24,
	},
	link: {
		color: 'blue',
	},
})

export default function ApplicationPage() {
  const [success, setSuccess] = useState('')
  useEffect(() => {
		async function fetchData() {
      const res = await fetch('/api/')
      console.log(JSON.stringify(res))
      const json = await res.json()
      console.log(JSON.stringify(json))
			setSuccess(json.success || "false")
		}
		fetchData()
	}, [])


	return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <a href='/'>{ success ? 'Successfully' : 'Unsuccessfully' } Pinged API, Go Back?</a>
    </View>

	)
}
