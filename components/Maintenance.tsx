export default function Maintenance() {
  return (
    <>
      <div className="section-head">
        <h2 className="title">Utrzymanie</h2>
      </div>
      <div className="divider"></div>

      <div className="grid">
        <div className="card">
          <h3>Aurexon Care</h3>
          <div className="price">59/mc</div>
          <p>
            ✓ Monitoring<br />
            ✓ Backupy<br />
            ✓ Aktualizacje<br />
            ✓ Bezpieczeństwo<br />
            ✓ Rozwój strony
          </p>
        </div>
        <div className="card">
          <h3>Podstawowa opieka</h3>
          <div className="price">29/mc</div>
          <p>
            ✓ Monitoring<br />
            ✓ Backupy<br />
            ✓ Aktualizacje
          </p>
        </div>
        <div className="card">
          <h3>Niezbędna opieka</h3>
          <div className="price">19/mc</div>
          <p>
            ✓ Monitoring<br />
            ✓ Backupy
          </p>
        </div>
      </div>
    </>
  );
}