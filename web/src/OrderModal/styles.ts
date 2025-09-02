import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 30rem;
  border-radius: 0.5rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }
    }

    img {
      border-radius: 0.375rem;
    }

    .quantity {
      font-size: 0.875rem;
      color: #666;
      display: block;
      min-width: 1.25rem;
      margin-left: 0.75rem;
    }

    .product-details {
      margin-left: 0.25rem;

      strong {
        display: block;
        margin-bottom: 0.25rem;
      }

      span {
        font-size: 0.875rem;
        color: #666;
      }
    }
  }

  .total {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  .primary {
    background: #333333;
    border-radius: 3rem;
    border: 0;
    color: #FFF;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .secondary {
    border-radius: 3rem;
    color: #D73035;
    padding: 0.875rem 1.5rem;
    font-weight: bold;
    background: transparent;
    border: 0;
    margin-top: 0.75rem;
  }



`;
