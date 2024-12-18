function selectCard({ pokemons, selectedIdx, onSelect }) {
  return (
    <select
      className="p-3 w-full outline-none font-medium"
      value={selectedIdx}
      onChange={(e) => onSelect(Number(e.target.value))}
    >
      <option value="">Select Pokemon</option>
      {pokemons.map((poke, idx) => (
        <option className="font-normal" key={poke.id} value={idx}>
          {poke?.name.charAt(0).toUpperCase() + poke.name?.slice(1)}
        </option>
      ))}
    </select>
  );
}

export default selectCard;
