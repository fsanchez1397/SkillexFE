async function TalentPage({
  params,
}: {
  params: Promise<{ talentId: string }>;
}) {
  const { talentId } = await params;
  const parsedTalentId = Number(talentId);
  return Number.isNaN(parsedTalentId) ? (
    <div>Error loading talent id</div>
  ) : (
    <div>
      <p>{`You are viewing talent: ${talentId}`}</p>
    </div>
  );
}

export default TalentPage;
