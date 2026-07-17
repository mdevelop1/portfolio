export default function Testimonials() {
  return (
    <>
      <div className="section-head">
        <h2 className="title">Opinie klientów</h2>
      </div>
      <div className="divider"></div>

      <div className="grid">
        <div className="card">
          <p>
            „Aurexon stworzył dla nas stronę, która idealnie oddaje charakter naszej marki. Profesjonalizm na najwyższym poziomie!”
          </p>
          <p className="signature">— Anna Kowalska, CEO, EcoTech</p>
        </div>
        <div className="card">
          <p>
            „Dzięki ich systemowi webowemu nasza wewnętrzna komunikacja znacznie się poprawiła. Polecam każdemu, kto potrzebuje niezawodnego rozwiązania.”
          </p>
          <p className="signature">— Jan Nowak, IT Manager, Grupa Beta</p>
        </div>
        <div className="card">
          <p>
            „Proces współpracy był przejrzysty, terminy dotrzymane, a efekt końcowy przeszedł nasze najśmielsze oczekiwania.”
          </p>
          <p className="signature">— Piotr Zielinski, właściciel, Pracownia Kreatywna</p>
        </div>
      </div>
    </>
  );
}