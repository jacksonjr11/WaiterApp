import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
  return (
    <Container>
      <OrdersBoard title="Fila de espera" icon="🕓" orders={[]}/>
      <OrdersBoard title="Em preparação" icon="👨‍🍳" orders={[]} />
      <OrdersBoard title="Prontos" icon="✅" orders={[]} />
    </Container>
  );
}
