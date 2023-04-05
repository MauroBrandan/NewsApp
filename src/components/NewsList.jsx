import Image from 'next/image'
import AnimatedText from './AnimatedText'

export default function NewsList({ articles }) {
	return (
		<>
			<section>
				<AnimatedText />
				{articles.map((article, index) => (
					<article key={index} className={`article${index + 1}`}>
						<Image
							src={article.urlToImage}
							alt={`Image for the article ${article.title}`}
							width={500}
							height={350}
							priority={index < 2}
						/>
						<h3>{article.title}</h3>
						<small>{article.description}</small>
					</article>
				))}
			</section>

			<style jsx>{`
				@media (min-width: 1024px) {
					section {
						display: grid;
						place-items: center;
						grid-template-columns: repeat(2, 1fr);
						grid-template-rows: repeat(11, 1fr);
						grid-column-gap: 32px;
						grid-row-gap: 32px;
					}
					article {
						margin: 0;
						width: 80%;
						max-width: 800px;
						height: 700px;
						text-align: center;
					}
					.article1 {
						grid-area: 1 / 2 / 3 / 3;
					}
					.article2 {
						grid-area: 2 / 1 / 4 / 2;
					}
					.article3 {
						grid-area: 3 / 2 / 5 / 3;
					}
					.article4 {
						grid-area: 4 / 1 / 6 / 2;
					}
					.article5 {
						grid-area: 5 / 2 / 7 / 3;
					}
					.article6 {
						grid-area: 6 / 1 / 8 / 2;
					}
					.article7 {
						grid-area: 7 / 2 / 9 / 3;
					}
					.article8 {
						grid-area: 8 / 1 / 10 / 2;
					}
					.article9 {
						grid-area: 9 / 2 / 11 / 3;
					}
					.article10 {
						grid-area: 10 / 1 / 12 / 2;
					}
				}
			`}</style>
		</>
	)
}
