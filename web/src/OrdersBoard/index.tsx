import { useState } from "react";
import { OrderModal } from "../OrderModal";
import type { Order } from "../types/Order";
import { Board, OrdersContainer } from "./styles";

interface Props {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: Props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((item) => (
            <button type="button" onClick={() => handleOpenModal(item)}>
              <strong>{item.table}</strong>
              <span>{item.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
