export const Header = ({ headerTitle = '' }) => {
  return (
    <header className="bg-black text-white p-4 text-center">
      <b>{headerTitle}</b>
      <h1 className="text-3xl font-bold">ReadItOrDieTrying</h1>
      <p className="text-sm italic">No mercy. No hesitation. No excuses.</p>
    </header>
  );
}