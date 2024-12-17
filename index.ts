import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.post.createMany({
		data: [
			{
				topic: "Technology",
				title:
					"The Transformative Power of Technology in the Workplace: Digital Age Work Dynamics",
				slug: "transformative-technology-workplace-dynamics",
				content:
					"Technology is fundamentally reshaping the core dynamics of the modern workplace. The transition from traditional office environments to global, flexible, and digital work models is completely redefining how companies and employees approach work. Artificial intelligence, cloud computing, remote work platforms, and digital collaboration tools are increasing productivity while simultaneously transforming work culture. Businesses can now access talent beyond geographical boundaries, while employees can manage work-life balance more effectively. This digital transformation represents not just a technological change, but a revolutionary shift in organizational culture and work approaches.",
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				avatar:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				name: "Tracey Wilson",
			},
			{
				topic: "Technology",
				title:
					"The Future of Technology: Digital Transformation Dynamics Towards 2030",
				slug: "technology-future-digital-transformation-2030",
				content:
					"In the next decade, technology will radically transform nearly every aspect of human life. Artificial intelligence and machine learning will play an increasingly significant role not just in technical processes, but in decision-making mechanisms. With the Internet of Things (IoT), every device will be able to communicate, and smart systems will become an integral part of our daily lives. Emerging technologies like quantum computing, biotechnology, and augmented reality will create revolutions across sectors from healthcare to education, agriculture to defense. This technological transformation means not just technical development, but a reshaping of social, ethical, and economic structures.",
				avatar:
					"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				name: "Jason Francisco",
			},
			{
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				name: "Elizabeth Slavin",
				avatar:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				topic: "Technology",
				title:
					"The Role of Technology in Education: The Learning Revolution in the Digital Age",
				slug: "technology-role-education-digital-learning",
				content:
					"Technology is completely redesigning educational systems. The transition from traditional classroom environments to global, accessible, and personalized learning models continues rapidly. Online education platforms, AI-supported teaching systems, and virtual reality applications offer students unlimited learning opportunities. Students can now access the best educators and resources from anywhere in the world, while educational content can be tailored to each individual's learning speed and style. This digital transformation means democratizing education and removing barriers to global knowledge sharing.",
			},
			{
				avatar:
					"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				name: "John Doe",
				topic: "Technology",
				title:
					"Revolution in Healthcare Technologies: AI and Innovation in Patient Care",
				slug: "healthcare-technologies-patient-care-innovation",
				content:
					"Healthcare technologies are fundamentally transforming medical diagnosis, treatment, and patient care processes. AI-supported diagnostic systems are creating a revolution in early disease detection, while personalized medicine applications enable the development of treatment protocols specific to patients' unique genetic structures. Telemedicine applications make remote patient monitoring and consulting services possible. Robotic surgical technologies perform microscopically precise interventions, accelerating post-operative recovery processes. This technological transformation significantly increases the accessibility, efficiency, and quality of healthcare services.",
			},
			{
				avatar:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				name: "Jane Doe",
				topic: "Health",
				title:
					"Mental Health Guide: Strategies for Protecting Your Mental Well-being in the Modern World",
				slug: "mental-health-guide-modern-world",
				content:
					"In today's fast-paced and competitive world, mental health has become even more critical than physical health. Challenges of modern life like stress, technology addiction, and social isolation deeply impact our psychological well-being. Mindfulness techniques, regular exercise, healthy nutrition, quality sleep, and social connections have become the fundamental building blocks of mental wellness. Seeking professional support is one of the most important ways to enhance psychological resilience. Mental health is no longer a luxury but a fundamental life skill that directly affects our quality of life and success.",
			},
			{
				avatar:
					"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				name: "Fiona Smith",
				topic: "Finance",
				title:
					"Financial Freedom Roadmap: The Art of Wisely Managing Your Money",
				slug: "financial-freedom-roadmap",
				content:
					"In today's variable economic conditions, financial literacy and strategic money management are of vital importance. Beyond creating an effective budget, it's crucial to set long-term financial goals, develop regular savings habits, and create investment strategies. Passive income sources, diversified investment portfolios, and smart borrowing techniques form the key to financial security. Digital fintech solutions and investment platforms offer individual investors more opportunities than ever before. Financial freedom means not just saving money, but being able to manage it intelligently.",
			},
			{
				avatar:
					"https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				name: "Tom Johnson",
				topic: "Travel",
				title: "2024 Travel Guide: World Destinations Waiting to be Explored",
				slug: "2024-travel-guide-world-destinations",
				content:
					"Modern travel is about more than just the desire to explore—it encompasses goals of cultural depth, sustainability, and personal growth. The synthesis of technology and tradition in Japan, the artistic and culinary richness of Italy, the natural wonders of New Zealand, and the multicultural social structure of Canada stand out as this year's top travel destinations. Responsible tourism, respect for local cultures, minimal environmental impact, and authentic experiences have become priorities for modern travelers. Travel is no longer just about seeing new places, but an opportunity to understand the world and ourselves more deeply.",
			},
			{
				avatar:
					"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				name: "Alice Brown",
				topic: "Fitness",
				title: "Healthy Living Strategy: A Holistic Fitness Approach",
				slug: "healthy-living-strategy-holistic-fitness",
				content:
					"Fitness has evolved from a narrow activity focused on physical appearance to a holistic lifestyle. Regular exercise is no longer just about increasing muscle mass or losing weight, but about mental health, stress management, and improving overall life quality. A balanced program incorporating different exercise types should be personalized to an individual's goals and physical capacity. Endurance training, strength work, flexibility exercises, and mental focus techniques have become fundamental components of modern fitness understanding.",
			},
			{
				avatar:
					"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				name: "Sara Johnson",
				topic: "Health",
				title: "Nutrition Science: Fundamental Strategies for Healthy Living",
				slug: "nutrition-science-healthy-living-strategies",
				content:
					"Modern nutrition science deeply explores how foods affect body functions and health beyond simply satisfying hunger. From anti-inflammatory nutrition to gut health, from microbiome management to hormonal balance, multiple factors form the basic dynamics of healthy eating. A diet rich in local, seasonal, and organic foods, staying away from processed foods, strengthens the immune system and reduces long-term health risks. Nutrition is no longer just a necessity but a strategic tool for optimizing life quality and health.",
			},
			{
				avatar:
					"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
				image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
				name: "Selena White",
				topic: "Technology",
				title:
					"The Digital Security Era: Cybersecurity and Personal Data Protection",
				slug: "digital-security-era-cybersecurity",
				content:
					"In our digitalizing world, cybersecurity has evolved from being just a corporate issue to becoming a fundamental agenda item for individual users. Protecting personal data, digital identity security, and online privacy are becoming increasingly critical. AI-supported cybersecurity systems are developing proactive defense mechanisms against ransomware, identity theft attacks, and other digital threats. Users' digital literacy, strong passwords, two-factor authentication, and regular security updates have become fundamental components of personal cyber security.",
			},
		],
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
