import Link from 'next/link'

export default function Header() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<h1>
							<Link href={'/'}>Tech News</Link>
						</h1>
					</li>
				</ul>
				<ul>
					<li>
						<a href='https://newsapi.org/' target='_blank'>
							News API
						</a>
					</li>
					<li>
						<a href='https://techcrunch.com/' target='_blank'>
							TechCrunch
						</a>
					</li>
					<li>
						<a
							href='https://github.com/MauroBrandan/NewsApp'
							target='_blank'
							role='button'
						>
							GitHub
						</a>
					</li>
				</ul>
			</nav>

			<style jsx>{`
				nav {
					padding: 0 16px;
				}

				nav li > * {
					color: var(--primary-inverse);
				}
			`}</style>
		</>
	)
}
