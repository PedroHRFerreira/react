import "./style.scss";
const SimulateEndpoint = () => {
  const endpoint = {
    type: "success",
    status: 200,
    data: {
      info: [
        {
          hash: "use4oe8o",
          name: "Pedro",
          email: "Pedro@gmail.com",
          phone: "55 33988490880",
          status: 1,
          profile: 1,
          created_at: "2024-07-31T13:45:18.000000Z",
          updated_at: "2024-09-05T13:55:24.000000Z",
          email_verified_at: "2024-08-22T19:45:05.000000Z",
          sales: [
            {
              id: 1,
              nome: "Smartphone",
              preco: "R$ 2000",
              cores: ["#29d8d5", "#252a34", "#fc3766"],
              ativo: true,
            },
          ],
        },
        {
          hash: "use4oe8P",
          name: "Júlia",
          email: "Júlia@gmail.com",
          phone: "55 33988490880",
          status: 0,
          profile: 0,
          created_at: "2024-07-31T13:45:18.000000Z",
          updated_at: "2024-09-05T13:55:24.000000Z",
          email_verified_at: "2024-08-22T19:45:05.000000Z",
          sales: [
            {
              id: 2,
              nome: "Notebook",
              preco: "R$ 3000",
              cores: ["#ffd045", "#d4394b", "#f37c59"],
              ativo: false,
            },
          ],
        },
        {
          hash: "use4oe8I",
          name: "Mario",
          email: "Mario@gmail.com",
          phone: "55 33988490880",
          status: 0,
          profile: 0,
          created_at: "2024-07-31T13:45:18.000000Z",
          updated_at: "2024-09-05T13:55:24.000000Z",
          email_verified_at: "2024-08-22T19:45:05.000000Z",
          sales: [
            {
              id: 3,
              nome: "Tablet",
              preco: "R$ 1500",
              cores: ["#365069", "#47c1c8", "#f95786"],
              ativo: true,
            },
          ],
        },
      ],
    },
  };
  const date = endpoint.data.info.map((item) => item.created_at);
  const data = new Date(date).toLocaleDateString("pt-BR");

  const totalPrecoPorItem = endpoint.data.info.map((item) =>
    item.sales
      .map((sale) => Number(sale.preco.replace("R$ ", "")))
      .reduce((a, b) => a + b, 0)
  );

  console.log(totalPrecoPorItem);

  return (
    <section className="simulate-endpoint">
      <h1>
        {endpoint.status === 200 && (
          <div className="info-container">
            {endpoint.data.info.map((item) => (
              <article key={item.hash} className="info-card">
                <p>
                  Nome:{" "}
                  <span style={{ color: item.status === 1 ? "blue" : "red" }}>
                    {item.name}
                  </span>
                </p>
                <p> Email: {item.email}</p>
                <p>Telefone: {item.phone}</p>
                <p>Data: {data}</p>

                <div>
                  <h1>Compras feitas nesse périodo:</h1>
                  {item.sales.map((sale) => (
                    <ul key={sale.id}>
                      {sale.ativo === true && (
                        <div>
                          <li>Nome: {sale.nome}</li>
                          <li>Preço: {sale.preco}</li>
                          <li>
                            Cores:{" "}
                            {sale.cores.map((cor) => (
                              <p
                                style={{
                                  color: "white",
                                  backgroundColor: cor,
                                  width: "50%",
                                }}
                                key={cor}
                              >
                                {cor}
                              </p>
                            ))}
                            <h1>Compras feitas: {totalPrecoPorItem}</h1>
                          </li>
                        </div>
                      )}
                    </ul>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </h1>
    </section>
  );
};
export default SimulateEndpoint;
