import React from 'react'

export default function AnimatedText() {
	return (
		<>
			<h2>
				<span
					style={{
						'--start-color': '#007CF0',
						'--end-color': '#00DFD8',
						'--content': '"Top headlines"',
					}}
				>
					Top headlines
				</span>
				<span
					style={{
						'--start-color': '#7928CA',
						'--end-color': '#FF0080',
						'--content': '"from TechCrunch"',
						'--animation': 'a2',
					}}
				>
					from TechCrunch
				</span>
				<span
					style={{
						'--start-color': '#FF4D4D',
						'--end-color': '#F9CB28',
						'--content': '"right now"',
						'--animation': 'a3',
						'animation-name': 'a3',
					}}
				>
					right now
				</span>
			</h2>

			<style jsx>{`
				h2 {
					text-align: center;
					font-size: 5rem;
					letter-spacing: -0.01em;
					margin: 0 0 16px;
				}

				span {
					color: #fff;
					display: block;
					font-size: 50px;
					position: relative;
				}

				span::before {
					animation-name: var(--animation, a);
					animation-duration: 8s;
					animation-iteration-count: infinite;
					background: linear-gradient(90deg, var(--start-color), var(--end-color));
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					color: #fff;
					font-size: 50px;
					position: absolute;
					inset: 0;
					content: var(--content);
					opacity: 1;
				}

				@keyframes a {
					0%,
					16.667%,
					100% {
						opacity: 1;
					}

					33.333%,
					83.333% {
						opacity: 0;
					}
				}

				@keyframes a2 {
					0%,
					100% {
						opacity: 0;
					}

					33.333%,
					50% {
						opacity: 1;
					}

					16.667%,
					66.667% {
						opacity: 0;
					}
				}

				@keyframes a3 {
					0%,
					50%,
					100% {
						opacity: 0;
					}

					66.667%,
					83.333% {
						opacity: 1;
					}
				}
			`}</style>
		</>
	)
}
