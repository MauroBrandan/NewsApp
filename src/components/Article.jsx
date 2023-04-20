import Image from 'next/image'

export default function Article({ article }) {
	const { title, urlToImage, description, author, url } = article

	return (
		<>
			<article>
				<header>
					<hgroup>
						<h2>{title}</h2>
						<p>By {author}</p>
					</hgroup>
				</header>

				<div className='img'>
					<Image
						src={urlToImage}
						alt={`Image for the article ${title}`}
						width={700}
						height={550}
						priority
					/>
				</div>

				<p>{description}</p>

				<div className='btn'>
					<a href={url} target='_blank' rel='noopener noreferrer' role='button'>
						See the whole news
					</a>
				</div>
			</article>

			<style jsx>{`
				article {
					margin-top: -24px;
				}
				.img {
					display: flex;
					justify-content: center;
					margin-bottom: 36px;
				}
				.btn {
					display: flex;
					justify-content: center;
				}
				a {
					background-color: inherit;
				}
				a:hover {
					background-color: var(--primary-hover);
				}
			`}</style>
		</>
	)
}
