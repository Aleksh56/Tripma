import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TicketsList from "../../components/TicketsList/TicketsList";

const Tickets = () => {
  return (
    <>
      <Header />
      <TicketsList />
      <Footer />
    </>
  );
};

export default Tickets;
