
const About = () => {
  return (
    <section className="flex gap-10 px-5 mt-20">
		<div className="w-1/3 ps-20">
			<img src="/images/mara.png" alt="Portrait" />
		</div>
		<div className="w-2/3 me-24 text-justify">
			<h1 className="text-5xl font-semibold text-pastel-blue mb-10">
				Hello!
			</h1>
			<p className="text-lg text-light-gray-text mb-3">
				I am Mara, I'm 32 and I work as a back-end developer.
			</p>
			<p className="text-lg text-light-gray-text mb-3">
				I am based in Spain but I am available to work remotely and have
				strong English communication skills, as I worked as an English
				translator for 4 years before switching to working in Tech.
			</p>
			<p className="text-lg text-light-gray-text mb-3">
				My main work language is PHP with Symfony but I have also worked
				in JavaScript with NodeJS and Express and in Java with Spring
				Boot.
			</p>
			<p className="text-lg text-light-gray-text mb-3">
				You can check out my personal projects and an overview of what I
				have worked on in my previous jobs in the <a href="/projects" className="text-pastel-blue hover:underline font-semibold">Projects</a> page.
			</p>
			<p className="text-lg text-light-gray-text mb-3">
				I pride myself on being efficient, detail-oriented, a good team
				worker and on having good communication skills. I worked as a
				freelance for three years in my previous area of employment, I
				know how to make effective communication with colleagues,
				clients and any necessary parties.
			</p>
			<p className="text-lg text-light-gray-text mb-3">
				I am a fast learner and am always curious about new
				technologies, methodologies and practices that can help me
				become a better professional.
			</p>
			<p className="text-lg text-light-gray-text mb-3">
				If you want to know more or collaborate with me, head to my
				<a href="/contact" className="text-pastel-blue hover:underline font-semibold">Contact</a> page and let's chat!
			</p>
		</div>
	</section>
  )
}

export default About