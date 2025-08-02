import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
  return (
    <Container>
      <OrdersBoard title="Fila de espera" icon="🕓" />
      <OrdersBoard title="Em preparação" icon="👨‍🍳" />
      <OrdersBoard title="Prontos" icon="✅" />
    </Container>
  );
}
