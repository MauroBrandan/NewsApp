import PageLayout from '@/components/PageLayout'
import Article from '@/components/Article'

export default function PostPage({ singleArticle }) {
	const { title } = singleArticle

	return (
		<PageLayout title={title}>
			<Article article={singleArticle} />
		</PageLayout>
	)
}

export async function getServerSideProps({ params }) {
	const id = params?.id
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`
	)
	const { articles } = await response.json()
	const singleArticle = articles[id]

	return { props: { singleArticle } }
}
