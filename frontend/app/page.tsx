import {
	Achievements,
	AchievementsTwo,
	BestSellers,
	Feedback,
	Hero,
	Sales
} from '@/widgets'

export default function Home() {
	return (
		<>
			<Hero />
			<Achievements />
			<BestSellers />
			<AchievementsTwo />
			<Sales />
			<Feedback />
		</>
	)
}
