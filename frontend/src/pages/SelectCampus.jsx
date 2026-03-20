export default function SelectCampus({ setCampus }) {
  return (
    <div>
      <h2>Select Campus</h2>
      <button onClick={() => setCampus("CAMPUS_ID_1")}>
        Medi-Caps University
      </button>
    </div>
  );
}
