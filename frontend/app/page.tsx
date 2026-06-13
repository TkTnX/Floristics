import {
	AboutDelivery,
	Achievements,
	AchievementsThree,
	AchievementsTwo,
	BestSellers,
	Combos,
	Feedback,
	Hero,
	Portal,
	Reviews,
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
			{/* <Combos /> */}
			<AchievementsThree />
			<Reviews />
			<Portal />
			<AboutDelivery />
		</>
	)
}
