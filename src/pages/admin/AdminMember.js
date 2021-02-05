import React from 'react';
import Navbar from '../../components/common/Navbar';

const AdminMember = () => {
  return (
    <section className="dashboard">
      <Navbar />
      <main className="content">
        <form action="" className="form">
          <input type="text" className="input" />
          <button type="submit">Search</button>
        </form>
      </main>
    </section>
  );
};

export default AdminMember;
