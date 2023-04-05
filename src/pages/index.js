import PageLayout from '@/components/PageLayout'
import NewsList from '@/components/NewsList'

export default function Home(props) {
	return (
		<PageLayout title='Home'>
			<NewsList {...props} />
		</PageLayout>
	)
}

export async function getServerSideProps() {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`
	)
	const { articles } = await response.json()

	return { props: { articles } }
}
