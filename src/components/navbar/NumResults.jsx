export default function NumResults({ searchResults }) {
  return (
    <p className="num-results">
      Displaying {searchResults.length} episodes.
    </p>
  );
}