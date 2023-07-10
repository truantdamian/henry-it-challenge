import RankingList from "../../components/RankingList";

export default function Page() {
  return (
    <section className="md:flex md:flex-col">
      <h1 className="font-light mb-2 text-2xl text-center md:text-3xl md:mb-10">
        Golf Leaderboard
      </h1>
      <RankingList />
    </section>
  );
}
