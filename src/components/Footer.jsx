export default function Footer() {
	return (
		<>
			<footer>
				<p>
					Code by <br />
					<a href='https://maurobrandan.com/' target='_blank' rel='noopener noreferrer'>
						Mauro Brandan
					</a>
				</p>

				<ul>
					<li>
						<a href='https://newsapi.org/' target='_blank' rel='noopener noreferrer'>
							News API
						</a>
					</li>
					<li>
						<a href='https://techcrunch.com/' target='_blank' rel='noopener noreferrer'>
							TechCrunch
						</a>
					</li>
					<li>
						<a href='https://github.com/MauroBrandan/NewsApp' target='_blank' rel='noopener noreferrer'>
							GitHub
						</a>
					</li>
				</ul>
			</footer>

			<style jsx>{`
				footer {
					display: flex;
					justify-content: space-around;
					height: 80px;
				}

				ul {
					display: flex;
					gap: 12px;
					list-style: none;
				}

				ul li {
					list-style: none;
				}
			`}</style>
		</>
	)
}
